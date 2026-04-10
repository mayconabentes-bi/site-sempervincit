import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Shield,
  Network,
  Camera,
  Cable,
  Wifi,
  CheckCircle,
} from "lucide-react";

const programs = [
  {
    icon: Camera,
    title: "Segurança Eletrônica Avançada",
    description: "Formação completa em CFTV, analíticos de IA, integração com alarmes e projetos de segurança perimetral.",
    modules: ["Fundamentos de Segurança Eletrônica", "CFTV com IA e Analíticos", "Projeto de Segurança Perimetral", "Manutenção Preventiva e Corretiva"],
    level: "Intermediário",
    duration: "40h",
  },
  {
    icon: Cable,
    title: "Cabeamento Estruturado",
    description: "Normas EIA/TIA 568, fusão de fibra óptica, certificação de redes e boas práticas de instalação.",
    modules: ["Normas Técnicas (EIA/TIA 568)", "Fusão e Conectorização de Fibra", "Certificação com Fluke", "Projetos para Data Centers"],
    level: "Avançado",
    duration: "60h",
  },
  {
    icon: Wifi,
    title: "Redes e Conectividade",
    description: "Configuração de redes corporativas, roteamento, VLANs, QoS e gestão de links dedicados.",
    modules: ["Fundamentos de Redes TCP/IP", "Roteamento e Switching", "Wi-Fi Corporativo (UniFi)", "Segurança de Rede e Firewall"],
    level: "Intermediário",
    duration: "48h",
  },
];

const values = [
  {
    icon: GraduationCap,
    title: "Educação Contínua",
    description: "Acreditamos que o conhecimento transforma profissionais e comunidades inteiras.",
  },
  {
    icon: Users,
    title: "Integração de Comunidade",
    description: "Construímos redes de confiança que vão além da tecnologia.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Formamos profissionais com certificações reconhecidas pelo mercado.",
  },
  {
    icon: Shield,
    title: "Responsabilidade Social",
    description: "Investimos no futuro do Amazonas através da capacitação de mão de obra local.",
  },
];

const Academia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero da Academia */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/10 text-white hover:bg-white/10 mb-6 border-white/20 text-sm px-4 py-1">
                <GraduationCap className="w-4 h-4 mr-2" />
                Centro de Formação Técnica
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Academia <span className="text-secondary">Semper Vincit</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Formação técnica de excelência para profissionais de TI e Infraestrutura no Amazonas. 
                Não apenas instalamos tecnologia — <strong className="text-white">educamos e integramos comunidades</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-10 bg-secondary hover:bg-secondary/90 text-white group"
                >
                  <a 
                    href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Academia%20Semper%20Vincit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Inscreva-se
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg h-14 px-10 bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <a href="#programas">Conheça os Programas</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Profissionais Formados" },
                { number: "17+", label: "Anos de Experiência" },
                { number: "12", label: "Programas de Formação" },
                { number: "98%", label: "Satisfação dos Alunos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/10 mb-4">
                NOSSOS VALORES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Mais que Tecnologia: <span className="text-secondary">Transformação</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A Academia Semper Vincit nasceu da convicção de que o verdadeiro progresso nasce do conhecimento compartilhado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group text-center p-8 bg-card rounded-3xl border border-border hover:shadow-xl hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programas de Formação */}
        <section id="programas" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                PROGRAMAS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Programas de <span className="text-secondary">Formação</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cursos práticos e intensivos, ministrados por especialistas com experiência real em campo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-3xl border border-border p-8 hover:shadow-2xl hover:border-secondary/20 transition-all duration-500 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">{program.level} • {program.duration}</Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="mt-auto space-y-3 pt-6 border-t border-border">
                    {program.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Invista no seu futuro profissional
                </h2>
                <p className="text-xl mb-10 text-white/80">
                  Junte-se aos mais de 500 profissionais que já passaram pela Academia Semper Vincit e transformaram suas carreiras no Amazonas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="text-lg h-14 px-10 bg-secondary hover:bg-secondary/90 text-white group"
                  >
                    <a 
                      href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Quero%20me%20inscrever%20na%20Academia%20Semper%20Vincit."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Quero me Inscrever
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg h-14 px-10 bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Link to="/contato">Fale Conosco</Link>
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

export default Academia;
