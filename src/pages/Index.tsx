import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ClientsCarousel from "@/components/ClientsCarousel";
import PartnersBar from "@/components/PartnersBar";
import { Camera, Cable, Wifi, Plug, Zap, Shield, Clock, Award, Users, ArrowRight, Factory, Landmark, Building2, MapPin, ThermometerSun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cftv.jpg";

// Client logos
import logoSeduc from "@/assets/cliente-seduc.png";
import logoFvs from "@/assets/cliente-fvs-new.png";
import logoCetam from "@/assets/cliente-cetam.png";
import logoSerpro from "@/assets/cliente-serpro-new.png";
import logoHospitalAJ from "@/assets/cliente-hospital-adriano-jorge.jpeg";
import logoDetran from "@/assets/cliente-detran.png";

const clients = [
  { name: "SEDUC", logo: logoSeduc },
  { name: "FVS", logo: logoFvs },
  { name: "CETAM", logo: logoCetam },
  { name: "SERPRO", logo: logoSerpro },
  { name: "Hospital Adriano Jorge", logo: logoHospitalAJ },
  { name: "DETRAN-AM", logo: logoDetran },
];

const stats = [
  { number: "15.000m+", label: "Fibra Óptica no PIM", icon: Cable },
  { number: "1.200+", label: "Câmeras Monitoradas", icon: Camera },
  { number: "85+", label: "Indústrias Atendidas", icon: Factory },
  { number: "24/7", label: "Pronta Resposta Local", icon: Shield },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Integradora de Soluções de Alta Performance em TI | Manaus - AM"
        description="A Semper Vincit é líder em TI e Infraestrutura para o Polo Industrial de Manaus (PIM). +17 anos em CFTV, Cabeamento e Redes para a indústria amazônica."
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Semper Vincit",
          "description": "Integradora de Soluções de Alta Performance em TI e Infraestrutura para o Polo Industrial de Manaus e Região Norte.",
          "image": "https://www.sempervincit.com.br/logo.png",
          "@id": "https://www.sempervincit.com.br",
          "url": "https://www.sempervincit.com.br",
          "telephone": "+5592985759589",
          "foundingDate": "2008",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Visconde de Sinimbu, 10, Parque das Laranjeiras, Flores",
            "addressLocality": "Manaus",
            "addressRegion": "AM",
            "postalCode": "69058-790",
            "addressCountry": "BR"
          }
        })}
      />
      <Navbar />
      
      <main className="pt-20">
        <Hero
          variant="home"
          title="Integradora de Soluções de Alta Performance"
          subtitle="TI e Infraestrutura em Manaus"
          description="+17 anos liderando a integração de tecnologia para o Polo Industrial e empresas do Amazonas. Segurança eletrônica, redes ópticas, conectividade dedicada e eletromobilidade."
          image={heroImage}
        />

        {/* Carrossel de Clientes - 2ª seção */}
        <ClientsCarousel clients={clients} title="Instituições que confiam na Semper Vincit" />

        {/* Barra de Parceiros Técnicos */}
        <PartnersBar />

        {/* Stats Section */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selos de Autoridade */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { label: "+17 Anos", sub: "de Mercado" },
                { label: "ISO 9001", sub: "Qualidade" },
                { label: "EIA/TIA", sub: "Certificação" },
                { label: "NR-10", sub: "Segurança" },
                { label: "24/7", sub: "Suporte Local" },
              ].map((seal) => (
                <div key={seal.label} className="text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center mb-2 group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                    <span className="text-lg font-bold text-primary">{seal.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{seal.sub}</p>
                </div>
              ))}
            </div>
            
            {/* Parceiros Tecnológicos / Trust Bar */}
            <div className="mt-20 pt-16 border-t border-border/50">
              <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
                Homologados pelas Maiores Fabricantes Globais
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                {/* Placeholders sofisticados substituindo logos reais para demonstrar a estrutura */}
                {['Hikvision', 'Intelbras', 'Furukawa', 'Ubiquiti', 'Cambium'].map((brand) => (
                  <div key={brand} className="text-2xl font-black tracking-tighter text-foreground/40 hover:text-foreground transition-colors duration-300">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção SEO: Resiliência Tropical */}
        <section className="py-24 bg-mesh relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/50 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="bg-secondary text-primary hover:bg-secondary mb-6 px-4 py-1">Exclusivo: Região Norte</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Tecnologia Projetada para a <span className="text-secondary">Resiliência Tropical</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Diferente de consultorias nacionais, nós entendemos os desafios únicos de Manaus. Poeira, umidade extrema e calor intenso não são empecilhos, mas variáveis que dominamos em cada projeto.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 p-4 rounded-2xl bg-white/40 border border-white/60">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Droplets className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Proteção Anti-Umidade</h4>
                        <p className="text-sm text-muted-foreground">Componentes com vedação IP67 e tratamentos químicos para evitar corrosão acelerada.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl bg-white/40 border border-white/60">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ThermometerSun className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Gestão Térmica Ativa</h4>
                        <p className="text-sm text-muted-foreground">Projetos de climatização redundante para Data Centers e Racks em ambientes fabris.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-orange-500/50 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800" 
                      alt="Infraestrutura Robusta no Amazonas" 
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/90 to-transparent">
                      <p className="text-white font-bold text-lg">"Infraestrutura que não para, mesmo no auge do verão amazônico."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                NOSSOS SERVIÇOS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Soluções <span className="text-secondary">Completas</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tecnologia integrada para empresas que buscam segurança, conectividade e eficiência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <ServiceCard
                icon={<Camera size={28} />}
                title="CFTV"
                description="Sistemas de monitoramento com câmeras de alta resolução e inteligência artificial."
                link="/cftv"
              />
              <ServiceCard
                icon={<Cable size={28} />}
                title="Cabeamento"
                description="Infraestrutura de rede estruturada e organizada para máxima eficiência."
                link="/cabeamento"
              />
              <ServiceCard
                icon={<Wifi size={28} />}
                title="Link Dedicado"
                description="Link dedicado de alta velocidade para sua empresa sempre conectada."
                link="/internet"
              />
              <ServiceCard
                icon={<Plug size={28} />}
                title="Carregadores Veiculares"
                description="Estações de recarga para veículos elétricos com tecnologia de ponta."
                link="/carregadores"
              />
            </div>
          </div>
        </section>


        {/* Projetos em Destaque (Preview de Cases) */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                  PROJETOS RECENTES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Nossa Atuação no <span className="text-secondary">Amazonas</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Confira como estamos transformando a infraestrutura tecnológica de indústrias e empresas na região.
                </p>
              </div>
              <Button size="lg" variant="outline" asChild className="group h-14 px-8 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Link to="/cases" className="flex items-center gap-2">
                  Ver Todos os Cases
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Segurança no PIM",
                  location: "Distrito Industrial, Manaus",
                  category: "Indústria",
                  icon: Factory,
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Rede Governamental",
                  location: "Centro, Manaus",
                  category: "Setor Público",
                  icon: Landmark,
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Varejo Conectado",
                  location: "Adrianópolis, Manaus",
                  category: "Comércio",
                  icon: Building2,
                  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <Badge className="w-fit mb-4 bg-secondary text-white border-none">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 flex items-center gap-2">
                      <MapPin size={14} className="text-secondary" />
                      {project.location}
                    </p>
                    <div className="h-0 group-hover:h-12 transition-all duration-500 overflow-hidden">
                      <Button variant="link" className="text-secondary p-0 h-auto font-bold" asChild>
                        <Link to="/cases" className="flex items-center gap-2">
                          Ver Detalhes <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que escolher */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                DIFERENCIAIS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Por que escolher a <span className="text-secondary">Semper Vincit</span>?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Experiência, qualidade e compromisso com resultados excepcionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Qualidade Garantida",
                  description: "Utilizamos equipamentos de marcas reconhecidas e oferecemos garantia em todos os serviços."
                },
                {
                  icon: Zap,
                  title: "Tecnologia Avançada",
                  description: "Soluções modernas e escaláveis que acompanham a evolução do seu negócio."
                },
                {
                  icon: Users,
                  title: "Suporte Especializado",
                  description: "Equipe técnica qualificada pronta para atender suas necessidades 24/7."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative rounded-3xl bg-gradient-to-br from-secondary to-secondary/80 p-12 md:p-16 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>
              
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="text-xl mb-10 text-white/90">
                  Entre em contato e descubra como nossas soluções podem impulsionar sua empresa para o próximo nível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    asChild 
                    className="text-lg h-14 px-10 bg-white text-secondary hover:bg-white/90"
                  >
                    <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="text-lg h-14 px-10 bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Link to="/sobre">Conheça a Empresa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;