export interface ServiceItem {
  id: string;
  title: string;
  category: "Permanent Residency" | "Work Permits" | "Study Permits" | "Visitor & Family" | "PR & Citizenship";
  price: string;
  description: string;
  icon: string;
  popular?: boolean;
}

export interface TestimonialItem {
  name: string;
  location: string;
  program: string;
  quote: string;
  rating: number;
  date: string;
}

export const siteConfig = {
  companyName: "CANADIAN CLASSIC IMMIGRATION",
  shortName: "CCI",
  tagline: "Your Future in Canada, Handled With Confidence.",
  description: "Personalized immigration guidance for individuals, families, students and professionals looking to build their future in Canada.",
  contact: {
    phone: "+1 (250) 467-3671",
    email: "canadianclassicimmigration@gmail.com",
    officeHours: "Mon - Fri: 9:00 AM - 5:00 PM MST",
    whatsappNumber: "12504673671",
  },
  urls: {
    consultation: "https://calendly.com/placeholder-cci", // placeholder
  },
  socialLinks: {
    instagram: "https://instagram.com/canadianclassic",
    facebook: "https://facebook.com/canadianclassic",
    linkedin: "https://linkedin.com/company/canadianclassic",
    whatsapp: "https://wa.me/12504673671"
  },
  services: [
    {
      id: "express-entry",
      title: "Express Entry",
      category: "Permanent Residency",
      price: "$2000 and up",
      description: "The application process for skilled immigrants to settle in Canada permanently and take part in the economy.",
      icon: "Zap",
      popular: true
    },
    {
      id: "family-sponsorship",
      title: "Family Sponsorship",
      category: "Visitor & Family",
      price: "$2500 and up",
      description: "Your relatives can live, study and work in Canada if they become permanent residents of Canada.",
      icon: "Heart",
      popular: true
    },
    {
      id: "provincial-nominees",
      title: "Provincial Nominees (PNP)",
      category: "Permanent Residency",
      price: "$2200 and up",
      description: "Get PR through PNP. Depending on the province, we find the best program suitable for you and your family.",
      icon: "MapPin",
      popular: true
    },
    {
      id: "rural-northern-immigration",
      title: "Rural and Northern Immigration Pilot",
      category: "Permanent Residency",
      price: "$2200 and up",
      description: "Developed to help spread the benefits of economic immigration to smaller communities throughout Canada.",
      icon: "Home"
    },
    {
      id: "atlantic-immigration-pilot",
      title: "Atlantic Immigration Pilot",
      category: "Permanent Residency",
      price: "$2200 and up",
      description: "Helps employers in Atlantic Canada hire foreign skilled workers and international graduates who want to settle in the region.",
      icon: "Compass"
    },
    {
      id: "work-permit",
      title: "Work Permit",
      category: "Work Permits",
      price: "$1000 and up",
      description: "Work permits and applications for temporary workers, business people, students, and caregivers in Canada.",
      icon: "Briefcase",
      popular: true
    },
    {
      id: "work-permit-extension",
      title: "Work Permit Extension",
      category: "Work Permits",
      price: "$500 and up",
      description: "Maintain your authorized legal status in Canada with timely and accurate work permit renewals.",
      icon: "RefreshCw"
    },
    {
      id: "work-permit-spouse",
      title: "Work Permit for Spouse",
      category: "Work Permits",
      price: "$1500",
      description: "Your spouse can obtain an Open Work Permit if you are a skilled worker or full-time student in Canada.",
      icon: "Users"
    },
    {
      id: "study-permit",
      title: "Study Permit",
      category: "Study Permits",
      price: "$1000 and up",
      description: "Students studying in Canada have exceptional opportunities to gain world-class education and settle permanently.",
      icon: "GraduationCap",
      popular: true
    },
    {
      id: "study-permit-extension",
      title: "Study Permit Extension",
      category: "Study Permits",
      price: "$500 and up",
      description: "Need to extend your study permit? We assist you in correctly preparing and filing your study extension.",
      icon: "BookOpen"
    },
    {
      id: "pr-card-renewal",
      title: "PR Card Renewal",
      category: "PR & Citizenship",
      price: "$500 and up",
      description: "Renew your permanent resident card, replace a lost or stolen card, or verify residency obligations.",
      icon: "CreditCard"
    },
    {
      id: "citizenship-application",
      title: "Citizenship Application",
      category: "PR & Citizenship",
      price: "$600 and up",
      description: "Comprehensive guidance for Permanent Residents taking the final step to become Canadian citizens.",
      icon: "Award"
    },
    {
      id: "visitor-visa",
      title: "Visitor Visa",
      category: "Visitor & Family",
      price: "$600 and up",
      description: "Temporary Resident Visa applications for tourism, family visits, or business exploration across Canada.",
      icon: "Plane"
    },
    {
      id: "super-visa",
      title: "Parents / Grandparents Super Visa",
      category: "Visitor & Family",
      price: "$600 and up",
      description: "If you are a Permanent Resident or Citizen of Canada, bring your parents or grandparents on a multi-entry Super Visa.",
      icon: "Shield"
    },
    {
      id: "extend-stay-canada",
      title: "Extend Your Stay in Canada",
      category: "Visitor & Family",
      price: "$500 and up",
      description: "Need to extend your stay as a visitor in Canada? We ensure compliant and timely filing of your Visitor Record.",
      icon: "Clock"
    }
  ] as ServiceItem[],
  stats: [
    { label: "Client Satisfaction", value: "4.9 ⭐" },
    { label: "Transparent Pricing", value: "100%" },
    { label: "Personalized Strategy", value: "01-on-01" },
    { label: "Dedicated End-to-End Support", value: "24/7" }
  ],
  testimonials: [
    {
      name: "Harpreet & Simran Sandhu",
      location: "Brampton, ON",
      program: "Spousal Sponsorship",
      quote: "After months of stress trying to understand spousal sponsorship checklists, Canadian Classic Immigration stepped in. Their clarity, attention to detail, and regular updates kept us calm throughout. Approved in just 8 months!",
      rating: 5,
      date: "Recent Approval"
    },
    {
      name: "Marcus Vance",
      location: "Calgary, AB",
      program: "Alberta PNP & Express Entry",
      quote: "CCI mapped out an exact strategy for my tech background under the Alberta Express Entry stream. Their honesty regarding processing times and 100% upfront pricing made the experience stress-free.",
      rating: 5,
      date: "Recent Approval"
    },
    {
      name: "Priya Rajan",
      location: "Halifax, NS",
      program: "Atlantic Immigration Pilot (AIP)",
      quote: "Navigating employer endorsements and the Atlantic Immigration Pilot felt overwhelming before finding CCI. Their team reviewed every single document meticulously and answered questions promptly.",
      rating: 5,
      date: "Recent Approval"
    },
    {
      name: "David & Elena Rossi",
      location: "Toronto, ON",
      program: "Parents Super Visa",
      quote: "We wanted to bring my mother to Canada on a Super Visa. CCI organized the medical insurance guidelines, income requirements, and proof of ties seamlessly. Visa was granted with 10-year validity!",
      rating: 5,
      date: "Recent Approval"
    },
    {
      name: "Amina Al-Mansoor",
      location: "Edmonton, AB",
      program: "Study Permit & PGWP Transition",
      quote: "From obtaining my initial Canadian study permit to successfully filing my Post-Graduation Work Permit, their guidance has been outstanding. They truly treat you like family, not just a case number.",
      rating: 5,
      date: "Recent Approval"
    },
    {
      name: "Rajesh & Kavita Sharma",
      location: "Surrey, BC",
      program: "Federal Skilled Worker (Express Entry)",
      quote: "Their CRS score breakdown and actionable advice helped us maximize our points and receive an ITA smoothly. Transparent pricing and genuine dedication from start to finish.",
      rating: 5,
      date: "Recent Approval"
    }
  ] as TestimonialItem[]
};
