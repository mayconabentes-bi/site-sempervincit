import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Landmark, Monitor, MapPin, CheckCircle, Cable, Camera, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-cftv.jpg";

const projects = [
  {
    title: "Segurança Inteligente no PIM",
    category: "Indústria",
    location: "Distrito Industrial, Manaus",
    description: "Implementação de sistema de CFTV com reconhecimento facial e integração de perímetro para uma das maiores fábricas de componentes eletrônicos do Polo Industrial.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["CFTV IA", "Reconhecimento Facial", "PIM"],
    metrics: { cameras: "120+", area: "45.000m²", uptime: "99,9%" },
    color: "from-blue-600 to-blue-900"
  },
  {
    title: "Rede de Alta Performance Governamental",
    category: "Setor Público",
    location: "Centro, Manaus",
    description: "Reestruturação completa do cabeamento estruturado e implementação de link dedicado para órgão público estadual, garantindo 99.9% de uptime.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    tags: ["Cabeamento", "Internet Dedicada", "Setor Público"],
    metrics: { pontos: "500+", fibra: "8.000m", uptime: "99,9%" },
    color: "from-slate-700 to-slate-900"
  },
  {
    title: "Infraestrutura de Rede para Varejo",
    category: "Comércio",
    location: "Adrianópolis, Manaus",
    description: "Solução completa de Wi-Fi e segurança eletrônica para centro comercial de alto padrão, integrando mais de 50 câmeras e cobertura total de internet.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Wi-Fi 6", "Segurança Eletrônica", "Varejo"],
    metrics: { cameras: "50+", cobertura: "100%", lojas: "35" },
    color: "from-orange-600 to-orange-900"
  },
  {
    title: "Conectividade no Interior do Amazonas",
    category: "Infraestrutura",
    location: "Coari, Amazonas",
    description: "Instalação de infraestrutura de rede robusta e sistemas de monitoramento em ambiente remoto, suportando condições climáticas extremas da região amazônica.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    tags: ["Redes Remotas", "Logística Fluvial", "Interior"],
    metrics: { distancia: "360km", cameras: "24", fibra: "2.000m" },
    color: "from-emerald-600 to-emerald-900"
  }
];

const impactStats = [
  { number: "1000+", label: "Projetos Entregues", icon: CheckCircle },
  { number: "15.000m+", label: "Fibra Óptica Instalada", icon: Cable },
  { number: "1.200+", label: "Câmeras Monitoradas", icon: Camera },
  { number: "99,9%", label: "Uptime Médio", icon: Wifi },
];

const Cases = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Cases de Sucesso"
          subtitle="Projetos que Transformam o Amazonas"
          description="Conheça como a Semper Vincit entrega valor através de soluções tecnológicas de ponta em Manaus e todo o interior do estado."
          badge="Portfólio"
          image={heroImage}
        />

        {/* Impacto em Números */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/10 mb-4">
                NOSSO IMPACTO
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Projetos de <span className="text-secondary">Destaque</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções personalizadas para os desafios únicos da infraestrutura na Região Norte.
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border hover:border-secondary/30 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 text-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                            <p className="text-white font-bold text-lg">{value}</p>
                            <p className="text-white/60 text-xs capitalize">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center bg-card ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} className="text-secondary" />
                        {project.location}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-muted text-xs font-semibold rounded-full border border-border">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="w-fit group/btn" asChild>
                      <Link to="/contato" className="flex items-center gap-2">
                        Solicitar Projeto Similar
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sua empresa pode ser o próximo <span className="text-secondary">Case de Sucesso</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Estamos prontos para projetar e implementar a infraestrutura tecnológica que seu negócio precisa para crescer no Amazonas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 text-lg group" asChild>
                <a 
                  href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vi%20os%20cases%20no%20site%20e%20gostaria%20de%20um%20projeto%20similar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Solicitar Consultoria Gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-14 text-lg" asChild>
                <Link to="/pim">Soluções para o PIM</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
