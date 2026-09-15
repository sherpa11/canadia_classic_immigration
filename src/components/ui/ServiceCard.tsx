import Link from "next/link";
import { 
  ArrowRight, 
  Home, 
  Zap, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Heart,
  Compass,
  RefreshCw,
  Users,
  BookOpen,
  CreditCard,
  Award,
  Shield,
  Clock,
  Sparkles
} from "lucide-react";
import { ServiceItem } from "@/config/site";

// Helper to map string icon names to Lucide components
const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Home,
  Zap,
  MapPin,
  GraduationCap,
  Briefcase,
  Plane,
  Heart,
  Compass,
  RefreshCw,
  Users,
  BookOpen,
  CreditCard,
  Award,
  Shield,
  Clock
};

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = IconMap[service.icon] || Home;
  const numString = (index + 1).toString().padStart(2, '0');

  return (
    <Link 
      href={`/services/${service.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(198,40,40,0.08)] transition-all duration-400 hover:-translate-y-2 overflow-hidden"
    >
      {/* Subtle Top Indicator Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary-red/20 to-transparent group-hover:from-primary-red group-hover:via-accent-gold group-hover:to-primary-red transition-all duration-500"></div>

      {/* Decorative ambient background blur on hover */}
      <div className="absolute -right-16 -top-16 w-36 h-36 bg-primary-red/5 rounded-full blur-2xl group-hover:bg-primary-red/10 group-hover:scale-150 transition-all duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-13 h-13 rounded-2xl bg-bg-warmwhite flex items-center justify-center text-primary-red group-hover:bg-primary-red group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:rotate-3">
            <IconComponent size={26} strokeWidth={1.75} />
          </div>

          <div className="flex items-center gap-2">
            {service.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-red/10 text-primary-red border border-primary-red/20">
                <Sparkles size={11} /> Popular
              </span>
            )}
            <span className="text-gray-300 font-heading font-bold text-xl group-hover:text-accent-gold transition-colors duration-300">
              {numString}
            </span>
          </div>
        </div>

        {/* Category Pill */}
        <div className="mb-3">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-gray-500 bg-gray-100/80 px-2.5 py-0.5 rounded-md">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-primary-black group-hover:text-primary-red transition-colors duration-300 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Card Footer: Price & Explore Link */}
      <div className="relative z-10 pt-5 border-t border-gray-100/80 flex items-center justify-between gap-3 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Professional Fee</span>
          <span className="text-base font-extrabold text-primary-charcoal group-hover:text-primary-red transition-colors duration-300 font-heading">
            {service.price}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-primary-red group-hover:text-primary-burgundy transition-colors duration-300 bg-primary-red/5 px-3 py-1.5 rounded-full group-hover:bg-primary-red group-hover:text-white">
          <span>View Details</span>
          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
