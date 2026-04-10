import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Cable, Network, Server, Settings, Layers, Gauge, CheckCircle, Zap, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import installImage from "@/assets/cabeamento-install.jpg";
import datacenterImage from "@/assets/cabeamento-datacenter.jpg";
import heroImage from "@/assets/hero-cabeamento.jpg";
import detailImage from "@/assets/cabeamento-detail.jpg";
import rackImage from "@/assets/cabeamento-rack.jpg";
import diferenciaisImage from "@/assets/cabeamento-diferenciais.jpg";

const faqItems = [
  {
    question: "O que é cabeamento estruturado?",
    answer: "Cabeamento estruturado é um sistema padronizado de cabos e hardware de conexão que permite a transmissão de dados, voz e vídeo em uma rede. Ele segue normas técnicas internacionais (como EIA/TIA 568) e oferece organização, escalabilidade e facilidade de manutenção."
  },
  {
    question: "Qual a diferença entre cabos Cat5e, Cat6 e Cat6A?",
    answer: "Cat5e suporta até 1 Gbps, Cat6 suporta até 10 Gbps em distâncias curtas (até 55m), e Cat6A suporta 10 Gbps em distâncias de até 100m. A escolha depende da velocidade de rede necessária e do orçamento disponível."
  },
  {
    question: "Quanto tempo leva para instalar um sistema de cabeamento estruturado?",
    answer: "O tempo varia conforme o tamanho do projeto. Instalações pequenas podem ser concluídas em 1-2 dias, enquanto projetos maiores podem levar semanas. Fornecemos um cronograma detalhado após a análise técnica."
  },
  {
    question: "Qual a garantia oferecida no cabeamento estruturado?",
    answer: "Oferecemos garantia de até 25 anos na infraestrutura de cabeamento, dependendo do fabricante dos materiais utilizados. A instalação também possui garantia de 1 ano contra defeitos de mão de obra."
  },
  {
    question: "Vocês trabalham com fibra óptica?",
    answer: "Sim! Trabalhamos com fibra óptica monomodo e multimodo, incluindo fusão, conectorização, certificação e toda a infraestrutura necessária para backbone de alta velocidade."
  },
  {
    question: "Qual a necessidade de certificar a rede?",
    answer: "A certificação garante que todos os pontos de rede estão funcionando dentro das especificações técnicas, evitando problemas de conectividade e garantindo a qualidade da instalação. Fornecemos relatório completo de certificação."
  }
];

