import Link from "next/link";
import { Mic, Languages, LineChart } from "lucide-react";

const heroCards = [
  { icon: Mic, label: "Voice Ledger", tag: "Live" },
  { icon: Languages, label: "5 Languages", tag: "Live" },
  { icon: LineChart, label: "Credit Score", tag: "Beta" },
];

const bars = [40, 70, 100, 55, 85, 35, 65, 95, 45, 75, 30, 60];

export default function Hero() {
  return (
    <section className="relative tl-section-bg flex flex-col items-center justify-center pt-16 pb-20 md:pb-28 overflow-hidden text-center">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="tl-label mb-6">Private beta &middot; Nigeria &amp; Ghana</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.12] text-ink tracking-tight mb-8">
          Talk your books into order.
        </h1>
        <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto leading-relaxed mb-10">
          TallyLine is a voice-AI bookkeeping and micro-credit platform for
          informal market traders. Call or send a WhatsApp voice note in
          Pidgin, Hausa, Yoruba, Igbo, or English, and we&apos;ll turn what you
          say into a running ledger — and eventually, a credit history.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/contact" className="tl-btn-primary px-8 py-3.5 text-base">
            Join the Beta
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center gap-3 text-ink hover:text-terracotta transition-colors group"
          >
            <span className="tl-play-btn group-hover:bg-terracotta/20 transition-colors">
              <Mic className="w-4 h-4" />
            </span>
            <span className="font-medium">How It Works</span>
          </a>
        </div>

        <div className="flex items-end justify-center gap-1.5 h-14 mt-14 mx-auto" aria-hidden="true">
          {bars.map((h, i) => (
            <span
              key={i}
              className="tl-wave-bar w-1.5 rounded-full bg-gradient-to-t from-terracotta to-gold"
              style={{
                height: `${h}%`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
        <p className="text-xs text-ink-faint mt-3 tracking-wide">
          &ldquo;I sold five bags of rice today for twelve thousand naira&rdquo;
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 mt-14">
        <div className="grid sm:grid-cols-3 gap-4">
          {heroCards.map(({ icon: Icon, label, tag }) => (
            <div key={label} className="tl-card rounded-2xl p-5 flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{label}</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-faint font-medium">
                  {tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
