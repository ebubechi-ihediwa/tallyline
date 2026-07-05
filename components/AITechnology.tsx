import { Mic, MessageSquare, AlertTriangle, LineChart } from "lucide-react";

const layers = [
  {
    icon: Mic,
    title: "Speech-to-text for local languages",
    body: "A speech recognition model fine-tuned on Nigerian English, Nigerian Pidgin, and code-switching between local languages — the way traders actually speak, not textbook grammar.",
  },
  {
    icon: MessageSquare,
    title: "Entity extraction",
    body: "NLP models pull the amount, item, customer name, and transaction type out of a transcribed sentence, turning free speech into structured ledger data.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly detection",
    body: "Statistical and pattern-based models scan the ledger for signs of likely fraud, theft, or data-entry errors — like a sale far outside a trader's normal range.",
  },
  {
    icon: LineChart,
    title: "Credit-scoring model",
    body: "A model trained on transaction volume, consistency, and repayment history builds a credit score from behavior — not paperwork.",
  },
];

export default function AITechnology() {
  return (
    <section id="technology" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">AI Technology</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Four models working together, one voice note at a time
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Each call or voice note passes through a pipeline built specifically
          for how West African traders speak and do business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {layers.map(({ icon: Icon, title, body }) => (
          <div key={title} className="tl-card p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-light leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
