import { Phone, Sparkles, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    label: "Speak it",
    body: "Call a phone number or send a WhatsApp voice note in Pidgin, Hausa, Yoruba, Igbo, or English.",
  },
  {
    icon: Sparkles,
    label: "AI understands it",
    body: "TallyLine transcribes the speech and pulls out the amount, item, customer, and transaction type.",
  },
  {
    icon: LineChart,
    label: "Credit builds itself",
    body: "Every logged sale and expense adds to a running ledger that becomes a credit history over time.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="tl-label mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink leading-tight">
            No app to learn. No forms to fill. Just talk.
          </h2>
          <p className="text-lg text-ink-light leading-relaxed mb-8">
            A trader speaks naturally — &ldquo;I sold five bags of rice today
            for twelve thousand naira&rdquo; — and TallyLine does the rest.
            No typing, no literacy requirement, no new habits to build beyond
            the phone call or voice note traders already know how to send.
          </p>
          <p className="text-lg text-ink-light leading-relaxed">
            Over weeks and months, that voice ledger becomes something
            traders have never had access to before: a verifiable financial
            track record that partner microfinance institutions can use to
            extend credit.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map(({ icon: Icon, label, body }, i) => (
            <div key={label} className="tl-card p-6 flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-gold-dark">
                    STEP {i + 1}
                  </span>
                </div>
                <div className="text-base font-semibold text-ink mb-1">{label}</div>
                <p className="text-sm text-ink-light leading-relaxed">{body}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-ink-faint shrink-0 mt-1 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
