import Link from "next/link";
import { Mic } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="tl-card p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-white to-parchment/70">
        <div className="w-14 h-14 rounded-2xl bg-terracotta flex items-center justify-center mx-auto mb-6">
          <Mic className="w-7 h-7 text-cream" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight max-w-2xl mx-auto">
          Ready to talk your books into order?
        </h2>
        <p className="text-lg text-ink-light leading-relaxed max-w-xl mx-auto mb-10">
          Join the private beta, or reach out if you run a microfinance
          institution interested in TallyLine&apos;s credit data.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/contact" className="tl-btn-primary px-8 py-3.5 text-base">
            Join the Beta
          </Link>
          <Link href="/contact" className="tl-btn-outline px-8 py-3.5 text-base">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
