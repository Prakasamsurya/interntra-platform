import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Inbox, MessageSquareQuote } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';
import { supabase } from '@/lib/supabase';

type Testimonial = {
  id: string;
  student_name: string;
  role: string | null;
  quote: string;
};

function QuoteMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-forest-300" fill="currentColor" aria-hidden="true">
      <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-4-4h-1M20 7h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-4-4h-1" opacity="0.35" />
      <path d="M10.5 7H6.5A2.5 2.5 0 0 0 4 9.5v3A2.5 2.5 0 0 0 6.5 15h1a2.5 2.5 0 0 0 2.5-2.5V7ZM20.5 7h-4A2.5 2.5 0 0 0 14 9.5v3a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5V7Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error: fetchError } = await supabase
        .from('testimonials')
        .select('id, student_name, role, quote')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (cancelled) return;
      if (fetchError) {
        setError(true);
      } else {
        setTestimonials(data ?? []);
      }
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageMeta
        title="Testimonials — InternTra"
        description="Read genuine feedback from students who have worked with InternTra on resumes, LinkedIn and Naukri profiles, portfolios and projects."
      />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow-line">Testimonials</p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
              What students say about working with us.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              We publish only genuine feedback from students we have actually worked with — no
              invented names, no fabricated stories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading testimonials">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-52 animate-pulse rounded-2xl border border-ink-100 bg-white" />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-ink-200 bg-white px-8 py-14 text-center">
              <MessageSquareQuote className="mx-auto h-8 w-8 text-ink-300" />
              <p className="mt-4 font-display text-lg font-semibold text-ink-900">
                Testimonials are temporarily unavailable.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                Something went wrong while loading student feedback. Please try again later.
              </p>
            </div>
          )}

          {!loading && !error && testimonials.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.id} delay={(i % 3) * 80}>
                  <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-[0_16px_40px_-20px_rgba(47,85,60,0.25)]">
                    <QuoteMark />
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-600">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink-100 pt-5">
                      <p className="font-display text-sm font-bold text-ink-900">{t.student_name}</p>
                      {t.role && <p className="mt-0.5 text-xs text-ink-400">{t.role}</p>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}

          {!loading && !error && testimonials.length === 0 && (
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-dashed border-ink-200 bg-white px-8 py-16 text-center sm:px-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-forest-300 to-transparent"
                />
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-forest-50">
                  <Inbox className="h-6 w-6 text-forest-600" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-ink-950">
                  Real student feedback is coming soon.
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-500 sm:text-base">
                  We are a young platform, and we hold ourselves to a simple rule: we only publish
                  words from real students, with their permission. Rather than fill this space with
                  invented testimonials, we are letting it fill naturally as we work.
                </p>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-500">
                  If you have worked with InternTra, keep an eye on this page — your feedback may be
                  the first one here.
                </p>
                <Link to="/contact" className="btn-primary mt-8">
                  Be among the first to work with us
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CtaSection
        heading="Your story could be the first one here."
        body="Work with us on your resume, LinkedIn or Naukri profile, portfolio or projects — and judge the results yourself."
      />
    </>
  );
}
