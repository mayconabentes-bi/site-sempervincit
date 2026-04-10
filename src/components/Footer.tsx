import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/semper-vincit-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logo} alt="Semper Vincit - Integradora de Soluções de TI em Manaus" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Integradora de Soluções de Alta Performance em TI e Infraestrutura para o Polo Industrial de Manaus e Região Norte. +17 anos de experiência.
            </p>
            <a
              href="https://www.linkedin.com/company/semper-vincit-tecnologia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-bold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/cftv" className="hover:text-secondary transition-colors">
                  CFTV e Segurança Eletrônica
                </Link>
              </li>
              <li>
                <Link to="/cabeamento" className="hover:text-secondary transition-colors">
                  Cabeamento Estruturado
                </Link>
              </li>
              <li>
                <Link to="/internet" className="hover:text-secondary transition-colors">
                  Internet Dedicada
                </Link>
              </li>
              <li>
                <Link to="/carregadores" className="hover:text-secondary transition-colors">
                  Carregadores Elétricos
                </Link>
              </li>
              <li>
                <Link to="/pim" className="hover:text-secondary transition-colors font-semibold text-secondary/80">
                  Polo Industrial de Manaus
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/sobre" className="hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-secondary transition-colors font-semibold">
                  Insights / Blog
                </Link>
              </li>
              <li>
                <Link to="/cases" className="hover:text-secondary transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link to="/academia" className="hover:text-secondary transition-colors">
                  Academia Semper Vincit
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e NAP */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a href="https://w.app/d1kc92" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">(92) 98575-9589</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a href="mailto:atendimento@dasemper.com" className="hover:text-secondary transition-colors">atendimento@dasemper.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-secondary flex-shrink-0" />
                <address className="flex flex-col not-italic">
                  <span className="font-semibold text-white">Semper Vincit</span>
                  <span>Rua Visconde de Sinimbu, 10, Qda C15, Lote 10</span>
                  <span>Parque das Laranjeiras, Flores</span>
                  <span>Manaus - AM | CEP: 69058-790</span>
                </address>
              </li>
              <li className="text-xs text-primary-foreground/50 mt-2">
                CNPJ: 09.150.651/0001-32
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Semper Vincit. Todos os direitos reservados.</p>
          <p className="text-xs">Integradora de Soluções de Alta Performance em TI | Manaus - AM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
