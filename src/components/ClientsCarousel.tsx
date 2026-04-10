import { useEffect, useRef } from "react";

interface Client {
  name: string;
  logo: string;
}

interface ClientsCarouselProps {
  clients: Client[];
  title?: string;
}

const ClientsCarousel = ({ clients, title = "Empresas que confiam em nós" }: ClientsCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled past half (seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            CLIENTES
          </span>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden whitespace-nowrap py-8"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 w-44 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 bg-white rounded-lg p-4"
          >
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-sm font-medium text-muted-foreground text-center">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsCarousel;
