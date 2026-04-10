import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Factory,
  Camera,
  Cable,
  Wifi,
  Shield,
  Zap,
  ThermometerSun,
  Droplets,
  Server,
  CheckCircle,
  ArrowRight,
  Cpu,
  Eye,
  BatteryCharging,
} from "lucide-react";
import heroImage from "@/assets/hero-cftv.jpg";

const solutions = [
  {
    icon: Camera,
    title: "Monitoramento com IA",
    subtitle: "CFTV Inteligente para Indústrias",
    description:
      "Câmeras com analíticos embarcados para detecção de intrusão, abandono de objetos e reconhecimento de placas. Ideal para o perímetro de fábricas no Distrito Industrial.",
    features: [
      "Analíticos de IA embarcados",
      "Detecção de intrusão perimetral",
      "Reconhecimento de placas (LPR)",
      "Monitoramento via nuvem 24/7",
    ],
    badge: "Segurança Industrial",
  },
  {
    icon: Cable,
    title: "Redes Ópticas de Alta Densidade",
    subtitle: "Cabeamento Estruturado Industrial",
    description:
      "Projetos de fibra óptica e cabeamento estruturado certificados para ambientes fabris com alta exigência de uptime. Materiais resistentes a temperatura e umidade extremas.",
    features: [
      "Fibra óptica monomodo e multimodo",
      "Certificação Fluke completa",
      "Materiais anti-corrosão",
      "Garantia de até 25 anos",
    ],
    badge: "Infraestrutura Crítica",
  },
  {
    icon: Wifi,
    title: "Link Dedicado Industrial",
    subtitle: "Conectividade de Alta Performance",
    description:
      "Internet dedicada com SLA de 99,9% para linhas de produção que dependem de ERP, MES e sistemas em nuvem. IP fixo, velocidade simétrica e suporte local imediato.",
    features: [
      "SLA 99,9% com suporte local",
      "Velocidade simétrica garantida",
      "IP fixo para sistemas críticos",
      "Redundância de link",
    ],
    badge: "Conectividade PIM",
  },
  {
    icon: BatteryCharging,
    title: "Eletromobilidade Corporativa",
    subtitle: "Carregadores de Frotas EV",
    description:
      "Infraestrutura de recarga para frotas de veículos elétricos e híbridos em plantas industriais. Projeto elétrico com ART e dimensionamento para escala.",
    features: [
      "Carregadores Nível 2 e 3",
      "Projeto elétrico com ART",
      "Compatível com frotas mistas",
      "Gestão de energia inteligente",
    ],
    badge: "Mobilidade Verde",
  },
];

const differentiators = [
  {
    icon: ThermometerSun,
    title: "Engenharia para Clima Extremo",
    description:
      "Utilizamos materiais com classificação IP67 e tratamento anti-corrosão, projetados especificamente para suportar a temperatura média de 33°C e umidade relativa acima de 80% da região amazônica.",
  },
  {
    icon: Droplets,
    title: "Proteção Contra Umidade",
    description:
      "Sistemas de vedação, eletrocalhas fechadas e gabinetes com ventilação forçada garantem a integridade dos equipamentos contra o vapor d'água constante do ambiente tropical.",
  },
  {
    icon: Shield,
    title: "Redundância e Alta Disponibilidade",
    description:
      "Projetos com links em fibra redundante, nobreaks industriais e monitoramento remoto 24/7 para garantir zero downtime nas linhas de produção.",
  },
  {
    icon: Zap,
    title: "Resposta Imediata",
    description:
      "Equipe técnica baseada em Manaus com tempo médio de resposta inferior a 2 horas. Sem esperar por técnicos de São Paulo ou Curitiba. Somos daqui.",
  },
];

const sectors = [
  { name: "Duas Rodas", examples: "Honda, Yamaha, Moto Honda" },
  { name: "Eletroeletrônicos", examples: "Samsung, LG, Philips" },
  { name: "Informática", examples: "Dell, Positivo, Multilaser" },
  { name: "Químico", examples: "Procter & Gamble, Colgate" },
  { name: "Bebidas", examples: "Ambev, Coca-Cola" },
  { name: "Metalurgia", examples: "Aço Cearense, White Martins" },
];

const PIM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <Hero
          title="Soluções para o Polo Industrial de Manaus"
          subtitle="Integradora de Referência no PIM"
          description="17 anos integrando tecnologia para as indústrias mais exigentes do Distrito. CFTV inteligente, redes ópticas de alta densidade, links dedicados e eletromobilidade industrial."
          badge="Polo Industrial de Manaus"
          image={heroImage}
          floatingIcons={[Factory, Cpu, Eye]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20para%20minha%20ind%C3%BAstria%20no%20PIM."
        />

        {/* Setores Atendidos */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-8">
              Atendemos os principais setores do Distrito Industrial
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
                >
                  <h4 className="font-bold text-sm mb-1">{sector.name}</h4>
                  <p className="text-xs text-white/50">{sector.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soluções Industriais */}
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/10 mb-4">
                SOLUÇÕES INDUSTRIAIS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tecnologia de <span className="text-secondary">Ponta</span> para
                o Distrito Industrial
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada solução é projetada considerando as exigências operacionais
                e ambientais específicas do Polo Industrial de Manaus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-3xl border border-border p-8 md:p-10 hover:shadow-2xl hover:border-secondary/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <solution.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <Badge
                        variant="outline"
                        className="mb-2 text-xs font-medium"
                      >
                        {solution.badge}
                      </Badge>
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle
                          size={16}
                          className="text-secondary flex-shrink-0"
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Regionais */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">
                DIFERENCIAIS REGIONAIS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Por que Escolher uma{" "}
                <span className="text-secondary">Integradora Local</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empresas nacionais oferecem soluções genéricas. Nós oferecemos
                soluções projetadas para o clima, a logística e a realidade do
                Amazonas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <diff.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{diff.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/10 text-white hover:bg-white/10 mb-6 border-white/20">
                FALE COM UM ESPECIALISTA
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sua indústria precisa de uma integradora que{" "}
                <span className="text-secondary">entenda o PIM</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Agende uma visita técnica gratuita. Nossa equipe avalia o
                ambiente, projeta a solução e apresenta um cronograma que
                minimiza paradas na produção.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-10 bg-secondary hover:bg-secondary/90 text-white group"
                >
                  <a
                    href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Preciso%20de%20uma%20solu%C3%A7%C3%A3o%20para%20minha%20ind%C3%BAstria%20no%20PIM."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Agendar Visita Técnica
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg h-14 px-10 bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/cases">Ver Projetos Realizados</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PIM;
