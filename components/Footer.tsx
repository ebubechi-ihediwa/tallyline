import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#solution", label: "How It Works" },
      { href: "/#features", label: "Features" },
      { href: "/#product", label: "Product Previews" },
    ],
  },
  {
    title: "Technology",
    links: [
      { href: "/#technology", label: "AI Models" },
      { href: "/#infrastructure", label: "Infrastructure" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#market", label: "Market" },
      { href: "/#roadmap", label: "Roadmap" },
      { href: "/#team", label: "Team" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-16 bg-parchment/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-sm text-ink-light mt-4 max-w-xs leading-relaxed">
              Talk your books into order. Voice-AI bookkeeping and micro-credit
              for informal market traders across Nigeria and Ghana.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-ink mb-4">{col.title}</div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-light hover:text-terracotta transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>&copy; 2026 TallyLine, Inc. All rights reserved.</p>
          <p>hello@tallyline.africa</p>
        </div>
      </div>
    </footer>
  );
}
