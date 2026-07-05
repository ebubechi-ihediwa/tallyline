import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — TallyLine",
  description: "Join the TallyLine beta, ask about partnering as a microfinance institution, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        body="Whether you want to join the beta as a trader or explore a partnership as a lender, we'd like to hear from you."
      />
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-5">
          <div className="tl-card p-6">
            <Mail className="w-5 h-5 text-terracotta mb-3" />
            <div className="text-sm font-semibold text-ink mb-1">Email us directly</div>
            <a href="mailto:hello@tallyline.africa" className="text-sm text-ink-light hover:text-terracotta">
              hello@tallyline.africa
            </a>
          </div>
          <div className="tl-card p-6">
            <MessageCircle className="w-5 h-5 text-terracotta mb-3" />
            <div className="text-sm font-semibold text-ink mb-1">Prefer voice?</div>
            <p className="text-sm text-ink-light">
              Beta traders can also reach our support line the same way they
              log a sale — by voice note.
            </p>
          </div>
          <div className="tl-card p-6">
            <Clock className="w-5 h-5 text-terracotta mb-3" />
            <div className="text-sm font-semibold text-ink mb-1">Response time</div>
            <p className="text-sm text-ink-light">Within one business day, WAT/GMT.</p>
          </div>
        </div>
      </section>
    </>
  );
}
