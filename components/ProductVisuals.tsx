import { Mic, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react";

const callBars = [30, 60, 90, 45, 75, 100, 55, 80, 40, 65, 35, 70];

function CallMock() {
  return (
    <div className="tl-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="text-sm font-semibold text-ink">Incoming Voice Note</div>
        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-terracotta font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" /> Transcribing
        </span>
      </div>

      <div className="flex items-center gap-4 bg-parchment/70 rounded-xl p-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center shrink-0">
          <Mic className="w-5 h-5 text-cream" />
        </div>
        <div className="flex items-end gap-1 h-8 flex-1" aria-hidden="true">
          {callBars.map((h, i) => (
            <span
              key={i}
              className="tl-wave-bar w-1 rounded-full bg-terracotta/70"
              style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}
            />
          ))}
        </div>
        <span className="text-xs text-ink-faint shrink-0">0:07</span>
      </div>

      <div className="text-xs uppercase tracking-wider text-ink-faint font-semibold mb-2">
        Live transcription
      </div>
      <p className="text-sm text-ink leading-relaxed mb-4">
        &ldquo;I sold five bags of rice today for twelve thousand naira to
        Mama Chidinma&hellip;&rdquo;
      </p>

      <div className="mt-auto grid grid-cols-2 gap-2 text-xs">
        <div className="bg-gold/15 rounded-lg px-3 py-2">
          <div className="text-ink-faint">Item</div>
          <div className="font-semibold text-ink">Rice, 5 bags</div>
        </div>
        <div className="bg-gold/15 rounded-lg px-3 py-2">
          <div className="text-ink-faint">Amount</div>
          <div className="font-semibold text-ink">&#8358;12,000</div>
        </div>
      </div>
    </div>
  );
}

function LedgerMock() {
  const rows = [
    { item: "Rice, 5 bags", who: "Mama Chidinma", amt: "+₦12,000", type: "in" as const },
    { item: "Transport", who: "—", amt: "-₦1,500", type: "out" as const },
    { item: "Tomatoes, 2 baskets", who: "Uncle Musa", amt: "+₦8,000", type: "in" as const },
    { item: "Sack supplier", who: "Alhaji Bello", amt: "-₦6,200", type: "out" as const },
  ];

  return (
    <div className="tl-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="text-sm font-semibold text-ink">Today&apos;s Ledger</div>
        <span className="text-xs text-ink-faint">4 entries</span>
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((row) => (
          <div
            key={row.item}
            className="flex items-center justify-between bg-parchment/60 rounded-lg px-3 py-2.5 text-xs"
          >
            <div className="flex items-center gap-2">
              {row.type === "in" ? (
                <ArrowUpRight className="w-3.5 h-3.5 text-terracotta shrink-0" />
              ) : (
                <ArrowDownRight className="w-3.5 h-3.5 text-ink-faint shrink-0" />
              )}
              <div>
                <div className="text-ink font-medium">{row.item}</div>
                <div className="text-ink-faint text-[11px]">{row.who}</div>
              </div>
            </div>
            <span
              className={
                row.type === "in" ? "text-terracotta font-semibold" : "text-ink-faint font-semibold"
              }
            >
              {row.amt}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-between text-sm">
        <span className="text-ink-light">Net today</span>
        <span className="font-bold text-ink">+₦12,300</span>
      </div>
    </div>
  );
}

function CreditGaugeMock() {
  return (
    <div className="tl-card p-6 h-full flex flex-col items-center text-center">
      <div className="text-sm font-semibold text-ink self-start mb-5">TallyLine Credit Score</div>
      <svg viewBox="0 0 200 110" className="w-full max-w-[220px]">
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="#f0e4d0"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="#c2542d"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset="99"
        />
        <text x="100" y="80" textAnchor="middle" fontSize="30" fontWeight="800" fill="#3a2b21">
          640
        </text>
        <text x="100" y="100" textAnchor="middle" fontSize="10" fill="#8f7a69">
          out of 850
        </text>
      </svg>
      <span className="tl-pill mt-2">Building &middot; 6 weeks of history</span>
      <p className="text-xs text-ink-faint mt-4 leading-relaxed">
        Based on transaction volume, consistency, and repayment history from
        partner microfinance institutions.
      </p>
    </div>
  );
}

function FraudAlertMock() {
  return (
    <div className="tl-card p-6 h-full flex flex-col">
      <div className="text-sm font-semibold text-ink mb-5">Anomaly Alert</div>
      <div className="bg-terracotta/10 border border-terracotta/25 rounded-xl p-4">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-semibold text-ink">Unusual expense logged</div>
            <div className="text-xs text-ink-light">
              &#8358;45,000 outflow is 6&times; your daily average
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-ink-faint">
          <span>Voice note &middot; 6:42pm</span>
          <span>Flagged for review</span>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-ink-faint">
        Confidence: <span className="text-terracotta font-medium">High</span> &middot; Reply
        &ldquo;confirm&rdquo; or &ldquo;cancel&rdquo; by voice to resolve
      </div>
    </div>
  );
}

export default function ProductVisuals() {
  return (
    <section id="product" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Inside The Platform</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          What TallyLine looks like in the field
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Product previews below reflect the current beta UI direction with
          sample data — not real trader records.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <CallMock />
        <LedgerMock />
        <CreditGaugeMock />
        <FraudAlertMock />
      </div>
    </section>
  );
}
