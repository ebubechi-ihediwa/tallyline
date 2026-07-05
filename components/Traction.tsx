import { Users, Handshake, Mic } from "lucide-react";

const stats = [
  { icon: Mic, value: "Live in beta", label: "Voice ledger" },
  { icon: Users, value: "300+", label: "Traders in pilot" },
  { icon: Handshake, value: "2", label: "MFI partners in active talks" },
];

export default function Traction() {
  return (
    <section id="traction" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="tl-card p-10 md:p-14">
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <span className="tl-pill mb-4">Private beta &middot; early stage</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink leading-tight">
            Early, honest, and growing
          </h2>
          <p className="text-lg text-ink-light leading-relaxed">
            TallyLine is in private beta. These are our real, current numbers
            — not projections.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-terracotta" />
              </div>
              <div className="text-2xl font-bold text-ink mb-1">{value}</div>
              <div className="text-sm text-ink-light">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
