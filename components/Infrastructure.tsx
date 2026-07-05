import { Cloud, Cpu } from "lucide-react";

const aws = [
  "Amazon S3 for storing call and voice-note audio alongside ledger data",
  "Amazon SageMaker for fine-tuning the speech model and training the credit-scoring model",
  "AWS Lambda for real-time processing of incoming calls and voice notes",
  "Amazon Connect for the voice call infrastructure traders dial into",
  "Amazon DynamoDB as the low-latency store for ledger records",
  "Amazon Bedrock to summarize transactions into plain-language weekly reports",
];

const nvidia = [
  "NVIDIA Riva for real-time speech recognition on incoming calls",
  "NVIDIA TensorRT to optimize inference latency so live calls don't lag",
  "CUDA-accelerated training for faster iteration on speech and credit models",
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="tl-label mb-4">Technology &amp; Infrastructure</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink leading-tight">
          Built to handle a live phone call, not just a batch job
        </h2>
        <p className="text-lg text-ink-light leading-relaxed">
          Voice ledgering only works if transcription happens fast enough to
          feel natural on a call. Our infrastructure is built around that
          constraint from the ground up.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="tl-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-terracotta" />
            </div>
            <div className="text-lg font-semibold text-ink">How We Use AWS</div>
          </div>
          <p className="text-sm text-ink-light leading-relaxed mb-6">
            AWS hosts our storage, model training, and call-processing
            pipeline — the parts of TallyLine that have to scale with every
            new trader and every new call.
          </p>
          <ul className="flex flex-col gap-3">
            {aws.map((item) => (
              <li key={item} className="text-sm text-ink-light flex gap-2">
                <span className="text-terracotta mt-1">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tl-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-terracotta" />
            </div>
            <div className="text-lg font-semibold text-ink">How We Use NVIDIA</div>
          </div>
          <p className="text-sm text-ink-light leading-relaxed mb-6">
            NVIDIA technology powers the speech recognition layer that has to
            run in real time while a trader is still talking, and speeds up
            how fast we can train and retrain our models.
          </p>
          <ul className="flex flex-col gap-3">
            {nvidia.map((item) => (
              <li key={item} className="text-sm text-ink-light flex gap-2">
                <span className="text-terracotta mt-1">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
