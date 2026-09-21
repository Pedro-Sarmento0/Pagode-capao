import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "wouter";
import { FestivalLayout } from "@/components/FestivalLayout";

const heroImage = "/manus-storage/pagode-capao-hero_15475659.jpg";
const artists = [
  { name: "Joana da Vila", meta: "Sexta · 22h · Palco Do Quintal", image: "/manus-storage/artist-1_54cb6210.jpg" },
  { name: "Mestre Nego D", meta: "Sábado · 20h · Palco Da Roda", image: "/manus-storage/artist-2_e6e0a76e.jpg" },
  { name: "Batuque da Laje", meta: "Sábado · 18h · Palco Da Roda", image: "/manus-storage/artist-3_52feb90e.jpg" },
];

export default function Home() {
  return (
    <FestivalLayout>
      <section className="hero">
        <img className="hero-media" src={heroImage} alt="Roda de samba iluminada à noite" />
        <div className="container hero-content">
          <div>
            <span className="eyebrow">Capão Redondo, São Paulo</span>
            <h1 className="display">Pagode<br />do Capão</h1>
            <p className="hero-intro">Do terreiro pro palco. Dois dias para cantar alto, abraçar quem é de casa e fazer o chão tremer no compasso do tantã.</p>
            <div className="hero-actions">
              <Link href="/ingressos" className="button button-primary">Garantir meu ingresso <ArrowRight size={17} /></Link>
              <Link href="/lineup" className="button button-ghost">Ver programação</Link>
            </div>
          </div>
          <div className="hero-date">
            <strong>14 + 15<br />NOV</strong>
            <span><MapPin size={13} /> Fábrica de Cultura Capão · SP</span>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Quem chega junto</span>
              <h2 className="display section-title">Três vozes,<br />um só coro.</h2>
            </div>
            <p className="section-note">A seleção que representa o presente e o futuro da roda. E isso é só o começo.</p>
          </div>
          <div className="headliner-grid">
            {artists.map((artist) => (
              <article className="artist-feature" key={artist.name}>
                <img src={artist.image} alt={`Retrato de ${artist.name}`} />
                <div className="artist-feature-content">
                  <span className="brush-label">Ao vivo</span>
                  <h3>{artist.name}</h3>
                  <p>{artist.meta}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4.5rem" }}>
            <Link href="/lineup" className="button button-primary">Conhecer line-up completo <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container manifesto">
          <div>
            <span className="eyebrow">Não é só um festival</span>
            <p className="manifesto-quote">"A nossa roda tem espaço pra todo mundo."</p>
          </div>
          <div>
            <p className="manifesto-copy">O <strong>Pagode do Capão</strong> nasce de uma certeza: a cultura de quebrada é grande demais para caber em qualquer rótulo. É encontro, memória, passinho, suor e afeto. É o som que acompanha a volta pra casa — e agora ocupa a cidade inteira.</p>
            <div className="numbers">
              <div className="number"><strong>2</strong><span>Dias de roda</span></div>
              <div className="number"><strong>8+</strong><span>Atrações</span></div>
              <div className="number"><strong>1</strong><span>Comunidade</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-content">
          <div>
            <span className="eyebrow" style={{ color: "#fffaf3" }}>O compasso está chamando</span>
            <h2 className="display cta-title">Você vai ficar de fora dessa roda?</h2>
          </div>
          <Link href="/ingressos" className="button">Quero meu ingresso <CalendarDays size={17} /></Link>
        </div>
      </section>
    </FestivalLayout>
  );
}
