export default function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="tl-section-bg pt-20 pb-16 px-6 border-b border-ink/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-ink mb-4 leading-tight">{title}</h1>
        <p className="text-base md:text-lg text-ink-light leading-relaxed">{body}</p>
      </div>
    </section>
  );
}
