import Link from "next/link";
import { ArrowRight, Home, Zap, MapPin, GraduationCap, Briefcase, Plane, Heart } from "lucide-react";

// Helper to map string icon names to Lucide components
const IconMap = {
  Home,
  Zap,
  MapPin,
  GraduationCap,
  Briefcase,
  Plane,
  Heart
};

type ServiceCardProps = {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // @ts-ignore
  const IconComponent = IconMap[service.icon] || Home;
  const numString = (index + 1).toString().padStart(2, '0');

  return (
    <Link 
      href={`/services/${service.id}`}
      className="group block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
    >
      {/* Background Hover Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-offwhite to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary-red transition-colors duration-300"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="w-14 h-14 rounded-full bg-bg-warmwhite flex items-center justify-center text-primary-red group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
            <IconComponent size={28} strokeWidth={1.5} />
          </div>
          <span className="text-gray-300 font-heading text-2xl group-hover:text-accent-gold transition-colors duration-300">{numString}</span>
        </div>
        
        <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-black group-hover:text-primary-red transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-8 line-clamp-3">
          {service.description}
        </p>
        
        <div className="flex items-center text-sm font-semibold text-primary-charcoal group-hover:text-primary-red transition-colors duration-300 mt-auto">
          Explore Service
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
