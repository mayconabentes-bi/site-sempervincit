import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Home, Building, ParkingCircle, Zap, Battery, BatteryCharging, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import carCharger1 from "@/assets/car-charger-1.jpg";
import carCharger2 from "@/assets/car-charger-2.jpg";
import carCharger3 from "@/assets/car-charger-3.jpg";
import carCharger4 from "@/assets/car-charger-4.jpg";
import chargerDetail from "@/assets/charger-detail.jpg";

const faqItems = [
  {
    question: "Qual carregador é ideal para minha residência?",
    answer: "Para uso residencial, recomendamos carregadores de Nível 1 (3,7 kW) ou Nível 2 (7,4 kW). A escolha depende da potência disponível na sua instalação elétrica e do tempo de recarga desejado."
  },
  {
    question: "Preciso fazer alguma adaptação na rede elétrica?",
    answer: "Geralmente sim. Nossa equipe realiza uma vistoria técnica para avaliar a capacidade do seu quadro elétrico e dimensionar o circuito adequado, garantindo segurança e eficiência."
  },
  {
    question: "Quanto tempo leva para carregar um veículo elétrico?",
    answer: "Depende do tipo de carregador e da bateria do veículo. Um carregador Nível 1 leva 8-12 horas para carga completa, Nível 2 leva 4-6 horas, e carregadores rápidos (Nível 3) carregam 80% em 20-40 minutos."
  },
  {
    question: "A instalação é segura?",
    answer: "Sim! Seguimos todas as normas técnicas (NBR 5410 e NBR 17019), emitimos ART assinada por engenheiro eletricista e realizamos testes de funcionamento e segurança após a instalação."
  },
  {
    question: "Qual a garantia do serviço?",
    answer: "Oferecemos garantia de 1 ano na instalação e os equipamentos possuem garantia de fábrica de 2 a 3 anos, dependendo do fabricante."
  },
  {
    question: "Vocês instalam em condomínios?",
    answer: "Sim! Realizamos instalações em condomínios residenciais e comerciais, com projeto personalizado que considera a infraestrutura do local e as normas condominiais."
  }
];

