import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Ship, Anchor, Shield, Camera, Eye, UserCheck, Car, Users, Waves, CheckCircle, ClipboardCheck, Settings, GraduationCap, Headphones, Award, Wrench, FileCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Images
import navalInstall1 from "@/assets/naval-install-1.jpg";
import navalInstall2 from "@/assets/naval-install-2.jpg";
import navalInstall3 from "@/assets/naval-install-3.jpg";
import navalCamera1 from "@/assets/naval-camera-1.jpg";
import navalVessel1 from "@/assets/naval-vessel-1.jpg";
import navalVessel2 from "@/assets/naval-vessel-2.jpg";
import navalTeam1 from "@/assets/naval-team-1.jpg";
import navalTeam2 from "@/assets/naval-team-2.jpg";

const faqItems = [
  {
    question: "Quais tipos de embarcações vocês atendem?",
    answer: "Atendemos empurradores fluviais (até 30m), balsas de transporte de carga e veículos, embarcações de apoio marítimo e offshore, e navios de cabotagem e navegação interior."
  },
  {
    question: "Os equipamentos resistem ao ambiente marítimo?",
    answer: "Sim! Utilizamos câmeras com proteção IP67, resistentes à corrosão salina, fixações anti-vibração, cabeamento marítimo Cat6A e sistemas redundantes com backup de energia UPS."
  },
  {
    question: "O sistema funciona com inteligência artificial?",
    answer: "Sim! Nossos sistemas incluem reconhecimento facial para controle de tripulação, detecção de comportamento agressivo, leitura automática de placas veiculares e alertas em tempo real."
  },
  {
    question: "Vocês emitem documentação técnica?",
    answer: "Sim, emitimos ART assinada por engenheiro com registro no CREA-AM (32868/D), seguindo as normas da Marinha do Brasil e ISPS Code para embarcações comerciais."
  },
  {
    question: "Como funciona o suporte após a instalação?",
    answer: "Oferecemos assistência técnica contínua, manutenção preventiva e suporte remoto para embarcações em operação, garantindo o funcionamento do sistema durante toda sua vida útil."
  },
  {
    question: "Qual a cobertura de monitoramento oferecida?",
    answer: "Garantimos cobertura 360° de toda a embarcação: conveses principal e superiores, praça de máquinas, áreas de carga, acesso de tripulantes e comando."
  }
];

