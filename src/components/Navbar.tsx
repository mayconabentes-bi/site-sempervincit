"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/semper-vincit-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolucoes, setShowSolucoes] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Polo Industrial", path: "/pim" },
    { name: "Cases", path: "/cases" },
    { name: "Insights", path: "/insights" },
    { name: "Academia", path: "/academia" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const solucoesLinks = [
    { name: "CFTV", path: "/cftv" },
    { name: "CFTV Naval", path: "/cftv-naval" },
    { name: "Cabeamento", path: "/cabeamento" },
    { name: "Internet", path: "/internet" },
    { name: "Carregadores", path: "/carregadores" },
  ];

  const isActive = (path: string) => pathname === path;
  const isSolucoesActive = solucoesLinks.some((l) => isActive(l.path));

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowSolucoes(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowSolucoes(false), 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src={typeof logo === 'string' ? logo : logo.src} alt="Semper Vincit - Integradora de Soluções de TI em Manaus" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.slice(0, 1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted ${
                  isActive(link.path) ? "text-primary bg-muted" : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Soluções Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted ${
                  isSolucoesActive ? "text-primary bg-muted" : "text-foreground/70"
                }`}
              >
                Soluções
                <ChevronDown size={14} className={`transition-transform ${showSolucoes ? "rotate-180" : ""}`} />
              </button>

              {showSolucoes && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border/50 py-2 animate-fade-in">
                  {solucoesLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                        isActive(link.path) ? "text-primary font-semibold bg-muted" : "text-foreground/70"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted ${
                  isActive(link.path) ? "text-primary bg-muted" : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4">
              <Button variant="outline" size="sm" asChild className="gap-2 text-xs border-primary/20 hover:border-primary">
                <Link href="/contato">
                  <Headset size={14} />
                  Suporte
                </Link>
              </Button>
              <Button variant="default" size="sm" asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
                  Orçamento
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? "text-primary bg-muted" : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-2 px-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Soluções</p>
                {solucoesLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(link.path) ? "text-primary bg-muted" : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-2 px-3">
                <Button variant="outline" size="sm" asChild className="w-full gap-2">
                  <Link href="/contato" onClick={() => setIsOpen(false)}>
                    <Headset size={14} />
                    Suporte Técnico
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <a href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
