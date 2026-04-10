import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Award, Users, Target, Heart, Shield, Zap, Clock, CheckCircle, Building, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sobreEquipe1 from "@/assets/sobre-equipe-1.jpg";
import sobreEquipe2 from "@/assets/sobre-equipe-2.jpg";
import datacenterImage from "@/assets/cabeamento-datacenter.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Sobre a Semper Vincit"
          subtitle="Integradora de Referência no Amazonas"
          description="+17 anos integrando soluções de TI e infraestrutura para o Polo Industrial de Manaus, órgãos públicos e empresas de toda a Região Norte."
          badge="Quem Somos"
          ctaText="Fale Conosco"
          image={datacenterImage}
          floatingIcons={[Shield, Zap, Target]}
        />

        {/* Quem Somos - Seção Principal */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  QUEM SOMOS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">Nossa História e Missão</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A <strong className="text-foreground">Semper Vincit</strong> é uma integradora de soluções tecnológicas 
                    fundada em Manaus com o propósito de transformar a segurança e a conectividade de empresas e órgãos públicos 
                    em toda a Região Norte do Brasil.
                  </p>
                  <p>
                    Trabalhamos com soluções inteligentes de <strong className="text-foreground">monitoramento por câmeras 
                    com inteligência artificial</strong>, internet de fibra óptica de alta velocidade, infraestrutura 
                    de redes e tecnologia da informação.
                  </p>
                  <p>
                    Nossa equipe é composta por engenheiros, técnicos certificados e especialistas em segurança 
                    eletrônica, todos comprometidos em entregar projetos de excelência que superam as expectativas 
                    dos nossos clientes.
                  </p>
                  <p>
                    Do planejamento à entrega final, nossa equipe especializada cuida de cada detalhe do seu projeto 
                    com responsabilidade, dentro das normas legais e com total proteção dos seus dados.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={sobreEquipe1} 
                    alt="Equipe Semper Vincit realizando instalação de câmeras" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Segunda parte - Compromisso */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={sobreEquipe2} 
                    alt="Técnico Semper Vincit instalando câmera com Ponte Rio Negro ao fundo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  NOSSO COMPROMISSO
                </span>
                <h3 className="text-3xl md:text-4xl font-bold">Excelência em Cada Projeto</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Unimos engenharia, tecnologia e uma equipe multidisciplinar para entregar projetos 
                    sólidos, eficientes e duradouros. Cada cliente recebe atenção personalizada e 
                    soluções desenvolvidas especificamente para suas necessidades.
                  </p>
                  <p className="font-semibold text-foreground text-xl border-l-4 border-secondary pl-4">
                    Nosso compromisso: oferecer mais segurança, eficiência e resultados para nossos 
                    clientes com transparência, prazo cumprido e qualidade garantida.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Projetos Personalizados",
                    "Suporte Técnico 24/7",
                    "Equipe Certificada",
                    "Garantia Estendida"
                  ].map((item, index) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números e Estatísticas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "1000+", label: "Projetos Entregues", icon: Award },
                { number: "17+", label: "Anos de Mercado", icon: Clock },
                { number: "85+", label: "Indústrias no PIM", icon: Users },
                { number: "24/7", label: "Suporte Local", icon: Shield }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl float-animation-delayed" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            {/* Missão e Visão */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fornecer soluções tecnológicas de excelência em segurança eletrônica, conectividade 
                  e infraestrutura de TI, contribuindo para o desenvolvimento e modernização das 
                  empresas e órgãos públicos da região amazônica.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Building className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Visão</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ser referência em tecnologia e inovação na região Norte do Brasil, reconhecida 
                  pela qualidade dos serviços prestados, pelo compromisso com os clientes e pela 
                  contribuição ao desenvolvimento regional.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                NOSSOS VALORES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Princípios que nos Guiam</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Valores fundamentais que orientam cada decisão e ação da nossa empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: "Excelência", desc: "Buscamos sempre superar expectativas, entregando qualidade superior em cada projeto realizado.", primary: true },
                { icon: Users, title: "Compromisso", desc: "Dedicação total ao sucesso de nossos clientes e parceiros, cumprindo prazos e promessas.", primary: false },
                { icon: Target, title: "Inovação", desc: "Mantemos-nos atualizados com as últimas tecnologias para oferecer as melhores soluções.", primary: true },
                { icon: Heart, title: "Integridade", desc: "Transparência e ética em todas as nossas relações comerciais e profissionais.", primary: false }
              ].map((value) => (
                <div 
                  key={value.title}
                  className={`bg-card rounded-2xl p-8 border-2 border-border text-center transition-all duration-300 transform hover:-translate-y-2 shadow-lg ${
                    value.primary ? 'hover:border-primary' : 'hover:border-secondary'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    value.primary ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <value.icon className={value.primary ? "text-primary" : "text-secondary"} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                DIFERENCIAIS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Por que Escolher a Semper Vincit?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça os diferenciais que nos tornam a melhor escolha para seu projeto de tecnologia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Conformidade Legal", desc: "Todos os projetos seguem rigorosamente as normas técnicas e legislação vigente, garantindo segurança jurídica.", primary: true },
                { icon: Users, title: "Equipe Multidisciplinar", desc: "Profissionais especializados em engenharia elétrica, TI, redes e segurança trabalhando em conjunto.", primary: false },
                { icon: Zap, title: "Inteligência Artificial", desc: "Sistemas de monitoramento com IA para detecção inteligente de eventos, reconhecimento facial e automação.", primary: true },
                { icon: Award, title: "Certificações", desc: "Equipe certificada pelos principais fabricantes como Hikvision, Intelbras, Furukawa e outros.", primary: false },
                { icon: Target, title: "Projetos Personalizados", desc: "Cada projeto é desenvolvido de acordo com as necessidades específicas do cliente e do ambiente.", primary: true },
                { icon: Heart, title: "Atendimento Humanizado", desc: "Cada cliente recebe atenção dedicada, com comunicação clara e suporte técnico sempre disponível.", primary: false }
              ].map((item) => (
                <Card 
                  key={item.title}
                  className={`border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                    item.primary ? 'hover:border-primary' : 'hover:border-secondary'
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      item.primary ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <item.icon className={item.primary ? "text-primary" : "text-secondary"} size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Área de Atuação */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  ÁREA DE ATUAÇÃO
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">Presença em Todo o Amazonas</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Com sede em <strong className="text-foreground">Manaus</strong>, a Semper Vincit 
                    atende empresas e órgãos públicos em todo o estado do Amazonas, levando tecnologia 
                    de ponta até os municípios mais distantes da capital.
                  </p>
                  <p>
                    Nossa logística especializada e equipe técnica preparada garantem a execução de 
                    projetos em qualquer localidade, mantendo o mesmo padrão de qualidade e excelência.
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Sede: Manaus, AM</div>
                    <div className="text-muted-foreground">Atendimento em todo o Amazonas</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Manaus",
                  "Parintins",
                  "Itacoatiara",
                  "Manacapuru",
                  "Coari",
                  "Tefé",
                  "Tabatinga",
                  "Interior do AM"
                ].map((city) => (
                  <div 
                    key={city}
                    className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                  >
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              VAMOS COMEÇAR
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para Transformar sua Empresa?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções de tecnologia podem 
              impulsionar a segurança e conectividade do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 h-14 group">
                <Link to="/contato" className="flex items-center gap-2">
                  Falar com Especialista
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;