import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — TallyLine",
  description: "How TallyLine collects, uses, and protects voice recordings, transaction ledgers, and credit data.",
};

const sections = [
  {
    title: "1. What data we collect",
    body: [
      "Audio from phone calls and WhatsApp voice notes sent to log a sale or expense.",
      "The text transcription of that audio, produced by our speech recognition model.",
      "Transaction ledger entries derived from your voice notes: amounts, items, customer names, dates, and transaction type.",
      "Your phone number or WhatsApp ID, used to identify your account and ledger.",
      "Your stated language preference, used to route your audio to the right model.",
      "Repayment and loan performance data shared with us by a partner microfinance institution, if you take a loan matched through TallyLine.",
      "Basic account information for microfinance partners accessing our B2B API (company name, contact details).",
    ],
  },
  {
    title: "2. Why we collect it",
    body: [
      "To transcribe your voice note and extract the transaction details that build your ledger.",
      "To detect anomalies that may indicate fraud, theft, or a data-entry mistake in your ledger.",
      "To calculate a credit score from your transaction volume, consistency, and repayment history, for traders who opt into the premium credit tier.",
      "To generate your plain-language weekly summary report.",
      "To improve our speech and language models over time, using de-identified audio and transcripts where possible.",
    ],
  },
  {
    title: "3. Consent",
    body: [
      "We ask for your explicit consent before your first call or voice note is processed and stored, including consent to record and transcribe your voice.",
      "Credit-score access and sharing your ledger data with a partner microfinance institution is a separate, optional opt-in — you can use the free voice ledger without ever sharing data with a lender.",
      "You can withdraw consent for credit-data sharing at any time by contacting us; this does not delete your existing voice ledger.",
    ],
  },
  {
    title: "4. How we store and protect data",
    body: [
      "Audio, transcripts, and ledger records are encrypted in transit and at rest.",
      "Audio is stored on Amazon S3 with restricted access; ledger records are stored in Amazon DynamoDB.",
      "Access to raw audio and transcripts is limited to the systems and personnel needed to operate transcription, anomaly detection, and support.",
      "We do not publish or display raw audio recordings anywhere in the product; only the derived transcript and ledger entry are shown to you.",
    ],
  },
  {
    title: "5. Data retention",
    body: [
      "Ledger records (amounts, items, dates, transaction type) are kept for as long as your account is active, since they form the credit history that the product is built around.",
      "Raw call and voice-note audio is retained for a limited period after transcription to allow for accuracy review and dispute resolution, then deleted or de-identified on a rolling basis.",
      "You can request deletion of your account and associated ledger data at any time, subject to records a partner lender may be legally required to retain for an active or recent loan.",
    ],
  },
  {
    title: "6. Data sharing",
    body: [
      "We do not sell voice recordings, transcripts, or ledger data to advertisers or data brokers.",
      "Ledger-derived credit data is shared with a partner microfinance institution only if you have opted into the premium credit tier and specifically consented to that lender reviewing your data.",
      "Aggregated, de-identified data (for example, overall transaction volume trends across a region) may be used to improve our models or shared in aggregate form with partners; this is never traceable back to an individual trader.",
      "We may disclose data if required by law or to investigate suspected fraud on the platform.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      "You can ask us what data we hold about you, request a copy of your ledger, correct inaccurate ledger entries, or request deletion of your account.",
      "If you believe an anomaly alert or credit score decision is wrong, you can flag it for manual review through the app or by contacting support.",
      "Requests can be sent to hello@tallyline.africa and will be handled within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Regulatory alignment",
    body: [
      "TallyLine is an early-stage company. We are building our data practices toward alignment with Nigeria's Data Protection Act (NDPA 2023) and comparable data protection rules in Ghana, and we will continue to formalize this as we grow and as we work more closely with regulated microfinance partners.",
      "This policy does not constitute a claim of full regulatory certification; it describes our current practices and our direction of travel.",
    ],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "We will update this page when our data practices change materially and update the date below.",
    ],
  },
  {
    title: "10. Contact",
    body: ["Questions about this policy can be sent to hello@tallyline.africa."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" body="Last updated: July 2026" />
      <section className="py-16 px-6 max-w-3xl mx-auto flex flex-col gap-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-ink mb-4">{s.title}</h2>
            <ul className="flex flex-col gap-3">
              {s.body.map((line) => (
                <li key={line} className="text-sm text-ink-light leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
