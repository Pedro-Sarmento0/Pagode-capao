import { Check, Ticket } from "lucide-react";
import { toast } from "sonner";
import { FestivalLayout } from "@/components/FestivalLayout";

const tiers = [
  { label: "Pra chegar cedo", name: "Quintal", price: "60", note: "Sexta ou sábado", features: ["Acesso a um dia de festival", "Todos os palcos", "Feirinha e praça de alimentação"] },
  { label: "O mais pedido", name: "Roda inteira", price: "105", note: "Passaporte 2 dias", featured: true, features: ["Acesso aos dois dias", "Entrada preferencial até 18h", "Copo oficial do festival", "Todos os palcos e experiências"] },
  { label: "Pra viver de perto", name: "Camarote da Laje", price: "180", note: "Passaporte 2 dias", features: ["Tudo do Roda Inteira", "Área elevada coberta", "Bar exclusivo", "Banheiros dedicados"] },
];

export default function Tickets() {
  return <FestivalLayout>
    <section className="page-hero"><div className="container"><span className="eyebrow">14 + 15 de novembro</span><h1 className="display">Escolha seu<br />lugar na roda</h1><p>Tem ingresso para quem quer chegar cedo, para quem não perde uma batida e para quem quer ver tudo de pertinho. A roda está aberta.</p></div></section>
    <section className="section section-paper"><div className="container"><div className="tickets">{tiers.map((tier) => <article className={`ticket-card ${tier.featured ? "featured" : ""}`} key={tier.name}>{tier.featured && <span className="ticket-corner">MAIS QUERIDO</span>}<span className="ticket-type">{tier.label}</span><h2>{tier.name}</h2><span className="ticket-type">{tier.note}</span><div className="ticket-price"><small>R$</small> {tier.price}</div><ul className="ticket-list">{tier.features.map((feature) => <li key={feature}><Check size={16} strokeWidth={3} />{feature}</li>)}</ul><button className="button" onClick={() => toast.success("Ingresso selecionado!", { description: "Esta é uma demonstração visual; a compra ainda não é realizada." })}>Quero esse <Ticket size={16} /></button></article>)}</div><p className="ticket-note">Valores de lote promocional. Meia-entrada disponível mediante apresentação de documento válido. A taxa de serviço pode ser aplicada no checkout.</p></div></section>
  </FestivalLayout>;
}
