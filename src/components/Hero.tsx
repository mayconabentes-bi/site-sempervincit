import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Wifi, LucideIcon } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  children?: ReactNode;
  variant?: "home" | "page";
  badge?: string;
  floatingIcons?: LucideIcon[];
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = "Solicitar Orçamento",
  ctaLink = "/contato",
  image,
  children,
  variant = "page",
  badge,
  floatingIcons = [],
}: HeroProps) => {
  if (variant === "home") {
    return (
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image if provided */}
          {image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
          
          {/* Gradient Orbs */}
          <div className="absolute top-20 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl float-animation-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                               linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[15%] glass rounded-2xl p-4 float-animation opacity-60">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
          <div className="absolute top-48 right-[20%] glass rounded-2xl p-4 float-animation-delayed opacity-60">
            <Zap className="w-8 h-8 text-secondary" />
          </div>
          <div className="absolute bottom-40 left-[25%] glass rounded-2xl p-4 float-animation opacity-60" style={{ animationDelay: '1s' }}>
            <Wifi className="w-8 h-8 text-secondary" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-secondary rounded-full pulse-glow" />
              <span className="text-sm font-medium text-white/90">Tecnologia que transforma</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-white leading-tight animate-fade-in">
              {title}
              <span className="block text-secondary mt-2">{subtitle}</span>
            </h1>
            
            {description && (
              <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                asChild 
                className="text-lg h-14 px-8 bg-secondary hover:bg-secondary/90 text-white group"
              >
              {ctaLink.startsWith('http') ? (
                  <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : ctaLink.startsWith('#') ? (
                  <a href={ctaLink} className="flex items-center gap-2">
                    {ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link to={ctaLink} className="flex items-center gap-2">
                    {ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-lg h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              >
                <Link to="/sobre">Conheça a Empresa</Link>
              </Button>
            </div>
            
            {children}
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    );
  }

  // Page variant - Modern design similar to home
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image if provided */}
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 -left-32 w-80 h-80 bg-secondary/25 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl float-animation-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingIcons[0] && (
            <div className="absolute top-24 left-[10%] glass rounded-2xl p-3 float-animation opacity-50">
              {(() => { const Icon = floatingIcons[0]; return <Icon className="w-6 h-6 text-secondary" />; })()}
            </div>
          )}
          {floatingIcons[1] && (
            <div className="absolute top-32 right-[15%] glass rounded-2xl p-3 float-animation-delayed opacity-50">
              {(() => { const Icon = floatingIcons[1]; return <Icon className="w-6 h-6 text-secondary" />; })()}
            </div>
          )}
          {floatingIcons[2] && (
            <div className="absolute bottom-32 left-[20%] glass rounded-2xl p-3 float-animation opacity-50" style={{ animationDelay: '1s' }}>
              {(() => { const Icon = floatingIcons[2]; return <Icon className="w-6 h-6 text-secondary" />; })()}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-secondary rounded-full pulse-glow" />
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">{badge}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight animate-fade-in">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-secondary font-semibold animate-fade-in">
            {subtitle}
          </p>
          
          {description && (
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              asChild 
              className="text-lg h-14 px-8 bg-secondary hover:bg-secondary/90 text-white group"
            >
              {ctaLink.startsWith('http') ? (
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : ctaLink.startsWith('#') ? (
                <a href={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </Button>
          </div>
          
          {children}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
