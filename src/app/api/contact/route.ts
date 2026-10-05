import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const targetEmail = process.env.TARGET_EMAIL || siteConfig.contact.email || "canadianclassicimmigration@gmail.com";
    const serviceObj = siteConfig.services.find((s) => s.id === service);
    const serviceTitle = serviceObj ? serviceObj.title : (service === "other" ? "Other Inquiry" : service || "General Inquiry");

    const emailSubject = `New Website Enquiry: ${serviceTitle} - ${name}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #2d3748; margin: 0; padding: 24px; background-color: #f7fafc; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #c62828 0%, #8b0000 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
            .content { padding: 28px 24px; }
            .field-row { margin-bottom: 20px; border-bottom: 1px solid #edf2f7; padding-bottom: 16px; }
            .field-row:last-child { border-bottom: none; }
            .field-label { font-size: 11px; text-transform: uppercase; color: #718096; font-weight: 700; letter-spacing: 0.8px; margin-bottom: 6px; }
            .field-value { font-size: 15px; color: #1a202c; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #c62828; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #2d3748; margin-top: 6px; border-top: 1px solid #edf2f7; border-right: 1px solid #edf2f7; border-bottom: 1px solid #edf2f7; }
            .btn { display: inline-block; padding: 12px 24px; background-color: #c62828; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 10px; }
            .footer { background: #f8fafc; padding: 18px 24px; text-align: center; font-size: 12px; color: #a0aec0; border-top: 1px solid #edf2f7; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>CANADIAN CLASSIC IMMIGRATION</h1>
              <p>New Client Enquiry from Website</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #c62828; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #c62828; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Service Interested In</div>
                <div class="field-value"><strong>${serviceTitle}</strong></div>
              </div>
              <div class="field-row">
                <div class="field-label">Client Message</div>
                <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(emailSubject)}" class="btn">Reply to ${name}</a>
              </div>
            </div>
            <div class="footer">
              This enquiry was sent via Canadian Classic Immigration contact form.<br />
              Target Inbox: ${targetEmail}
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
NEW ENQUIRY - CANADIAN CLASSIC IMMIGRATION
-------------------------------------------
Full Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceTitle}

Message:
${message}
-------------------------------------------
Sent to: ${targetEmail}
    `.trim();

    // 1. Check Resend API
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Canadian Classic Immigration <onboarding@resend.dev>";
      const { error: resendError } = await resend.emails.send({
        from: fromEmail,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
        text: textContent,
      });

      if (resendError) {
        console.error("Resend delivery failed:", resendError);
        return NextResponse.json(
          { success: false, error: resendError.message || "Failed to send email via Resend." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: "Enquiry sent successfully!" });
    }

    // 2. Check Nodemailer / Gmail SMTP credentials
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER || "canadianclassicimmigration@gmail.com";

    if (emailPass) {
      const transporter = process.env.SMTP_HOST
        ? nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          })
        : nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          });

      await transporter.sendMail({
        from: `"Canadian Classic Immigration Website" <${emailUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
        text: textContent,
      });

      return NextResponse.json({ success: true, message: "Enquiry sent successfully!" });
    }

    // 3. Development fallback if credentials not configured yet
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "⚠️ [DEV MODE] No email credentials found (EMAIL_PASS, GMAIL_APP_PASSWORD, or RESEND_API_KEY).\nSimulated email output:",
        { to: targetEmail, replyTo: email, subject: emailSubject, name, phone, service: serviceTitle }
      );
      return NextResponse.json({
        success: true,
        message: "Simulated email sending in development. Add EMAIL_PASS or RESEND_API_KEY to .env.local for real delivery.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Email service is not configured. Please configure email credentials.",
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
