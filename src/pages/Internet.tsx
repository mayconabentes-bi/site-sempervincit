import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Wifi, Globe, Server, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import internetDetail from "@/assets/internet-detail.jpg";
import internetServer from "@/assets/internet-server.jpg";
import cabeamentoDatacenter from "@/assets/cabeamento-datacenter.jpg";
import internetDatacenter from "@/assets/internet-datacenter.jpg";
import internetTechnician from "@/assets/internet-technician.jpg";

const faqItems = [
  {
    question: "Qual a diferença entre internet dedicada e compartilhada?",
    answer: "Na internet dedicada, a velocidade contratada é exclusiva para sua empresa, garantindo performance constante. Na compartilhada, a banda é dividida entre vários usuários, podendo haver lentidão em horários de pico."
  },
  {
    question: "O que significa velocidade simétrica?",
    answer: "Velocidade simétrica significa que o upload e download têm a mesma velocidade. Isso é essencial para videoconferências, backup em nuvem e sistemas que enviam muitos dados."
  },
  {
    question: "O que é SLA e por que é importante?",
    answer: "SLA (Service Level Agreement) é o contrato que garante a disponibilidade do serviço. Um SLA de 99,9% significa que a internet pode ficar indisponível no máximo 8,7 horas por ano."
  },
  {
    question: "Vocês fornecem IP fixo?",
    answer: "Sim! Todos os planos de internet dedicada incluem IP fixo, essencial para servidores, VPN, sistemas de câmeras e acesso remoto seguro."
  },
  {
    question: "Qual o prazo de instalação?",
    answer: "O prazo médio de instalação é de 5 a 10 dias úteis após a aprovação da viabilidade técnica e contrato, dependendo da infraestrutura necessária no local."
  }
];

