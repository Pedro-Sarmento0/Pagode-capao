import { FormEvent, useState } from "react";
import { Plus, Send } from "lucide-react";
import { toast } from "sonner";
import { FestivalLayout } from "@/components/FestivalLayout";

const faqs = [
  ["O festival é para maiores de idade?", "Não. O Pagode do Capão é livre para todas as idades. Menores de 16 anos precisam estar acompanhados por responsável legal durante todo o evento."],
  ["Como funciona a meia-entrada?", "A meia-entrada é válida para estudantes, pessoas com deficiência, jovens de baixa renda e demais públicos previstos em lei, sempre com comprovante válido na entrada."],
  ["Posso sair e entrar novamente?", "Não haverá reentrada depois da validação do ingresso. Combine direitinho com a sua turma antes de passar pelos portões."],
  ["Vai ter alimentação no local?", "Sim. A praça de alimentação reúne opções vegetarianas, lanches, doces e bebidas. Também teremos bebedouros para quem trouxer garrafa plástica vazia."],
  ["O evento acontece se chover?", "Sim. A programação está preparada para acontecer com chuva leve. Apenas em condições que comprometam a segurança podem ocorrer ajustes, comunicados pelos canais oficiais."],
  ["Preciso imprimir o ingresso?", "Não precisa. Apresente o QR Code no celular junto a um documento com foto. Deixe o brilho da tela alto para agilizar a entrada."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const sendContact = (event: FormEvent) => { event.preventDefault(); toast.success("Mensagem preparada!", { description: "Este formulário é visual e não envia dados de verdade." }); };
  return <FestivalLayout>
    <section className="page-hero"><div className="container"><span className="eyebrow">Sem perder o ritmo</span><h1 className="display">Dúvidas?<br />Fala com a gente.</h1><p>Aqui tem as respostas que a nossa roda mais pede. Se ainda faltar alguma coisa, manda sua pergunta no formulário.</p></div></section>
    <section className="section section-paper"><div className="container faq-layout"><div><span className="eyebrow">Perguntas frequentes</span><div className="lineup-list" style={{ marginTop: "1rem" }}>{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button className={`faq-question ${open === index ? "open" : ""}`} onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>{question}<Plus size={20}/></button><div className={`faq-answer ${open === index ? "open" : ""}`} style={{ maxHeight: open === index ? 200 : 0 }}>{answer}</div></div>)}</div></div>
      <aside className="contact-panel"><span className="eyebrow" style={{ color: "#f5c64d" }}>Ainda ficou na dúvida?</span><h2>Chama no papo.</h2><p>Preencha os campos e deixe a sua mensagem. A gente responde pelos canais oficiais do festival.</p><form className="contact-form" onSubmit={sendContact}><label htmlFor="name">Seu nome</label><input id="name" required placeholder="Como a gente te chama?"/><label htmlFor="email">Seu e-mail</label><input id="email" type="email" required placeholder="voce@email.com"/><label htmlFor="message">Mensagem</label><textarea id="message" required placeholder="Conta pra gente..."/><button className="button" type="submit">Enviar mensagem <Send size={16}/></button></form></aside>
    </div></section>
  </FestivalLayout>;
}
