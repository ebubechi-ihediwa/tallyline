import { PhoneCall, Sparkles, ClipboardList, LineChart } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Call or send a voice note",
    body: "Dial the TallyLine number or send a WhatsApp voice note whenever you make a sale or pay for something.",
  },
  {
    icon: Sparkles,
    title: "AI transcribes & extracts",
    body: "Our speech and NLP models turn what you said into structured data — amount, item, customer, type.",
  },
  {
    icon: ClipboardList,
    title: "Ledger updates automatically",
    body: "The entry lands in your running ledger instantly, no confirmation screens or manual entry required.",
  },
  {
    icon: LineChart,
    title: "Credit score builds over time",
    body: "Consistent activity turns into a credit history, which unlocks micro-loans from partner lenders.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">How It Works</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          From spoken word to credit history
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {steps.map(({ icon: Icon, title, body }, i) => (
          <div key={title} className="tl-card p-6 relative">
            <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold text-ink font-bold text-sm flex items-center justify-center border-4 border-cream">
              {i + 1}
            </span>
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5 mt-2">
              <Icon className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
            <p className="text-sm text-ink-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
