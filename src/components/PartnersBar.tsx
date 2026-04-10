import { useEffect, useRef } from "react";

const partners = [
  { name: "Intelbras", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_Intelbras.svg/1200px-Logo_Intelbras.svg.png" },
  { name: "Furukawa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Furukawa_Electric_logo.svg/1280px-Furukawa_Electric_logo.svg.png" },
  { name: "Hikvision", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hikvision_logo.svg/1200px-Hikvision_logo.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" },
  { name: "Ubiquiti", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ubiquiti_Networks_logo.svg/1200px-Ubiquiti_Networks_logo.svg.png" },
  { name: "Schneider Electric", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_logo.svg/1200px-Schneider_Electric_logo.svg.png" },
];

const PartnersBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">
          Tecnologia Validada pelos Líderes Globais
        </p>
        <div 
          ref={scrollRef}
          className="flex gap-16 items-center whitespace-nowrap overflow-x-hidden"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
