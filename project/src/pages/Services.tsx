import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';
import { SERVICES } from '@/lib/services';

function ServiceVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div
        className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_20px_48px_-24px_rgba(24,24,23,0.3)] transition-transform duration-500 hover:rotate-0"
        style={{ transform: 'rotateY(6deg) rotateX(3deg)' }}
      >
        <div className="flex items-center justify-between border-b border-ink-100 pb-4">
          <div className="h-2.5 w-24 rounded-full bg-ink-200" />
          <div className="h-2.5 w-10 rounded-full bg-forest-300" />
        </div>
        {[70, 90, 55, 80].map((w, i) => (
          <div key={i} className="mt-4 flex items-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-forest-500" />
            <div className="h-2 rounded-full bg-ink-100" style={{ width: `${w}%` }} />
          </div>
        ))}
        <div className="mt-5 rounded-lg bg-forest-50 px-4 py-2.5 text-center text-xs font-semibold text-forest-700">
          ATS-friendly formatting
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div
        className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_20px_48px_-24px_rgba(24,24,23,0.3)] transition-transform duration-500 hover:rotate-0"
        style={{ transform: 'rotateY(-6deg) rotateX(3deg)' }}
      >
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-forest-500 to-forest-700" />
          <div className="flex-1">
            <div className="h-2.5 w-28 rounded-full bg-ink-300" />
            <div className="mt-2 h-2 w-40 rounded-full bg-ink-100" />
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-paper-100 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">Headline</p>
          <p className="mt-1.5 text-sm font-medium text-ink-800">Aspiring Developer · Building real projects</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Skills', 'Experience', 'Projects', 'About'].map((tag) => (
            <span key={tag} className="rounded-full border border-ink-100 bg-paper-50 px-3 py-1 text-xs font-medium text-ink-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div
        className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_20px_48px_-24px_rgba(24,24,23,0.3)] transition-transform duration-500 hover:rotate-0"
        style={{ transform: 'rotateY(6deg) rotateX(3deg)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#2f6f9f] text-sm font-bold text-white">N</div>
            <div>
              <div className="h-2.5 w-28 rounded-full bg-ink-300" />
              <div className="mt-2 h-2 w-20 rounded-full bg-ink-100" />
            </div>
          </div>
          <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[10px] font-semibold text-forest-700">85% complete</span>
        </div>
        <div className="mt-5 rounded-xl bg-paper-100 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">Profile visibility</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-100"><div className="h-full w-4/5 rounded-full bg-forest-500" /></div>
          <p className="mt-2 text-xs text-ink-500">Keywords · Skills · Preferences</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Headline', 'Skills', 'Projects'].map((tag) => (
            <span key={tag} className="rounded-full border border-ink-100 bg-paper-50 px-3 py-1 text-xs font-medium text-ink-600">{tag}</span>
          ))}
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="relative" style={{ perspective: '1000px' }}>
        <div
          className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_20px_48px_-24px_rgba(24,24,23,0.3)] transition-transform duration-500 hover:rotate-0"
          style={{ transform: 'rotateY(7deg) rotateX(3deg)' }}
        >
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-ink-300" />
            <div className="flex gap-1.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-2 w-2 rounded-full bg-ink-100" />
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((b) => (
              <div
                key={b}
                className={`h-16 rounded-lg transition-transform duration-300 hover:scale-105 ${
                  b % 3 === 0 ? 'bg-forest-200' : b % 3 === 1 ? 'bg-sand-200' : 'bg-ink-100'
                }`}
              />
            ))}
          </div>
          <div className="mt-4 h-2 w-3/4 rounded-full bg-ink-100" />
        </div>
        <div className="absolute -bottom-4 -right-4 rounded-xl border border-ink-100 bg-white px-4 py-2.5 text-xs font-semibold text-forest-700 shadow-lg">
          Responsive · Mobile ready
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl bg-ink-950 p-6 shadow-[0_20px_48px_-24px_rgba(24,24,23,0.4)] transition-transform duration-500 hover:rotate-0"
      style={{ transform: 'rotateY(-7deg) rotateX(3deg)' }}
    >
      <div className="flex gap-2">
        {['#E4DDCF', '#8BB095', '#B9D1BF'].map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <pre className="mt-5 overflow-hidden text-[11px] leading-6 text-ink-200">
        <code>
          {`const project = {\n  problem: "real-world",\n  stack: ["industry", "tools"],\n  docs: "complete",\n  presented: true\n};`}
        </code>
      </pre>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-800">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-forest-500 to-forest-300" />
      </div>
    </div>
  );
}

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <PageMeta
        title="Services — InternTra"
        description="Resume creation, LinkedIn and Naukri profile optimisation, personal portfolio creation and industry-relevant project guidance — built for students and freshers."
      />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow-line">Our services</p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
              Everything a fresher needs to be taken seriously.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Five focused services that together build a complete professional identity. Start
              with one, or work through all five.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <nav aria-label="Service shortcuts" className="mt-10 flex flex-wrap gap-2.5">
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-ink-200 bg-paper-50 px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:border-forest-400 hover:text-forest-700"
                >
                  {service.shortName}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-20 py-16 lg:py-24 ${i % 2 === 1 ? 'border-y border-ink-200 bg-white' : ''}`}
        >
          <div className="container-site">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal direction={i % 2 === 1 ? 'right' : 'left'}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-bold text-forest-100">{service.number}</span>
                  <span className="h-px flex-1 bg-ink-100" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                  {service.shortName}
                </h2>
                <p className="mt-3 font-display text-base font-medium text-forest-700">{service.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-500">{service.description}</p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-forest-600 p-0.5">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to={`/contact?service=${encodeURIComponent(service.shortName)}`} className="btn-primary mt-9">
                  Get started with {service.shortName.toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>

              <Reveal direction={i % 2 === 1 ? 'left' : 'right'} delay={120} className="hidden md:block">
                <div className="mx-auto max-w-md" style={{ perspective: '1100px' }}>
                  <ServiceVisual index={i} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaSection
        heading="Not sure which service fits?"
        body="Send us a message describing where you are in your journey, and we will point you to the right starting point."
      />
    </>
  );
}
