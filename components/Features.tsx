import {
  Mic,
  Languages,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice ledger",
    body: "Log a sale or expense by calling in or sending a voice note — no typing, no app to open mid-sale.",
  },
  {
    icon: Languages,
    title: "Speaks your language",
    body: "Works in Nigerian Pidgin, Hausa, Yoruba, Igbo, and English, including natural code-switching.",
  },
  {
    icon: ClipboardList,
    title: "Automatic categorization",
    body: "Every entry is broken down into amount, item, customer, and transaction type without manual sorting.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud & anomaly alerts",
    body: "Unusual entries — a sale that looks off, a mismatched total — get flagged so you can catch problems early.",
  },
  {
    icon: TrendingUp,
    title: "Credit score you can grow",
    body: "Consistent ledger activity builds a credit score over time, opening the door to microloans.",
  },
  {
    icon: FileText,
    title: "Plain-language weekly reports",
    body: "A simple weekly summary of what you sold, spent, and earned — written in plain language, not spreadsheets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Features</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Everything a trader needs, none of the paperwork
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Built for people who run a business from a stall, a cart, or a
          shopfront — not a spreadsheet.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="tl-card p-7">
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5">
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