const Carregadores = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <SEO 
        title="Carregadores de Veículos Elétricos | Instalação em Manaus - AM"
        description="Infraestrutura para eletromobilidade no Polo Industrial de Manaus. Dimensionamento e instalação de estações de recarga corporativas e industriais."
        keywords="carregador carro elétrico Manaus, instalação de wallbox Amazonas, eletromobilidade industrial PIM, estação de recarga EV"
        canonicalUrl="https://www.sempervincit.com.br/carregadores"
      />
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Infraestrutura para Eletromobilidade"
          subtitle="Rede de Recarga para Veículos Elétricos no PIM"
          description="Projetamos e executamos estações de recarga inteligentes para indústrias, frotas corporativas e condomínios com total homologação técnica no Amazonas."
          badge="Inovação e Sustentabilidade"
          image={chargerDetail}
          floatingIcons={[Zap, Battery, BatteryCharging]}
          ctaLink="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*Carregamento%20Veicular%20El%C3%A9trico.*"
        />

        {/* Sobre Nós Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Engenharia Elétrica Especializada</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Preparando Manaus para o Futuro Elétrico
                </h2>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    A transição para frotas elétricas no Polo Industrial já é uma realidade. Fornecemos a base segura e inteligente para que essa transformação ocorra sem riscos operacionais.
                  </p>
                  <p>
                    Dimensionamento exato da demanda, adequação do quadro elétrico corporativo e integração de estações de carregamento ultrarrápido com monitoramento por aplicativo.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-foreground">Equipe Certificada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-foreground">Garantia de 1 ano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-foreground">Projeto Elétrico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-foreground">ART Inclusa</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={carCharger1} 
                    alt="Carro elétrico carregando" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Nossos Serviços</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Benefícios do carregador em casa
              </h2>
            </div>

            {/* Economia Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="order-2 md:order-1 scroll-fade-left">
                <img 
                  src={carCharger2} 
                  alt="Carro elétrico colorido" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <h3 className="text-3xl font-bold">Economia a Longo Prazo</h3>
                <p className="text-lg text-muted-foreground">
                  Instale seu carregador em casa e veja a diferença no bolso: com custos por kWh mais baixos que nas estações públicas, cada recarga será um investimento inteligente.
                </p>
              </div>
            </div>

            {/* Tarifas Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-fade-up">
              <div className="space-y-4 scroll-fade-left">
                <h3 className="text-3xl font-bold">Tarifas Reduzidas</h3>
                <p className="text-lg text-muted-foreground">
                  Tarifas de energia noturnas mais baixas podem reduzir significativamente os custos de recarga, especialmente se você carregar durante a noite.
                </p>
              </div>
              <div className="scroll-fade-right">
                <img 
                  src={carCharger3} 
                  alt="Carro elétrico com gradiente" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Economia de Tempo Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="order-2 md:order-1 scroll-fade-left">
                <img 
                  src={carCharger4} 
                  alt="Carro elétrico carregando à noite"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4 scroll-fade-right">
                <h3 className="text-3xl font-bold">Economia de Tempo</h3>
                <p className="text-lg text-muted-foreground">
                  Esqueça os deslocamentos extras. Com o carregador em sua garagem, você recarrega enquanto vive sua rotina com praticidade.
                </p>
              </div>
            </div>
            
            {/* CTA após benefícios */}
            <div className="text-center mt-16 scroll-fade-up">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*Carregamento%20Veicular%20El%C3%A9trico.*" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Gratuito
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Por que escolher Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-up">
              <div className="bg-black text-white rounded-3xl p-10 space-y-8">
                <p className="text-sm uppercase tracking-wider text-white/60">Por que escolher a Semper Vincit</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Equipe técnica altamente treinada</h3>
                    <p className="text-white/80">
                      Nossa equipe é composta por profissionais qualificados e treinados para realizar a instalação de acordo com as normas técnicas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Equipamentos com garantia de fábrica</h3>
                    <p className="text-white/80">
                      Oferecemos garantia de 1 ano em nossas instalações, proporcionando tranquilidade e confiança no serviço prestado.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Segurança e qualidade</h3>
                    <p className="text-white/80">
                      Emitimos ART assinada por engenheiro eletricista e realizamos um projeto elétrico completo.
                    </p>
                  </div>
                </div>

                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*Carregamento%20Veicular%20El%C3%A9trico.*" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={chargerDetail} 
                  alt="Detalhe do carregador" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Onde Instalar Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Locais</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Onde pode ser instalado?</h2>
              <p className="text-xl text-muted-foreground">
                Deixe sua casa ou empresa preparada para o futuro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-scale">
              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Residências</h3>
                <p className="text-muted-foreground">
                  Instalamos carregadores em casas, proporcionando comodidade para carregar no conforto de seu lar.
                </p>
              </div>

              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Condomínios</h3>
                <p className="text-muted-foreground">
                  Realizamos instalações em condomínios, com soluções seguras e eficientes.
                </p>
              </div>

              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <ParkingCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Estacionamentos</h3>
                <p className="text-muted-foreground">
                  Instalamos em estacionamentos públicos e privados, facilitando o acesso ao carregamento.
                </p>
              </div>
            </div>
            
            {/* CTA após locais */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*Carregamento%20Veicular%20El%C3%A9trico.*" target="_blank" rel="noopener noreferrer">
                  Agendar Visita Técnica
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Tipos de Carregadores Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Tipos</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Tipos de Carregadores</h2>
              <p className="text-xl text-white/80">
                Soluções adequadas para cada necessidade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-scale">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Nível 1</h3>
                  <p className="text-white/70">Residencial</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-secondary mb-2">3,7 kW</div>
                  <p className="text-sm text-white/60">127V ou 220V</p>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Ideal para residências
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Recarga durante a noite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Menor investimento
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl p-8 transform scale-105 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Nível 2</h3>
                  <p className="text-white/90">Mais popular</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">7-22 kW</div>
                  <p className="text-sm text-white/80">220V trifásico</p>
                </div>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Condomínios e empresas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Recarga em 4-8 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Melhor custo-benefício
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Nível 3</h3>
                  <p className="text-white/70">Comercial</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-secondary mb-2">50+ kW</div>
                  <p className="text-sm text-white/60">DC Fast Charge</p>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Postos e rodovias
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Recarga em 20-40 min
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Alta potência
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={faqItems} 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre carregadores de veículos elétricos"
        />

        {/* CTA Final Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-sm uppercase tracking-wider text-white/60">Dúvidas? Fale com a gente</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Pronto para instalar seu carregador?
              </h2>
              <p className="text-lg text-white/80">
                Entre em contato e solicite um orçamento personalizado para sua necessidade.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 h-14">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20sobre%20*Carregamento%20Veicular%20El%C3%A9trico.*" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Carregadores;
