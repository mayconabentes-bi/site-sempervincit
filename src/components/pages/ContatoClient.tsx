"use client";

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { toast } from "sonner"
import heroCarregador from "@/assets/hero-carregador.jpg";

const ContatoClient = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servico: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const servicosMap: Record<string, string> = {
      cftv: "CFTV",
      cabeamento: "Cabeamento Estruturado",
      internet: "Internet Dedicada",
      carregadores: "Carregadores Elétricos",
      outros: "Outros / Múltiplos Serviços",
    };

    const mensagemWhatsApp = `*Solicitação de Orçamento - Site Semper Vincit*

*Nome:* ${formData.nome.trim()}
*E-mail:* ${formData.email.trim()}
*Telefone:* ${formData.telefone.trim()}
${formData.empresa ? `*Empresa:* ${formData.empresa.trim()}` : ""}
*Serviço de Interesse:* ${servicosMap[formData.servico] || formData.servico}

*Mensagem:*
${formData.mensagem.trim()}`;

    const numeroWhatsApp = "5592985759589";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
    
    window.open(urlWhatsApp, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      servico: "",
      mensagem: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Hero
          title="Entre em Contato"
          subtitle="Estamos Prontos para Atender Você"
          description="Fale com nossa equipe e descubra como podemos transformar a tecnologia da sua empresa."
          badge="Fale Conosco"
          ctaLink="#formulario"
          image={heroCarregador}
          floatingIcons={[MessageSquare, Phone, Mail]}
        />

        {/* Formulário e Informações */}
        <section id="formulario" className="py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Formulário */}
              <Card className="border-2 hover:border-primary/50 transition-colors duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Solicite um Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        required
                        placeholder="Seu nome"
                        className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="seu@email.com"
                        className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleChange("telefone", e.target.value)}
                        required
                        placeholder="(92) 99999-9999"
                        className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                        placeholder="Nome da empresa"
                        className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="servico">Serviço de Interesse *</Label>
                      <Select
                        value={formData.servico}
                        onValueChange={(value) => handleChange("servico", value)}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cftv">CFTV</SelectItem>
                          <SelectItem value="cabeamento">Cabeamento Estruturado</SelectItem>
                          <SelectItem value="internet">Internet Dedicada</SelectItem>
                          <SelectItem value="carregadores">Carregadores Elétricos</SelectItem>
                          <SelectItem value="outros">Outros / Múltiplos Serviços</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleChange("mensagem", e.target.value)}
                        required
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={5}
                        className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 group overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send size={20} />
                        Enviar Mensagem
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    CONTATO
                  </span>
                  <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Nossa equipe está pronta para atender você. Entre em contato pelos canais abaixo ou preencha o formulário ao lado.
                  </p>
                </div>

                <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-6 space-y-6">
                    {[
                      { icon: Phone, title: "Telefone", value: "(92) 98575-9589", primary: true },
                      { icon: Mail, title: "E-mail", value: "atendimento@dasemper.com", extra: "comercial@sempervincit.com.br", primary: false },
                      { icon: MapPin, title: "Endereço", value: "Rua Visconde de Sinimbu, 10, Quadra C15", extra: "Parque das Laranjeiras, Flores, Manaus - AM", primary: true }
                    ].map((contact, index) => (
                      <div 
                        key={contact.title}
                        className="flex items-start gap-4 group transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          contact.primary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'
                        }`}>
                          <contact.icon className={contact.primary ? "text-primary" : "text-secondary"} size={28} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{contact.title}</h3>
                          <p className="text-muted-foreground">{contact.value}</p>
                          {contact.extra && <p className="text-muted-foreground text-sm">{contact.extra}</p>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Google Maps Embed */}
                <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.075932822108!2d-60.007548724128!3d-3.0745260401569305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c107293a9c79f%3A0xe74f1c5c0c9c5c5c!2sR.%20Visc.%20de%20Sinimb%C3%BA%2C%2010%20-%20Flores%2C%20Manaus%20-%20AM%2C%2069058-790!5e0!3m2!1spt-BR!2sbr!4v1712685000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Semper Vincit"
                  />
                </Card>

                <Card className="bg-primary text-primary-foreground hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="pt-6 flex items-start gap-4 relative">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Horário de Atendimento</h3>
                      <p>Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContatoClient;