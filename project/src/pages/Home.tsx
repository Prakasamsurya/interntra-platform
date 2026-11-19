import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';
import { SERVICES } from '@/lib/services';

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Reach out',
    body: 'Send us a message through the contact page and tell us which service you are interested in.',
  },
  {
    step: '02',
    title: 'Share your background',
    body: 'Walk us through your education, skills, projects and where you want your career to go.',
  },
  {
    step: '03',
    title: 'Work with us',
    body: 'We build and refine your resume, LinkedIn profile, Naukri profile, portfolio or project together, step by step.',
  },
  {
    step: '04',
    title: 'Apply with confidence',
    body: 'Walk away with a professional identity you can present to recruiters and hiring teams.',
  },
];

const WHY_POINTS = [
  {
    title: 'Made for freshers',
    body: 'Everything we do is designed for students with little or no formal experience — not adapted from corporate playbooks.',
  },
  {
    title: 'Practical, not theoretical',
    body: 'You finish with real deliverables: a working resume, an optimised profile, a live portfolio, a documented project.',
  },
  {
    title: 'Honest guidance',
    body: 'No inflated promises. We show you what employers look for and help you present your real abilities well.',
  },
  {
    title: 'Built around your story',
    body: 'Templates do not get interviews. We shape every document around your actual skills, projects and goals.',
  },
];

const BENEFITS = [
  'Stand out in a crowded fresher job market',
  'Present your skills the way employers read them',
  'Get noticed by recruiters on LinkedIn and Naukri',
  'Show real proof of ability through a portfolio',
  'Talk about your projects with confidence in interviews',
  'Build habits that carry through your whole career',
];