const CFTVNaval = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="CFTV Inteligente para Embarcações"
          subtitle="Monitoramento Naval com IA"
          description="Sistemas completos de videomonitoramento para embarcações de grande porte, com reconhecimento facial, detecção comportamental e controle total de tripulação e carga."
          badge="Segurança Naval"
          image={navalInstall1}
          floatingIcons={[Ship, Anchor, Shield]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*"
        />

        {/* Expertise Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Nossa Expertise</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Projetos Navais Especializados
                </h2>
                <p className="text-lg text-muted-foreground">
                  Desenvolvemos e implementamos sistemas completos de videomonitoramento inteligente para embarcações de grande porte, com tecnologia adaptada ao ambiente marítimo brasileiro.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                    <Ship className="text-primary w-6 h-6" />
                    <span className="text-foreground font-medium">Empurradores Fluviais</span>
                  </div>
                  <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                    <Anchor className="text-primary w-6 h-6" />
                    <span className="text-foreground font-medium">Balsas de Transporte</span>
                  </div>
                  <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                    <Waves className="text-primary w-6 h-6" />
                    <span className="text-foreground font-medium">Apoio Marítimo</span>
                  </div>
                  <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                    <Ship className="text-primary w-6 h-6" />
                    <span className="text-foreground font-medium">Navios de Cabotagem</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src={navalVessel2} 
                    alt="Embarcação com sistema CFTV instalado" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden md:block z-10">
                  <p className="text-4xl font-bold">360°</p>
                  <p className="text-sm">Cobertura Completa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologia IA Section */}
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Tecnologia</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Inteligência Artificial Integrada</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Nossos sistemas utilizam IA avançada para garantir segurança total a bordo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-scale">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reconhecimento Facial</h3>
                <p className="text-white/80 text-sm">
                  Identificação automática de 100% da tripulação, com alertas para pessoas não autorizadas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Detecção Comportamental</h3>
                <p className="text-white/80 text-sm">
                  IA analisa expressões e padrões em tempo real, identificando sinais de agressividade.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Leitura de Placas</h3>
                <p className="text-white/80 text-sm">
                  Controle total de veículos embarcados com registro automático de entrada e saída.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Controle de Tripulação</h3>
                <p className="text-white/80 text-sm">
                  Registro automático de todos os tripulantes, alertando sobre presenças não autorizadas.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*" target="_blank" rel="noopener noreferrer">
                  Solicitar Demonstração
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Infraestrutura Naval Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Infraestrutura</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluções para Ambiente Marítimo</h2>
            </div>

            {/* Equipamentos */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="space-y-6 scroll-fade-left">
                <h3 className="text-3xl font-bold text-foreground">Equipamentos Certificados</h3>
                <p className="text-lg text-muted-foreground">
                  Utilizamos equipamentos especialmente projetados para o ambiente naval, resistentes à corrosão, vibração e condições adversas.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Câmeras com proteção IP67 resistentes à corrosão salina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Fixações anti-vibração para ambiente naval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Cabeamento estruturado marítimo Cat6A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Sistemas redundantes com backup de energia UPS</span>
                  </li>
                </ul>
              </div>
              <div className="scroll-fade-right aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={navalCamera1} 
                  alt="Câmera Speed Dome instalada em embarcação" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Arquitetura */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="order-2 md:order-1 scroll-fade-left aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={navalInstall2} 
                  alt="Técnicos instalando câmeras em mastro de embarcação" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6 scroll-fade-right">
                <h3 className="text-3xl font-bold text-foreground">Arquitetura Inteligente</h3>
                <p className="text-lg text-muted-foreground">
                  Projetamos sistemas com arquitetura robusta e redundante, garantindo operação contínua mesmo em condições adversas.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Rede PoE para alimentação e dados integrados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Rack técnico organizado e certificado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Sistema de gravação local 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Monitoramento em tempo real via central de comando</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Instalação */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="space-y-6 scroll-fade-left">
                <h3 className="text-3xl font-bold text-foreground">Instalação Profissional</h3>
                <p className="text-lg text-muted-foreground">
                  Nossa equipe especializada executa instalações com excelência, seguindo padrões técnicos rigorosos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Passagem de infraestrutura em todos os conveses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Organização técnica de cabeamento estruturado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Comissionamento completo do sistema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-foreground">Treinamento operacional para tripulação</span>
                  </li>
                </ul>
              </div>
              <div className="scroll-fade-right aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={navalInstall3} 
                  alt="Técnico instalando câmera em embarcação" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*" target="_blank" rel="noopener noreferrer">
                  Solicitar Visita Técnica
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Diferenciais</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Por Que Somos Referência</h2>
              <p className="text-xl text-muted-foreground">
                Experiência comprovada em projetos navais complexos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-scale">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Engenharia Especializada</h3>
                <p className="text-muted-foreground">
                  Projetos desenvolvidos por engenheiros com registro no CREA, seguindo normas da Marinha do Brasil.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Tecnologia Adaptada</h3>
                <p className="text-muted-foreground">
                  Sistemas projetados para o ambiente marítimo, considerando vibração, umidade e corrosão.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Conformidade Legal</h3>
                <p className="text-muted-foreground">
                  Atendimento às normas da Marinha, ISPS Code e requisitos de seguradoras.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Headphones className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Suporte Contínuo</h3>
                <p className="text-muted-foreground">
                  Assistência técnica, manutenção preventiva e suporte remoto para embarcações em operação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Resultados</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">O Que Nossos Clientes Alcançam</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Segurança Operacional
                    </h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Redução drástica de incidentes de segurança a bordo</li>
                      <li>• Controle total sobre quem está na embarcação</li>
                      <li>• Prevenção de situações de risco antes que ocorram</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Eficiência na Gestão
                    </h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Redução do tempo de inspeções portuárias</li>
                      <li>• Documentação automática para seguradoras</li>
                      <li>• Relatórios detalhados de operação</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <FileCheck className="w-5 h-5" />
                      Conformidade e Proteção
                    </h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Adequação às normas da Marinha do Brasil</li>
                      <li>• Evidências para processos administrativos</li>
                      <li>• Redução de custos com seguros e multas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img 
                  src={navalTeam2} 
                  alt="Equipe trabalhando em embarcação" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Processo Section */}
        <section id="processo" className="relative isolate py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Processo</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Executamos Seu Projeto</h2>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-6 scroll-scale">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                  1
                </div>
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <ClipboardCheck className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground text-sm">Diagnóstico Técnico</h3>
                  <p className="text-xs text-muted-foreground">
                    Visita técnica para levantamento completo.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                  2
                </div>
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <Settings className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground text-sm">Projeto Customizado</h3>
                  <p className="text-xs text-muted-foreground">
                    Desenvolvimento específico para embarcação.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                  3
                </div>
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <Wrench className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground text-sm">Execução Profissional</h3>
                  <p className="text-xs text-muted-foreground">
                    Instalação com equipe especializada.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                  4
                </div>
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <GraduationCap className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground text-sm">Comissionamento</h3>
                  <p className="text-xs text-muted-foreground">
                    Testes e capacitação da tripulação.
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2 md:col-span-1">
                <div className="w-14 h-14 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                  5
                </div>
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <Headphones className="w-7 h-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-foreground text-sm">Suporte Contínuo</h3>
                  <p className="text-xs text-muted-foreground">
                    Manutenção durante toda a vida útil.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-20 text-center mt-12 pt-10 border-t border-border">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*" target="_blank" rel="noopener noreferrer">
                  Iniciar Meu Projeto
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfólio Section */}
        <section className="relative z-0 py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={navalInstall1} 
                    alt="Instalação de câmera com ponte ao fundo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={navalTeam1} 
                    alt="Equipe técnica em operação" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={navalVessel1} 
                    alt="Vista do mastro com câmeras" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={navalInstall2} 
                    alt="Técnicos instalando equipamentos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Portfólio</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Experiência Comprovada
                </h2>
                <p className="text-lg text-muted-foreground">
                  Já implementamos sistemas completos de CFTV inteligente em diversas embarcações, com resultados comprovados em segurança e eficiência operacional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground">Empurradores fluviais de até 27 metros</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground">Embarcações com múltiplos conveses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground">Projetos com 8 a 12 câmeras integradas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground">Cobertura 360° com câmeras Speed Dome</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground font-medium">
                    Engenharia Naval Certificada - CREA-AM 32868/D
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FAQ 
              title="Perguntas Frequentes" 
              subtitle="Tire suas dúvidas sobre CFTV Naval"
              items={faqItems} 
            />
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center scroll-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fale com Nossos Especialistas
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Quer implementar um sistema de CFTV inteligente na sua embarcação? Nossa equipe técnica está pronta para desenvolver a solução ideal para sua operação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 group">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*CFTV%20NAVAL.*" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento Naval
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/60">
                📧 suporte@dasemper.com | 📱 (92) 98165-7447 | SEMPER VINCIT Serviços de TI
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CFTVNaval;
