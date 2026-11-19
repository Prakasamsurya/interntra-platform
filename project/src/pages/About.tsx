import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Eye, HeartHandshake, Target } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Student-first, always',
    body: 'Every recommendation we make starts from one question: what genuinely helps this student?',
  },
  {
    icon: Eye,
    title: 'Honesty over hype',
    body: 'We do not inflate achievements or promise outcomes we cannot deliver. We present real ability, well.',
  },
  {
    icon: Target,
    title: 'Practical by default',
    body: 'Advice that never turns into a finished resume, profile, portfolio or project is just talk. We deliver the artefact.',
  },
  {
    icon: Compass,
    title: 'Guidance that transfers',
    body: 'We teach students why their documents are structured the way they are, so the skill outlives the project.',
  },
];

const APPROACH = [
  {
    step: 'Listen first',
    body: 'Before writing a single word, we understand your background, your field and what you are actually aiming for.',
  },
  {
    step: 'Build together',
    body: 'Your documents are created with you, not handed to you. You understand every choice because you helped make it.',
  },
  {
    step: 'Refine to reality',
    body: 'We revise until every section is accurate, professional and ready for real recruiters — no filler, no fiction.',
  },
  {
    step: 'Prepare for the room',
    body: 'We finish by making sure you can speak confidently about everything your resume, profile and portfolio say.',
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us — InternTra"
        description="Learn about InternTra's story, mission, vision and core values — and why we focus on students and freshers entering the professional world."
      />

      {/* Page header */}
      <section className="border-b border-ink-200 bg-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow-line">About InternTra</p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
              We help students become professionals they are ready to be.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              InternTra is a student career development platform built around a simple observation:
              college prepares students with knowledge, but almost nobody teaches them how to
              present that knowledge to the professional world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="left">
              <h2 className="font-display text-3xl font-bold text-ink-950">Our story</h2>
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-ink-500">
              <p>
                InternTra began with a pattern every recruiter and senior student recognises: bright,
                capable students finishing college with real skills — and nothing that shows it. A
                resume copied from a template. A LinkedIn profile that was created once and never
                touched. Projects that were never documented, so all the work disappeared into a
                folder nobody opens.
              </p>
              <p>
                The gap was never talent. It was translation — turning effort into a professional
                identity that recruiters, hiring managers and networks can understand in seconds.
                InternTra was built to close that gap for students and freshers, one service at a
                time: resumes, LinkedIn and Naukri profiles, personal portfolios and industry-relevant projects.
              </p>
              <p>
                Today we work with college students, final-year students and recent graduates who
                want to enter the professional world with documents and projects that honestly
                reflect what they can do.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-ink-200 bg-white py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-forest-900 p-10 text-white lg:p-12">
                <Target className="h-8 w-8 text-forest-300" />
                <h2 className="mt-6 font-display text-2xl font-bold">Our mission</h2>
                <p className="mt-4 text-base leading-relaxed text-forest-100">
                  To help every student and fresher present their real abilities professionally —
                  through documents, profiles and projects that open doors rather than merely fill
                  requirements.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-ink-200 bg-paper-50 p-10 lg:p-12">
                <Eye className="h-8 w-8 text-forest-600" />
                <h2 className="mt-6 font-display text-2xl font-bold text-ink-950">Our vision</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  A generation of freshers who walk into their first opportunity on equal footing —
                  not because they had connections, but because someone showed them how the
                  professional world reads people, and helped them be read well.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-line">Core values</p>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              The principles behind every service.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="flex h-full gap-5 rounded-2xl border border-ink-100 bg-white p-8 transition-colors duration-300 hover:border-forest-300">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-600">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why freshers */}
      <section className="border-y border-ink-200 bg-ink-950 py-20 text-white lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal direction="left">
              <p className="eyebrow text-forest-300">Why we focus on freshers</p>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                The start of a career is where the difference is biggest.
              </h2>
            </Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-300">
              <Reveal delay={80}>
                <p>
                  Experienced professionals have track records. Freshers have potential — and
                  potential is invisible unless someone helps you package it. That makes the first
                  professional documents a student creates disproportionately important: they are
                  often the only evidence an employer will ever see.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Yet nearly all career support is aimed at people who already have experience.
                  Freshers get templates, generic advice and silence. We exist to be the opposite:
                  focused, patient, personal guidance at exactly the stage where a small amount of
                  help changes the whole trajectory.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  When a fresher learns how to present themselves well at twenty, that skill pays
                  forward through every role, application and transition for the rest of their career.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Our approach</p>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Personal, practical, step by step.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((phase, i) => (
              <Reveal as="li" key={phase.step} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-[0_16px_40px_-20px_rgba(47,85,60,0.25)]">
                  <span className="font-display text-4xl font-bold text-forest-100">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">{phase.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{phase.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              See how we help
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        heading="Let's build your professional identity together."
        body="Tell us about your background and goals, and we will help you take the next step with confidence."
      />
    </>
  );
}
