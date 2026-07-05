"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="tl-card p-10 text-center">
        <CheckCircle2 className="w-10 h-10 text-terracotta mx-auto mb-4" />
        <div className="text-lg font-semibold text-ink mb-2">Message received</div>
        <p className="text-sm text-ink-light">
          We&apos;ll get back to you within one business day. For anything
          urgent, email{" "}
          <a href="mailto:hello@tallyline.africa" className="text-terracotta hover:underline">
            hello@tallyline.africa
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="tl-card p-8 grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-ink-faint mb-2 block">Full name</label>
          <input
            required
            type="text"
            className="w-full bg-parchment/60 border border-ink/10 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-terracotta/50"
            placeholder="Amaka Eze"
          />
        </div>
        <div>
          <label className="text-xs text-ink-faint mb-2 block">Phone or WhatsApp number</label>
          <input
            required
            type="tel"
            className="w-full bg-parchment/60 border border-ink/10 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-terracotta/50"
            placeholder="+234 800 000 0000"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-ink-faint mb-2 block">Email (optional)</label>
        <input
          type="email"
          className="w-full bg-parchment/60 border border-ink/10 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-terracotta/50"
          placeholder="amaka@example.com"
        />
      </div>

      <div>
        <label className="text-xs text-ink-faint mb-2 block">I am a&hellip;</label>
        <select className="w-full bg-parchment/60 border border-ink/10 rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:border-terracotta/50">
          <option>Market trader or vendor</option>
          <option>Trader cooperative representative</option>
          <option>Microfinance institution</option>
          <option>Investor</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-ink-faint mb-2 block">Message</label>
        <textarea
          rows={4}
          className="w-full bg-parchment/60 border border-ink/10 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-terracotta/50"
          placeholder="Tell us about your business, or how you'd like to partner with TallyLine."
        />
      </div>

      <button type="submit" className="tl-btn-primary px-6 py-3 text-sm w-full sm:w-fit">
        Send Message
      </button>
    </form>
  );
}
