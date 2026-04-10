import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className="group relative block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 h-full transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:border-secondary/30 hover:-translate-y-2">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
            {icon}
          </div>
          <div className="absolute -inset-2 bg-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center gap-2 text-secondary font-semibold">
            <span>Saiba mais</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;