const Internet = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <SEO 
        title="Internet Dedicada para Indústrias | Link Privado Manaus - AM"
        description="Link de internet dedicada com SLA 99,9% para o Polo Industrial de Manaus. Conectividade simétrica em anel óptico para operações críticas."
        keywords="internet dedicada Manaus, link dedicado PIM, internet industrial Amazonas, link simétrico, conectividade corporativa, SLA 99,9%"
        canonicalUrl="https://www.sempervincit.com.br/internet"
      />
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Internet Dedicada para Indústria e Corporativo"
          subtitle="Link Exclusivo de Alta Disponibilidade"
          description="Operações no Polo Industrial não podem parar. Fornecemos conectividade simétrica em anel óptico com SLA de 99,9% e NOC local em Manaus para resposta imediata."
          badge="Conectividade Crítica"
          image={internetDetail}
          floatingIcons={[Wifi, Globe, Server]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Link%20Dedicado.*"
        />

        {/* Sobre Internet Dedicada */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl float-animation-delayed" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="space-y-6 scroll-fade-left">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Telecom de Alta Performance</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Conectividade Blindada para sua Empresa
                </h2>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    A estabilidade da internet na Região Norte é um desafio histórico, mas não para nossos clientes. 
                    Nossa infraestrutura dedicada em anel de fibra óptica isola sua empresa das instabilidades das redes de varejo.
                  </p>
                  <p>
                    Com velocidades simétricas reais (mesmo upload e download) e roteamento inteligente, garantimos que seus sistemas em nuvem, 
                    ERPs, e comunicações de voz funcionem perfeitamente.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Velocidade Garantida",
                    "SLA 99,9%",
                    "IP Fixo Incluso",
                    "Suporte 24/7"
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
              <div className="relative group scroll-fade-right">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={internetServer} 
                    alt="Infraestrutura de internet" 
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
                VANTAGENS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vantagens do Link Dedicado
              </h2>
            </div>

            {/* Velocidade Garantida */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="order-2 md:order-1 relative group scroll-fade-left">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={cabeamentoDatacenter} 
                  alt="Conexão de alta velocidade" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Alta Performance</span>
                </div>
                <h3 className="text-3xl font-bold">Velocidade Garantida</h3>
                <p className="text-lg text-muted-foreground">
                  Link exclusivo com velocidade simétrica garantida 24/7. Sua equipe não perde tempo esperando carregamentos. Uploads e downloads na velocidade contratada.
                </p>
              </div>
            </div>

            {/* Conexão Estável */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="space-y-4 scroll-fade-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Confiabilidade</span>
                </div>
                <h3 className="text-3xl font-bold">Conexão Estável</h3>
                <p className="text-lg text-muted-foreground">
                  Alta disponibilidade com SLA de 99,9% de uptime. Sem limites de tráfego ou compartilhamento de banda. Perfeito para operações críticas.
                </p>
              </div>
              <div className="relative group scroll-fade-right">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={internetDatacenter} 
                  alt="Datacenter de internet"
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tecnologia Avançada */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="order-2 md:order-1 relative group scroll-fade-left">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={internetDetail} 
                  alt="Fibra óptica" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Fibra Óptica</span>
                </div>
                <h3 className="text-3xl font-bold">Tecnologia Avançada</h3>
                <p className="text-lg text-muted-foreground">
                  Fibra óptica dedicada com equipamentos de última geração. Endereço IP dedicado para servidores e aplicações. Suporte técnico especializado sempre disponível.
                </p>
              </div>
            </div>
            
            {/* CTA após benefícios */}
            <div className="text-center mt-16 scroll-fade-up">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Link%20Dedicado.*" target="_blank" rel="noopener noreferrer">
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
                    { title: "Produtividade Máxima", desc: "Sua equipe não perde tempo esperando carregamentos. Uploads e downloads na velocidade contratada." },
                    { title: "Videoconferências Perfeitas", desc: "Reuniões online sem travamentos ou quedas. Qualidade de áudio e vídeo impecáveis." },
                    { title: "Segurança Empresarial", desc: "Rede isolada e segura. Perfeito para VPNs, servidores e sistemas críticos." }
                  ].map((item) => (
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
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Link%20Dedicado.*" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <span className="relative z-10">Fale Conosco</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

              <div className="relative group scroll-fade-right">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <img 
                  src={internetTechnician} 
                  alt="Infraestrutura de rede" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation-delayed" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                PLANOS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos Empresariais</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Escolha a velocidade ideal para sua empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-scale">
              {[
                { name: "Essencial", speed: "100 Mbps", desc: "Para pequenas empresas", ips: "1 IP fixo incluso", featured: false },
                { name: "Profissional", speed: "300 Mbps", desc: "Mais popular", ips: "2 IPs fixos inclusos", featured: true },
                { name: "Empresarial", speed: "500+", desc: "Para grandes operações", ips: "IPs fixos personalizados", featured: false }
              ].map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.featured 
                      ? 'bg-secondary scale-105 shadow-2xl' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={plan.featured ? "text-white/90" : "text-white/70"}>{plan.desc}</p>
                  </div>
                  <div className="text-center mb-6">
                    <div className={`text-5xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-secondary'}`}>
                      {plan.speed}
                    </div>
                    <p className={`text-sm ${plan.featured ? "text-white/80" : "text-white/60"}`}>
                      {plan.name === "Empresarial" ? "Mbps Dedicado" : "Dedicado"}
                    </p>
                  </div>
                  <ul className={`space-y-3 ${plan.featured ? 'text-white' : 'text-white/90'}`}>
                    {["Upload e download simétricos", plan.ips, plan.featured ? "SLA de 99,9%" : "SLA de 99,9%", plan.featured ? "Suporte técnico prioritário" : "Suporte técnico 24/7"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${plan.featured ? 'bg-white' : 'bg-secondary'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* CTA após planos */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Link%20Dedicado.*" target="_blank" rel="noopener noreferrer">
                  Consulte Disponibilidade
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={faqItems} 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre internet dedicada"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Internet;