const Cabeamento = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Cabeamento Estruturado e Redes | Manaus - AM | Semper Vincit"
        description="Engenharia de redes para missão crítica no Polo Industrial de Manaus. Projetos em fibra óptica e cabo metálico com garantia de até 25 anos."
        keywords="cabeamento estruturado Manaus, rede industrial PIM, fibra óptica Amazonas, instalação de rede corporativa, infraestrutura de TI"
        canonicalUrl="https://www.sempervincit.com.br/cabeamento"
      />
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Cabeamento Estruturado em Manaus"
          subtitle="Redes de Alta Performance para o Amazonas"
          description="Infraestrutura certificada para indústrias no PIM e empresas de tecnologia. Projetos organizados, escaláveis e resistentes às condições climáticas da região."
          badge="Infraestrutura de TI Manaus"
          image={datacenterImage}
          floatingIcons={[Cable, Network, Server]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Cabeamento%20Estruturado*"
        />

        {/* Sobre Cabeamento */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl float-animation-delayed" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Infraestrutura Corporativa</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Engenharia de Redes para Missão Crítica
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Projetamos e executamos o backbone lógico que sustenta a operação de grandes indústrias e data centers. 
                    Redes concebidas para zero falhas estruturais, garantindo uptime de 99,9%.
                  </p>
                  <p>
                    Seguimos rigorosamente os protocolos EIA/TIA, utilizando materiais certificados que suportam 
                    o estresse ambiental da região amazônica.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Profissionais Certificados",
                    "Materiais Premium",
                    "Certificação de Rede"
                  ].map((item, index) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={installImage} 
                    alt="Instalação de cabeamento" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios do Cabeamento Estruturado */}
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
                Por que Investir em Cabeamento Estruturado?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça os benefícios de uma infraestrutura de rede profissional e organizada
              </p>
            </div>

            {/* Benefício 1 - Organização */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={detailImage} 
                  alt="Rack de cabeamento organizado" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Network className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Infraestrutura</span>
                </div>
                <h3 className="text-3xl font-bold">Organização e Padronização</h3>
                <p className="text-lg text-muted-foreground">
                  Um sistema de cabeamento estruturado oferece organização total dos cabos e conexões, 
                  seguindo padrões internacionais. Isso facilita a identificação de problemas, 
                  manutenções preventivas e futuras expansões da rede.
                </p>
                <ul className="space-y-2">
                  {[
                    "Identificação clara de todos os pontos",
                    "Documentação completa da rede",
                    "Facilidade em localizar e resolver problemas",
                    "Ambiente de trabalho mais limpo e seguro"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefício 2 - Performance */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-2">
                  <Gauge className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Alta Velocidade</span>
                </div>
                <h3 className="text-3xl font-bold">Performance e Confiabilidade</h3>
                <p className="text-lg text-muted-foreground">
                  Cabos de qualidade e instalação profissional garantem velocidades de até 10 Gbps 
                  com baixa latência. Ideal para aplicações críticas como videoconferências, 
                  transferência de arquivos grandes e sistemas em nuvem.
                </p>
                <ul className="space-y-2">
                  {[
                    "Velocidades de até 10 Gbps",
                    "Baixa latência para aplicações críticas",
                    "Menor taxa de erros na transmissão",
                    "Suporte a tecnologias futuras"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={heroImage} 
                  alt="Equipamentos de rede de alta performance" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Benefício 3 - Escalabilidade */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={rackImage} 
                  alt="Data center escalável" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                  <Server className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Crescimento</span>
                </div>
                <h3 className="text-3xl font-bold">Escalabilidade e Flexibilidade</h3>
                <p className="text-lg text-muted-foreground">
                  Infraestrutura preparada para crescer junto com seu negócio. Adicione novos pontos 
                  de rede, equipamentos e serviços sem a necessidade de reformular toda a estrutura.
                </p>
                <ul className="space-y-2">
                  {[
                    "Fácil adição de novos pontos de rede",
                    "Suporte a múltiplos serviços (dados, voz, vídeo)",
                    "Preparado para tecnologias futuras",
                    "Redução de custos em expansões"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* CTA após benefícios */}
            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Cabeamento%20Estruturado*" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Gratuito
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Soluções em Grid */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                NOSSAS SOLUÇÕES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Soluções Completas em Infraestrutura
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços para atender todas as necessidades de rede
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Cable, title: "Cabeamento Metálico", desc: "Instalação de cabos UTP Cat5e, Cat6 e Cat6A para redes de dados de alta velocidade, seguindo normas EIA/TIA.", primary: true },
                { icon: Zap, title: "Fibra Óptica", desc: "Fusão, conectorização e certificação de fibra óptica monomodo e multimodo para backbone de alta velocidade.", primary: true },
                { icon: Server, title: "Montagem de Rack", desc: "Projeto e montagem de racks e armários de telecomunicações com organização profissional de cabos e patch panels.", primary: true },
                { icon: Settings, title: "Infraestrutura Elétrica", desc: "Rede elétrica estabilizada para informática com aterramento adequado e proteção contra surtos e quedas de energia.", primary: false },
                { icon: Network, title: "Redes Wireless", desc: "Projeto e instalação de redes WiFi corporativas com cobertura total, alta performance e gerenciamento centralizado.", primary: false },
                { icon: Layers, title: "Certificação de Rede", desc: "Testes completos com equipamentos certificadores profissionais e emissão de laudos técnicos detalhados.", primary: false }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={`group p-8 bg-card rounded-2xl border-2 border-border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                    item.primary ? 'hover:border-primary' : 'hover:border-secondary'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    item.primary 
                      ? 'bg-primary/10 group-hover:bg-primary/20' 
                      : 'bg-secondary/10 group-hover:bg-secondary/20'
                  }`}>
                    <item.icon className={item.primary ? "text-primary" : "text-secondary"} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* CTA após soluções */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Cabeamento%20Estruturado*" target="_blank" rel="noopener noreferrer">
                  Fale com um Especialista
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Por que escolher a Semper Vincit */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation-delayed" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                    POR QUE NOS ESCOLHER
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Diferenciais da Semper Vincit
                  </h2>
                  <p className="text-xl text-white/80">
                    Conheça as vantagens de contratar nossos serviços de cabeamento estruturado
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Award, title: "Garantia de até 25 Anos", desc: "Oferecemos garantia estendida na infraestrutura de cabeamento, dependendo do fabricante utilizado." },
                    { icon: Shield, title: "Profissionais Certificados", desc: "Nossa equipe possui certificações dos principais fabricantes como Furukawa, CommScope e Panduit." },
                    { icon: Clock, title: "Projeto e Cronograma", desc: "Desenvolvemos projeto detalhado com cronograma de execução para minimizar impacto nas operações." }
                  ].map((item) => (
                    <div 
                      key={item.title}
                      className="flex gap-4 group transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-secondary" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Cabeamento%20Estruturado*" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Solicitar Orçamento
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
                <img 
                  src={diferenciaisImage} 
                  alt="Instalação profissional de cabeamento" 
                  className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Cabeamento */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation-delayed" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                CATEGORIAS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Tipos de Cabeamento</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Trabalhamos com todas as categorias de cabos para atender cada necessidade específica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Cat5e", type: "Básico", speed: "1 Gbps", distance: "100 metros", items: ["Ideal para redes básicas", "Custo acessível", "Compatível com PoE", "Redes de pequeno porte"], featured: false },
                { name: "Cat6", type: "Mais Popular", speed: "10 Gbps", distance: "55 metros", items: ["Melhor custo-benefício", "Baixa interferência", "Suporte a PoE+", "Empresas de médio porte"], featured: true },
                { name: "Cat6A", type: "Profissional", speed: "10 Gbps", distance: "100 metros", items: ["Data centers", "Máxima blindagem", "Suporte PoE++", "Alta disponibilidade"], featured: false }
              ].map((cable) => (
                <div 
                  key={cable.name}
                  className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                    cable.featured 
                      ? 'bg-secondary scale-105 shadow-2xl' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{cable.name}</h3>
                    <p className={cable.featured ? "text-white/90" : "text-white/70"}>{cable.type}</p>
                  </div>
                  <div className="text-center mb-6">
                    <div className={`text-5xl font-bold mb-2 ${cable.featured ? 'text-white' : 'text-secondary'}`}>
                      {cable.speed}
                    </div>
                    <p className={`text-sm ${cable.featured ? "text-white/80" : "text-white/60"}`}>{cable.distance}</p>
                  </div>
                  <ul className={`space-y-3 ${cable.featured ? 'text-white' : 'text-white/90'}`}>
                    {cable.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${cable.featured ? 'bg-white' : 'bg-secondary'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={faqItems} 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre cabeamento estruturado"
        />

        {/* CTA Final */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                PRONTO PARA COMEÇAR?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Transforme a Infraestrutura de Rede da sua Empresa
              </h2>
              <p className="text-xl text-muted-foreground">
                Entre em contato para uma análise técnica gratuita e orçamento personalizado. 
                Nossa equipe está pronta para desenvolver a melhor solução para seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 h-14 group">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20*Cabeamento%20Estruturado*" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Solicitar Orçamento Gratuito
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14">
                  <Link to="/sobre">
                    Conheça a Empresa
                  </Link>
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

export default Cabeamento;