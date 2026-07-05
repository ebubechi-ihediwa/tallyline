import { Mic, LineChart, Handshake, Languages, Smartphone, Globe } from "lucide-react";

const phases = [
  {
    icon: Mic,
    phase: "Phase 1",
    title: "Voice ledger",
    body: "Call-in and WhatsApp voice-note bookkeeping. Live in private beta today.",
    status: "live",
  },
  {
    icon: LineChart,
    phase: "Phase 2",
    title: "Credit scoring engine",
    body: "Turn ledger consistency and volume into a usable credit score.",
    status: "next",
  },
  {
    icon: Handshake,
    phase: "Phase 3",
    title: "Loan marketplace",
    body: "Connect traders directly to partner microfinance lenders for matched loan offers.",
    status: "planned",
  },
  {
    icon: Languages,
    phase: "Phase 4",
    title: "Multi-language expansion",
    body: "Add more Nigerian and Ghanaian languages beyond our initial five.",
    status: "planned",
  },
  {
    icon: Smartphone,
    phase: "Phase 5",
    title: "USSD access",
    body: "Bring TallyLine to feature phones through USSD, no smartphone required.",
    status: "planned",
  },
  {
    icon: Globe,
    phase: "Phase 6",
    title: "Regional expansion",
    body: "Extend into Kenya and wider West Africa as the model proves out.",
    status: "planned",
  },
];

const statusStyles: Record<string, string> = {
  live: "bg-terracotta text-cream",
  next: "bg-gold/25 text-terracotta-dark",
  planned: "bg-ink/5 text-ink-faint",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  next: "Up next",
  planned: "Planned",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Roadmap</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          From voice ledger to regional credit rail
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {phases.map(({ icon: Icon, phase, title, body, status }) => (
          <div key={phase} className="tl-card p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-terracotta" />
              </div>
              <span
                className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${statusStyles[status]}`}
              >
                {statusLabels[status]}
              </span>
            </div>
            <div className="text-xs font-semibold text-gold-dark mb-1">{phase}</div>
            <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
            <p className="text-sm text-ink-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
