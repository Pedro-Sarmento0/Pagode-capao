import { CalendarDays, Instagram, Menu, Music2, X } from "lucide-react";
import { PropsWithChildren, useState } from "react";
import { Link, useLocation } from "wouter";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/lineup", label: "Line-up" },
  { href: "/ingressos", label: "Ingressos" },
  { href: "/informacoes", label: "Informações" },
  { href: "/duvidas", label: "Dúvidas" },
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Página inicial do Pagode do Capão">
      <span className="brand-mark"><Music2 size={22} strokeWidth={2.5} /></span>
      <span className="brand-name">Pagode<br />do Capão<small>Desde a quebrada</small></span>
    </Link>
  );
}

export function FestivalLayout({ children }: PropsWithChildren) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="site-shell">
      <div className="top-strip" aria-label="Informação do festival">
        <div className="ticker"><span>14 + 15 nov 2026</span>·<span>Fábrica de Cultura Capão</span>·<span>Pagode, samba e comunidade</span>·<span>14 + 15 nov 2026</span>·<span>Fábrica de Cultura Capão</span>·<span>Pagode, samba e comunidade</span></div>
      </div>
      <header className="site-header">
        <div className="container header-row">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <Link key={item.href} href={item.href} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</Link>)}
          </nav>
          <Link href="/ingressos" className="nav-cta">Ingressos <CalendarDays size={15} /></Link>
          <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Menu mobile">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>{item.label}</Link>)}
          <Link href="/ingressos" onClick={() => setMenuOpen(false)} className="nav-cta">Garantir ingresso <CalendarDays size={15} /></Link>
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div><div className="footer-logo">Pagode<br />do Capão</div><p className="footer-about">Uma celebração do samba, do pagode e da potência que nasce no encontro. Feito no Capão, para todo mundo.</p></div>
            <div><h2 className="footer-heading">Navegue</h2><div className="footer-links">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
            <div><h2 className="footer-heading">Acompanhe</h2><div className="footer-links"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={14} style={{ verticalAlign: "text-bottom", marginRight: 6 }} />@pagodedocapao</a><span>contato@pagodedocapao.com.br</span><span>Capão Redondo · SP</span></div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Pagode do Capão. Todos os direitos reservados.</span><span>Site-conceito criado para atividade acadêmica.</span></div>
        </div>
      </footer>
    </div>
  );
}
