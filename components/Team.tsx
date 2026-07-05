const team = [
  {
    initials: "AN",
    name: "Adaeze Nwosu",
    role: "Co-founder & CEO",
    bio: "Former microfinance operations lead across West Africa, focused on getting credit to borrowers banks overlook.",
    linkedin: "#",
  },
  {
    initials: "KO",
    name: "Kwabena Owusu",
    role: "Co-founder & Head of AI",
    bio: "Speech recognition engineer with a background building low-resource-language ASR systems.",
    linkedin: "#",
  },
  {
    initials: "FS",
    name: "Fatima Sule",
    role: "Co-founder & Head of NLP",
    bio: "Computational linguist specializing in Hausa, Yoruba, Igbo, and Pidgin language technology.",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Team</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Built by people who know both sides of the problem
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Our small team spans speech AI, local-language NLP, and microfinance
          operations across the markets we&apos;re building for.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {team.map((member) => (
          <div key={member.name} className="tl-card p-6 text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-terracotta flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-black text-cream">{member.initials}</span>
            </div>
            <div className="text-base font-semibold text-ink">{member.name}</div>
            <div className="text-xs text-terracotta mb-3">{member.role}</div>
            <p className="text-sm text-ink-light leading-relaxed mb-4">{member.bio}</p>
            <a
              href={member.linkedin}
              className="text-xs text-ink-faint hover:text-terracotta transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
