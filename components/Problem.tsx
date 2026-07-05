import { BookX, AlertTriangle, Landmark } from "lucide-react";

const points = [
  {
    icon: BookX,
    title: "No digital records",
    body: "Millions of market women, roadside vendors, and small shop owners track sales and expenses from memory, or not at all. There's no ledger to show a bank, a supplier, or even themselves.",
  },
  {
    icon: AlertTriangle,
    title: "Money lost to memory and theft",
    body: "Without a running record, small errors, forgotten debts, and petty theft quietly eat into daily earnings — and there's no data trail to catch it.",
  },
  {
    icon: Landmark,
    title: "Locked out of formal credit",
    body: "No credit history means no loan, no matter how reliable the business actually is. Paperwork-heavy bank processes assume literacy and time that many traders don't have to spare.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Informal trade runs on memory, not records
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Across Nigeria and Ghana, most day-to-day commerce happens off the
          books — which means it happens outside the financial system entirely.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {points.map(({ icon: Icon, title, body }) => (
          <div key={title} className="tl-card p-8">
            <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-terracotta" />
            </div>
            <h3 className="text-lg font-semibold text-ink mb-3">{title}</h3>
            <p className="text-sm text-ink-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
