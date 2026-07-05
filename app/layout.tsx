import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TallyLine — Talk your books into order.",
  description:
    "TallyLine is a voice-AI bookkeeping and micro-credit platform for informal market traders across Nigeria and Ghana. Speak a sale or expense in your own language and TallyLine builds your ledger — and your credit history — automatically.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-cream text-ink">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
