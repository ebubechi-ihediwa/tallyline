import { Lock, UserCheck, ShieldOff, ScrollText } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Encrypted storage",
    body: "Voice recordings, transcripts, and ledger data are encrypted in transit and at rest.",
  },
  {
    icon: UserCheck,
    title: "Consent before enrollment",
    body: "Every trader explicitly agrees to voice recording and data use before their first call is logged.",
  },
  {
    icon: ShieldOff,
    title: "Never sold to third parties",
    body: "We don't sell trader data to advertisers or anyone else. Credit data is only shared with lenders a trader opts into.",
  },
  {
    icon: ScrollText,
    title: "Working toward NDPR alignment",
    body: "We're building our data practices toward alignment with Nigeria's NDPR and comparable rules in Ghana as we grow.",
  },
];

export default function TrustCompliance() {
  return (
    <section id="trust" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Trust &amp; Data Handling</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Financial and voice data deserves extra care
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          We know we&apos;re asking traders to trust us with two of their most
          sensitive things: their voice and their money. We take that
          seriously, and we&apos;re upfront that we&apos;re still early in formalizing
          every protection.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map(({ icon: Icon, title, body }) => (
          <div key={title} className="tl-card p-6">
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-sm font-semibold text-ink mb-2">{title}</h3>
            <p className="text-xs text-ink-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
