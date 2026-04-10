import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Camera, Shield, Eye, CheckCircle, Anchor, Brain, ScanFace, Car, AlertTriangle, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cftvCamera1 from "@/assets/cftv-camera-1.jpg";
import cftvCamera2 from "@/assets/cftv-camera-2.jpg";
import cftvCamera3 from "@/assets/cftv-camera-3.jpg";
import cftvControlRoom from "@/assets/cftv-control-room.jpg";
import cftvCameraNew from "@/assets/cftv-camera-new.jpg";
import cftvControlRoomNew from "@/assets/cftv-control-room-new.jpg";
import cftvMonitoramento from "@/assets/cftv-monitoramento.jpg";
import cftvNaval from "@/assets/cftv-naval.jpg";

const faqItems = [
  {
    question: "Qual a diferença entre CFTV analógico e IP?",
    answer: "O CFTV analógico utiliza cabos coaxiais e DVR, sendo mais acessível. Já o CFTV IP usa rede de dados (cabos de rede ou WiFi) e NVR, oferecendo maior resolução, recursos inteligentes e escalabilidade."
  },
  {
    question: "Posso acessar as câmeras pelo celular?",
    answer: "Sim! Todos os nossos sistemas permitem acesso remoto via aplicativo para smartphone ou tablet, permitindo visualização em tempo real de qualquer lugar com internet."
  },
  {
    question: "Quanto tempo as gravações ficam armazenadas?",
    answer: "O tempo de armazenamento depende da capacidade do HD e configurações de gravação. Geralmente, sistemas residenciais armazenam de 7 a 30 dias, enquanto sistemas empresariais podem armazenar meses."
  },
  {
    question: "As câmeras funcionam à noite?",
    answer: "Sim! Utilizamos câmeras com infravermelho (IR) que captam imagens mesmo em ambientes totalmente escuros, com alcance de até 30 metros dependendo do modelo."
  },
  {
    question: "Vocês oferecem monitoramento 24 horas?",
    answer: "Oferecemos a infraestrutura completa para monitoramento. O serviço de central de monitoramento 24h pode ser integrado ao sistema conforme a necessidade do cliente."
  }
];