const STATS = [
  { value: '5', label: 'Focused services' },
  { value: '1:1', label: 'Guided, personal help' },
  { value: '100%', label: 'Student-first approach' },
];

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <path key="a" d="M7 4h8l4 4v12H7V4Zm8 0v4h4M10 13h6M10 17h4" />,
    <path key="b" d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-4 10c0-3 2-5 4-5s4 2 4 5M15 9l2 2 4-4M17 20h4" />,
    <path key="c" d="M5 4h14v16H5V4Zm3 4h8M8 12h8M8 16h5" />,
    <path key="d" d="M4 7h16v13H4V7Zm3-3h10v3H7V4Zm1 8h8M8 16h5" />,
    <path key="e" d="m9 6-5 6 5 6m6-12 5 6-5 6M13 4l-2 16" />,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <PageMeta
        title="InternTra — Build Your Professional Identity. Start Your Career Journey."
        description="InternTra helps college students and freshers build their professional identity through resumes, LinkedIn and Naukri profile optimisation, personal portfolios and industry-relevant project guidance."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(24,24,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,23,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
        <div aria-hidden="true" className="hero-cover absolute inset-x-0 top-0 h-[23rem] overflow-hidden sm:h-[28rem] lg:h-[34rem]">
          <img
            src="/images/interntra_platform_cover.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.14] mix-blend-multiply"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-100/25 via-paper-100/75 to-paper-100" />
        </div>
        <div className="container-site relative pb-20 pt-16 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <p className="eyebrow-line">Student Career Development Platform</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.6rem]">
                  Build Your Professional Identity.
                  <span className="block text-forest-600">Start Your Career Journey.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
                  From resumes to LinkedIn and Naukri profiles, personal portfolios and industry-relevant
                  projects, InternTra helps students take practical steps towards their careers.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link to="/services" className="btn-primary">
                    Explore Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get Started
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-200 pt-8">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <dt className="order-2 mt-1 text-xs text-ink-400">{stat.label}</dt>
                      <dd className="order-1 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* 3D layered panel */}
            <Reveal delay={200} direction="right" className="relative hidden lg:block">
              <div className="relative mx-auto w-full max-w-md" style={{ perspective: '1200px' }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-forest-200/60"
                />
                <div
                  className="relative rounded-3xl border border-ink-100 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(24,24,23,0.25)] transition-transform duration-500 hover:rotate-0"
                  style={{ transform: 'rotateY(-6deg) rotateX(4deg)' }}
                >
                  <div className="overflow-hidden rounded-2xl border border-ink-100 bg-paper-50">
                    <img
                      src="/images/career-launch.svg"
                      alt="A student preparing a resume and portfolio at a desk"
                      className="h-36 w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-display text-sm font-semibold text-ink-900">Your profile, upgraded</p>
                    <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[11px] font-semibold text-forest-700">
                      Fresher ready
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {['Resume', 'LinkedIn', 'Naukri', 'Portfolio', 'Projects'].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-ink-100 bg-paper-50 px-4 py-3 transition-transform duration-300 hover:translate-x-1"
                        style={{ transitionDelay: `${i * 20}ms` }}
                      >
                        <span className="text-sm font-medium text-ink-700">{item}</span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-forest-600">
                          <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-ink-950 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Career readiness</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-800">
                      <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-forest-500 to-forest-300" />
                    </div>
                    <p className="mt-2 text-xs text-ink-300">86% — interview ready</p>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-10 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-[0_16px_40px_-16px_rgba(24,24,23,0.3)] transition-transform duration-500 hover:-translate-y-1"
                  style={{ transform: 'rotateY(8deg) rotateX(2deg)' }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">Portfolio link</p>
                  <p className="mt-1 font-display text-sm font-semibold text-forest-700">yourname.portfolio</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-ink-200 bg-paper-200 py-4">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12" aria-hidden={copy === 1}>
              {['Resume Creation', 'LinkedIn Optimisation', 'Naukri Optimisation', 'Portfolio Creation', 'Project Guidance', 'Built for Freshers'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-3 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
                    {item}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal direction="left">
              <p className="eyebrow-line">Who we are</p>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
                A career partner for the class of now.
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-ink-500">
              <p>
                InternTra exists for the moment every student faces: graduation is close, the job
                market is competitive, and nobody ever taught you how to actually present yourself
                to it.
              </p>
              <p>
                We close that gap. Through five focused services — resume creation, LinkedIn and
                Naukri profile optimisation, portfolio building and industry-relevant project guidance — we help
                college students and freshers turn what they already know into a professional
                identity that gets taken seriously.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-forest-700 hover:text-forest-600">
                More about InternTra
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-y border-ink-200 bg-white py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we do</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
              Five services. One goal: employability.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Each service stands on its own, but together they form a complete professional identity.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <Link
                  to={`/services#${service.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-paper-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-[0_20px_48px_-20px_rgba(47,85,60,0.28)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-600 text-white transition-transform duration-300 group-hover:scale-105">
                      <ServiceIcon index={i} />
                    </span>
                    <span className="font-display text-sm font-bold text-ink-200 transition-colors group-hover:text-forest-300">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink-900">{service.shortName}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal direction="left">
              <p className="eyebrow-line">Why InternTra</p>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
                Built for the leap from classroom to career.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">
                We are not a course factory or a job board. We are the practical layer between
                what you learned in college and what employers expect to see.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {WHY_POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-ink-100 bg-white p-7 transition-colors duration-300 hover:border-forest-300">
                    <span className="font-display text-xs font-bold tracking-widest text-forest-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold text-ink-900">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-ink-200 bg-ink-950 py-20 text-white lg:py-28">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-forest-300">How it works</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
              From first message to first impression.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.step} className="bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800">
                <Reveal delay={i * 90}>
                  <span className="font-display text-3xl font-bold text-forest-400">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal direction="left">
              <p className="eyebrow-line">Student benefits</p>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
                What changes after InternTra.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
                The difference is not cosmetic. When your resume, profiles, portfolio and projects
                all tell the same strong story, opportunities start to open.
              </p>
              {/* 3D stack visual */}
              <div className="relative mt-10 hidden max-w-sm sm:block" style={{ perspective: '1000px' }}>
                <div className="space-y-3" style={{ transform: 'rotateY(-10deg) rotateX(6deg)', transformStyle: 'preserve-3d' }}>
                  {['Resume', 'LinkedIn', 'Naukri', 'Portfolio', 'Projects'].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-5 py-3.5 shadow-[0_8px_24px_-12px_rgba(24,24,23,0.25)] transition-transform duration-300 hover:translate-x-2"
                      style={{ transform: `translateZ(${(3 - i) * 14}px)` }}
                    >
                      <span className="font-display text-sm font-semibold text-ink-800">{item}</span>
                      <span className="h-2 w-2 rounded-full bg-forest-500" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit, i) => (
                <Reveal as="li" key={benefit} delay={i * 60}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-ink-100 bg-white p-5 transition-colors duration-300 hover:border-forest-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-600">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-ink-700">{benefit}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="border-t border-ink-200 bg-paper-200 py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow-line">Testimonials</p>
              <h2 className="mt-5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">Student voices.</h2>
            </div>
            <Link to="/testimonials" className="btn-secondary">
              View testimonials
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl border border-dashed border-ink-200 bg-white px-8 py-12 text-center">
              <p className="font-display text-lg font-semibold text-ink-800">Real student feedback is on its way.</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                We only publish genuine feedback from students we have worked with. Check back soon —
                or visit the testimonials page to learn more about our approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
