"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PartnersBar from "@/components/PartnersBar";
import ClientsCarousel from "@/components/ClientsCarousel";
import { ArrowRight, ShieldCheck, Zap, Factory, Server, Shield, Cable, CarFront, Anchor, Camera, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroImage from "@/assets/empresa-fachada.jpg";

// Client Logos
import logoCetam from "@/assets/cliente-cetam.png";
import logoDetran from "@/assets/cliente-detran.png";
import logoFvs from "@/assets/cliente-fvs.png";
import logoHospital from "@/assets/cliente-hospital-adriano-jorge.jpeg";
import logoSeduc from "@/assets/cliente-seduc.png";
import logoSerpro from "@/assets/cliente-serpro.png";

const clients = [
  { name: "CETAM", logo: logoCetam.src },
  { name: "DETRAN AM", logo: logoDetran.src },
  { name: "FVS AM", logo: logoFvs.src },
  { name: "Hospital Adriano Jorge", logo: logoHospital.src },
  { name: "SEDUC AM", logo: logoSeduc.src },
  { name: "SERPRO", logo: logoSerpro.src },
];

const services = [
  {
    title: "CFTV Inteligente",
    description: "Sistemas de monitoramento de alta resolução com IA para análise comportamental e proteção perimetral no Polo Industrial.",
    icon: Camera,
    link: "/cftv",
  },
  {
    title: "Redes Corporativas",
    description: "Cabeamento estruturado e fibra óptica com certificação Fluke, garantindo conexão de alta disponibilidade para missão crítica.",
    icon: Cable,
    link: "/cabeamento",
  },
  {
    title: "Link Dedicado (SLA 99,9%)",
    description: "Fornecimento de internet dedicada 100% fibra óptica, essencial para ERPs, servidores na nuvem e operações 24/7.",
    icon: Server,
    link: "/internet",
  },
  {
    title: "CFTV Naval",
    description: "Equipamentos blindados para embarcações e portos, oferecendo visão noturna, prevenção de pirataria e controle de carga.",
    icon: Anchor,
    link: "/cftv-naval",
  },
  {
    title: "Gestão Eletrônica (SCA)",
    description: "Controle de acesso facial e biometria para refeitórios, linhas de produção e catracas portuárias.",
    icon: Zap,
    link: "/contato",
  },
  {
    title: "Carregadores EV",
    description: "Instalação e homologação de carregadores veiculares de alta potência para frotas corporativas limpas.",
    icon: CarFront,
    link: "/carregadores",
  }
];

const stats = [
  { number: "15.000m+", label: "Fibra Óptica no PIM", icon: Cable },
  { number: "1.200+", label: "Câmeras Monitoradas", icon: Camera },
  { number: "85+", label: "Indústrias Atendidas", icon: Factory },
  { number: "24/7", label: "Pronta Resposta Local", icon: Shield },
];

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Integradora de Soluções de TI em Manaus"
          subtitle="Infraestrutura de Missão Crítica para o PIM"
          description="Há mais de 17 anos construindo a base tecnológica segura e escalável para indústrias no Polo Industrial de Manaus. Soluções empresariais de CFTV, Redes e Link Dedicado."
          badge="TI Corporativa Manaus"
          image={heroImage}
          floatingIcons={[Server, Shield, Cable]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor%20empresarial."
          variant="home"
        />

        <PartnersBar />

        {/* Nossos Serviços Section */}
        <section className="py-20 relative overflow-hidden" id="servicos">
          <div className="absolute inset-0 bg-muted/30" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                PORTFÓLIO DE SOLUÇÕES
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Do Backbone de Fibra à Inteligência Artificial no CFTV
              </h2>
              <p className="text-lg text-muted-foreground">
                Compreendemos os desafios singulares da logística e da operação industrial no Amazonas. Nossos projetos são dimensionados para resiliência climática e alta disponibilidade.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="scroll-fade-up">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg border border-secondary/20 hover:border-secondary transition-all">
                <Link href="/sobre" className="gap-2">
                  <Search size={18} />
                   Conheça nossa Metodologia de Projeto
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16 max-w-3xl mx-auto px-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Experiência Comprovada na Indústria Amazônica</h2>
                  <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
                      Nossa equipe técnica entende o que uma fita de produção não pode parar. 
                      Os números atestam a nossa capacidade de entrega local rápida e garantida.
                  </p>
              </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-4 border border-white/20">
                    <stat.icon size={28} className="text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-white">{stat.number}</div>
                  <div className="text-sm font-medium text-primary-foreground/90 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que Escolher */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                      <div className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-bold uppercase tracking-wider rounded-full mb-2">
                          MÃO DE OBRA LOCAL E TREINADA
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                          Diferenciais da Semper Vincit para Empresas
                      </h2>
                      <div className="space-y-6 text-lg text-muted-foreground">
                          <p>
                             Quando um equipamento falha e paralisa as docas, você não tem tempo para chamados demorados de empresas sediadas em São Paulo.
                          </p>
                          <p>
                             Nosso NOC (Network Operations Center) está **em Manaus**. Nós temos viaturas de resposta tática prontas para agir nos galpões do Polo Industrial, minimizando seu downtime a praticamente zero. 
                          </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border/50">
                          <div className="flex gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                                  <ShieldCheck size={24} className="text-primary" />
                              </div>
                              <div>
                                  <h3 className="font-bold text-foreground text-lg mb-1">Garantia e Projetos Assinados</h3>
                                  <p className="text-sm text-muted-foreground font-medium">Fornecemos ART e toda documentação exigida pela fiscalização da fábrica.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-secondary/20">
                                  <UserCheck size={24} className="text-secondary" />
                              </div>
                              <div>
                                  <h3 className="font-bold text-foreground text-lg mb-1">Equipe CLT Certificada</h3>
                                  <p className="text-sm text-muted-foreground font-medium">Nossos técnicos e engenheiros possuem treinamentos como Furukawa e NR-35/NR-10.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="relative">
                       <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-3xl transform -rotate-3 scale-105" />
                       <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl overflow-hidden glass-dark text-white isolate">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                           <div className="relative z-10 space-y-6">
                               <h3 className="text-2xl font-bold">Contato Direto (Comercial PIM)</h3>
                               <p className="text-white/80 font-medium">Preencha rapidamente para que nosso engenheiro analise sua planta e necessidade.</p>
                               <div className="space-y-4">
                                   <div className="h-12 bg-white/10 rounded-lg animate-pulse border border-white/10" />
                                   <div className="h-12 bg-white/10 rounded-lg animate-pulse border border-white/10" />
                                   <div className="h-24 bg-white/10 rounded-lg animate-pulse border border-white/10" />
                               </div>
                               <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold group shadow-lg" asChild>
                                  <Link href="/contato" className="gap-2 justify-center">
                                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                     Ir para Formulário Completo
                                  </Link>
                               </Button>
                           </div>
                       </div>
                  </div>
             </div>
          </div>
        </section>

        <ClientsCarousel clients={clients} />

      </main>

      <Footer />
    </div>
  );
}