const CFTV = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <SEO 
        title="CFTV e Segurança Eletrônica em Manaus | Semper Vincit Industrial"
        description="Sistemas inteligentes de CFTV para indústrias no Polo Industrial de Manaus. Soluções com câmeras IP de IA para resiliência ao clima amazônico. Solicite orçamento."
        keywords="CFTV Manaus, segurança eletrônica PIM, câmeras de segurança industriais, monitoramento 24h Amazonas, videomonitoramento IP"
        canonicalUrl="https://www.sempervincit.com.br/cftv"
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Instalação de CFTV Industrial em Manaus",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Semper Vincit"
          },
          "areaServed": {
            "@type": "City",
            "name": "Manaus"
          },
          "description": "Sistemas inteligentes de monitoramento e CFTV com tecnologia avançada para indústrias e projetos navais."
        })}
      />
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="CFTV e Segurança Eletrônica"
          subtitle="Sistemas Inteligentes para o Polo Industrial"
          description="Proteja seu patrimônio industrial e corporativo com tecnologia de ponta. Câmeras com IA certificadas para alta umidade e temperaturas extremas da região amazônica."
          badge="Segurança Alta Performance"
          image={cftvCamera1}
          floatingIcons={[Camera, Shield, Eye]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*CFTV.*"
        />

        {/* Sobre CFTV */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Tecnologia Certificada</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Referência em CFTV Industrial e Corporativo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Mais do que simples câmeras, projetamos ecossistemas de videomonitoramento de alta complexidade. Sistemas com Inteligência Artificial integrados ao controle de acesso do Distrito Industrial.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Câmeras Full HD e 4K",
                    "Acesso Remoto",
                    "Visão Noturna IR",
                    "IA Integrada"
                  ].map((item, index) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                      <CheckCircle className="text-secondary" size={20} />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={cftvCameraNew} 
                    alt="Sistema CFTV" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-20 relative overflow-hidden">
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
                Benefícios do CFTV
              </h2>
            </div>

            {/* Monitoramento 24/7 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="order-2 md:order-1 relative group scroll-fade-left">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={cftvMonitoramento} 
                  alt="Monitoramento 24/7"
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Vigilância Constante</span>
                </div>
                <h3 className="text-3xl font-bold">Monitoramento 24/7</h3>
                <p className="text-lg text-muted-foreground">
                  Vigilância constante com gravação contínua e acesso remoto em tempo real. Visualize suas câmeras de qualquer lugar pelo celular ou computador.
                </p>
              </div>
            </div>

            {/* Prevenção de Perdas */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="space-y-4 scroll-fade-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Proteção Total</span>
                </div>
                <h3 className="text-3xl font-bold">Prevenção de Perdas</h3>
                <p className="text-lg text-muted-foreground">
                  Redução significativa de furtos, roubos e vandalismo em sua empresa. Câmeras com resolução Full HD e 4K para imagens nítidas e detalhadas.
                </p>
              </div>
              <div className="relative group scroll-fade-right">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={cftvControlRoom} 
                  alt="Sala de controle de CFTV"
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Visão Noturna */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="order-2 md:order-1 relative group scroll-fade-left">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={cftvCamera1} 
                  alt="Visão noturna infravermelha" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Tecnologia Avançada</span>
                </div>
                <h3 className="text-3xl font-bold">Visão Noturna Avançada</h3>
                <p className="text-lg text-muted-foreground">
                  Tecnologia infravermelha para monitoramento em ambientes escuros. Alcance de até 30 metros dependendo do modelo da câmera.
                </p>
              </div>
            </div>
            
            {/* CTA após benefícios */}
            <div className="text-center mt-16 scroll-fade-up">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*CFTV.*" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Gratuito
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Por que escolher Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="bg-black text-white rounded-3xl p-10 space-y-8 relative overflow-hidden group">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <p className="text-sm uppercase tracking-wider text-white/60 relative">Por que escolher a Semper Vincit</p>
                
                <div className="space-y-6 relative">
                  {[
                    { title: "Tecnologia de Ponta", desc: "Trabalhamos com os melhores fabricantes do mercado, garantindo equipamentos de alta durabilidade e performance." },
                    { title: "Suporte Técnico Especializado", desc: "Nossa equipe está disponível para auxiliar em qualquer momento, garantindo o funcionamento contínuo do seu sistema." },
                    { title: "Projeto Personalizado", desc: "Cada projeto é desenvolvido de acordo com as necessidades específicas do cliente e do ambiente." }
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white relative group/btn overflow-hidden">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*CFTV.*" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <span className="relative z-10">Fale Conosco</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <img 
                  src={cftvControlRoomNew} 
                  alt="Sala de controle de CFTV" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation-delayed" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                SOLUÇÕES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossas Soluções em CFTV</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Sistemas completos para diferentes necessidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-scale">
              {[
                {
                  title: "CFTV Analógico",
                  items: ["Custo-benefício ideal", "Câmeras HD e Full HD", "DVR com gravação local", "Fácil instalação e manutenção"]
                },
                {
                  title: "CFTV IP",
                  items: ["Câmeras de altíssima resolução", "Análise inteligente de vídeo", "NVR com armazenamento em rede", "Escalabilidade facilitada"]
                }
              ].map((solution, index) => (
                <div 
                  key={solution.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-secondary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <ul className="space-y-3 text-white/90">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CFTV Naval - Seção Exclusiva */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
          {/* Decorative Wave Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 1440 560" preserveAspectRatio="none">
              <path 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z" 
                fill="currentColor" 
                className="text-primary"
              />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative">
            {/* Header */}
            <div className="text-center mb-16 scroll-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Anchor className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Soluções Navais</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                CFTV Inteligente para{" "}
                <span className="text-gradient">Embarcações</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Desenvolvemos sistemas completos de videomonitoramento para embarcações marítimas e fluviais, integrando tecnologia de IA para máxima segurança.
              </p>
            </div>

            {/* Main Image + Features Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Image */}
              <div className="relative group scroll-fade-left">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={cftvNaval} 
                    alt="CFTV Inteligente para Embarcações" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white">
                      <Brain className="w-6 h-6 text-secondary" />
                      <span className="text-lg font-semibold">Monitoramento com Inteligência Artificial</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6 scroll-fade-right">
                <h3 className="text-2xl font-bold text-foreground mb-8">O Que Entregamos</h3>
                
                {/* Cobertura Total */}
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                      <Eye className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Cobertura Total da Embarcação</h4>
                      <p className="text-muted-foreground">
                        Monitoramento 360° incluindo convés principal, conveses superiores, praça de máquinas, áreas de carga e comando - com câmeras estrategicamente posicionadas para eliminar pontos cegos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Infraestrutura Naval */}
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Waves className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Infraestrutura Naval Especializada</h4>
                      <p className="text-muted-foreground">
                        Equipamentos certificados IP67 resistentes à corrosão, fixações anti-vibração, cabeamento estruturado marítimo e sistemas redundantes com backup de energia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tecnologias Integradas */}
            <div className="scroll-fade-up">
              <h3 className="text-2xl font-bold text-center mb-10">Tecnologias Integradas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    icon: ScanFace, 
                    title: "Reconhecimento Facial", 
                    desc: "Identificação automática de tripulantes e passageiros",
                    color: "secondary"
                  },
                  { 
                    icon: AlertTriangle, 
                    title: "Detecção de Comportamento", 
                    desc: "Alertas em tempo real para comportamentos agressivos",
                    color: "primary"
                  },
                  { 
                    icon: Car, 
                    title: "Leitura de Placas", 
                    desc: "Controle automático de veículos em balsas",
                    color: "secondary"
                  },
                  { 
                    icon: Shield, 
                    title: "Alertas Inteligentes", 
                    desc: "Notificações para pessoas não autorizadas",
                    color: "primary"
                  }
                ].map((tech, index) => (
                  <div 
                    key={tech.title}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${tech.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' : 'bg-primary/10 group-hover:bg-primary/20'} transition-colors`}>
                      <tech.icon className={`w-8 h-8 ${tech.color === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{tech.title}</h4>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projetos Executados */}
            <div className="mt-20 scroll-fade-up">
              <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                      <Anchor className="w-4 h-4" />
                      <span className="text-sm font-medium">Projetos Executados</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Experiência Comprovada</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Implementamos sistemas completos em empurradores fluviais de até 27 metros, com 8 a 12 câmeras integradas, incluindo câmeras Speed Dome para visão panorâmica e cobertura total da operação.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "27m", label: "Embarcações" },
                      { number: "12", label: "Câmeras por Projeto" },
                      { number: "360°", label: "Cobertura Total" },
                      { number: "24/7", label: "Monitoramento" }
                    ].map((stat, index) => (
                      <div 
                        key={stat.label}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                    <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento Naval
                      <Anchor className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 group">
                    <Link to="/cftv-naval">
                      Conheça Nossa Especialidade Naval
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={faqItems} 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre sistemas de CFTV"
        />
      </main>

      <Footer />
    </div>
  );
};

export default CFTV;