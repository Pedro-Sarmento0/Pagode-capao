import { useState } from "react";
import { FestivalLayout } from "@/components/FestivalLayout";

const images = [
  "/images/artist-1.jpg",
  "/images/artist-2.jpg",
  "/images/artist-3.jpg",
  "/images/pagode-capao-hero.jpg",
];
const acts = [
  { artist: "Joana da Vila", genre: "Pagode contemporâneo", day: "Sexta", time: "22h00", stage: "Do Quintal", img: images[0] },
  { artist: "Batuque da Laje", genre: "Samba de roda", day: "Sexta", time: "20h20", stage: "Da Roda", img: images[2] },
  { artist: "Nando Sincero", genre: "Pagode romântico", day: "Sexta", time: "18h45", stage: "Do Quintal", img: images[1] },
  { artist: "DJ Beca no Vinil", genre: "Set de brasilidades", day: "Sexta", time: "17h15", stage: "Da Roda", img: images[3] },
  { artist: "Mestre Nego D", genre: "Samba raiz", day: "Sábado", time: "21h30", stage: "Da Roda", img: images[1] },
  { artist: "Canto de Casa", genre: "Pagode 90", day: "Sábado", time: "19h50", stage: "Do Quintal", img: images[0] },
  { artist: "Tia Lúcia & Convidados", genre: "Roda aberta", day: "Sábado", time: "18h20", stage: "Da Roda", img: images[2] },
  { artist: "Cria do Samba", genre: "Samba rock", day: "Sábado", time: "16h50", stage: "Do Quintal", img: images[3] },
];

export default function Lineup() {
  const [activeDay, setActiveDay] = useState("Todos");
  const shownActs = activeDay === "Todos" ? acts : acts.filter((act) => act.day === activeDay);
  return <FestivalLayout>
    <section className="page-hero"><div className="container"><span className="eyebrow">O som da nossa roda</span><h1 className="display">Line-up<br />completo</h1><p>Do samba que atravessa gerações ao pagode que está criando as próximas. Escolha seu dia e descubra quem vai fazer o Capão cantar junto.</p></div></section>
    <section className="section section-cream"><div className="container">
      <div className="day-tabs" aria-label="Filtrar atrações por dia">{["Todos", "Sexta", "Sábado"].map((day) => <button key={day} className={`day-tab ${activeDay === day ? "active" : ""}`} onClick={() => setActiveDay(day)}>{day === "Todos" ? "Todos os dias" : `${day} · ${day === "Sexta" ? "14 nov" : "15 nov"}`}</button>)}</div>
      <div className="lineup-list">{shownActs.map((act) => <article className="lineup-row" key={act.artist}><img src={act.img} className="lineup-thumb" alt={`Retrato de ${act.artist}`} /><div><div className="lineup-name">{act.artist}</div><div className="lineup-meta">Palco {act.stage}</div></div><div className="lineup-genre">{act.genre}</div><div className="lineup-time">{act.time}</div><div className="lineup-meta">{act.day}</div></article>)}</div>
    </div></section>
  </FestivalLayout>;
}
