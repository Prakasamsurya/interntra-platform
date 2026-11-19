import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

type CtaSectionProps = {
  heading?: string;
  body?: string;
};

export default function CtaSection({
  heading = 'Ready to build your professional identity?',
  body = 'Tell us where you are in your journey and we will help you take the next practical step — resume, LinkedIn, portfolio or projects.',
}: CtaSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest-900 px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-700/60 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-forest-600/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-forest-100">{body}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn bg-white text-forest-800 hover:bg-paper-100">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="btn-ghost-light">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
