import { Store, Users, Building2, MapPin } from "lucide-react";

const segments = [
  {
    icon: Store,
    title: "Roadside & market vendors",
    body: "Individual traders selling food, clothing, and household goods from a stall, cart, or shopfront.",
  },
  {
    icon: Users,
    title: "Market cooperatives",
    body: "Trader associations and cooperatives that want a shared, simple way to track member transactions.",
  },
  {
    icon: Building2,
    title: "Microfinance institutions",
    body: "Partner lenders who plug into TallyLine's credit data via API to reach borrowers they couldn't underwrite before.",
  },
];

const revenue = [
  {
    title: "Free voice ledger",
    body: "Basic call-in and voice-note bookkeeping, free for every trader.",
  },
  {
    title: "Premium credit tier",
    body: "Credit-score access and loan matching, monetized through commission from partner lenders.",
  },
  {
    title: "B2B API for lenders",
    body: "Microfinance institutions pay to plug into TallyLine's credit data to underwrite new borrowers.",
  },
];

export default function Market() {
  return (
    <section id="market" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Market</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Starting where informal commerce is largest
        </h2>
        <p className="text-lg text-ink-light leading-relaxed flex items-center justify-center gap-2 flex-wrap">
          <MapPin className="w-4 h-4 text-terracotta" />
          Launching in Nigeria and Ghana, with Kenya planned next.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-14">
        {segments.map(({ icon: Icon, title, body }) => (
          <div key={title} className="tl-card p-7">
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
            <p className="text-sm text-ink-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="tl-card p-8">
        <h3 className="text-lg font-semibold text-ink mb-6 text-center">How TallyLine makes money</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {revenue.map((r, i) => (
            <div key={r.title} className="flex flex-col items-center text-center">
              <span className="tl-pill mb-3">Tier {i + 1}</span>
              <div className="text-sm font-semibold text-ink mb-1.5">{r.title}</div>
              <p className="text-xs text-ink-light leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
