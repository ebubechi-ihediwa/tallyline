import Link from "next/link";

export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <div className="w-11 h-11 rounded-2xl bg-terracotta flex items-end justify-center gap-[3px] px-2.5 py-2.5">
        <span className="w-[3px] h-[40%] rounded-full bg-cream/90" />
        <span className="w-[3px] h-[75%] rounded-full bg-gold" />
        <span className="w-[3px] h-full rounded-full bg-cream" />
        <span className="w-[3px] h-[55%] rounded-full bg-gold" />
      </div>
      {withWordmark && (
        <span className="font-bold text-lg hidden sm:block text-ink">TallyLine</span>
      )}
    </Link>
  );
}
