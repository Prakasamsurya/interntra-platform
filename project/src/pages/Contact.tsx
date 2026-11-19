import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, ArrowUpRight, CheckCircle2, Clock, Loader2, MapPin, Send } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import { SERVICE_OPTIONS } from '@/lib/services';
import { supabase } from '@/lib/supabase';

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL: FormValues = { name: '', email: '', service: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.service) {
    errors.service = 'Please choose a service.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please write at least a sentence about what you need.';
  }
  return errors;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

function ContactInfoRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-600">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-sm font-bold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-500">{body}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const preselected = params.get('service');
  const initialService = SERVICE_OPTIONS.find((s) => s === preselected);

  const [values, setValues] = useState<FormValues>({
    ...INITIAL,
    service: initialService ?? '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const setField = (field: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitState('submitting');
    const { error } = await supabase.from('contact_submissions').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      service: values.service,
      message: values.message.trim(),
    });

    if (error) {
      setSubmitState('error');
      return;
    }

    setSubmitState('success');
    setValues(INITIAL);
    setErrors({});
  };

  return (
    <>
      <PageMeta
        title="Contact Us — InternTra"
        description="Get in touch with InternTra. Tell us about your goals and which service you are interested in — we reply to every message."
      />

      <section className="border-b border-ink-200 bg-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow-line">Contact us</p>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
              Let's talk about your career.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Whether you know exactly which service you need or you are still figuring it out,
              send us a message. Every enquiry is read by a person, and we reply to every one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Info column */}
            <Reveal direction="left">
              <div className="space-y-8">
                <div className="space-y-6">
                  <ContactInfoRow
                    icon={<Send className="h-5 w-5" />}
                    title="Message us"
                    body="Use the form on this page. It is the fastest way to reach the team and the best way to make sure nothing gets lost."
                  />
                  <ContactInfoRow
                    icon={<Clock className="h-5 w-5" />}
                    title="Response time"
                    body="We typically reply within a couple of days. Every message gets a human reply — no auto-responses."
                  />
                  <ContactInfoRow
                    icon={<MapPin className="h-5 w-5" />}
                    title="Remote-first"
                    body="We work with students wherever they are. Everything happens online, on your schedule."
                  />
                </div>

                <div className="rounded-2xl bg-forest-900 p-8 text-white">
                  <h3 className="font-display text-lg font-bold">What to include</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-forest-100">
                    <li className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                      Your year of study or graduation status
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                      Which service interests you (or "not sure yet")
                    </li>
                    <li className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                      Anything you are aiming for — placements, internships, applications
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-medium text-ink-500">
                    No spam, ever
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-medium text-ink-500">
                    Your details stay private
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal direction="right" delay={100}>
              <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-[0_20px_56px_-28px_rgba(24,24,23,0.25)] sm:p-10">
                {submitState === 'success' ? (
                  <div className="flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-forest-50">
                      <CheckCircle2 className="h-8 w-8 text-forest-600" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold text-ink-950">Message sent.</h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
                      Thank you for reaching out. Your message has reached the InternTra team and we
                      will reply to the email you provided.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitState('idle')}
                      className="btn-secondary mt-8"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="field-label">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your full name"
                          value={values.name}
                          onChange={(e) => setField('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`field-input ${errors.name ? 'field-input-error' : ''}`}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="field-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={values.email}
                          onChange={(e) => setField('email', e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`field-input ${errors.email ? 'field-input-error' : ''}`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="service" className="field-label">
                        Which service are you interested in?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={(e) => setField('service', e.target.value)}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className={`field-input ${!values.service ? 'text-ink-400' : ''} ${
                          errors.service ? 'field-input-error' : ''
                        }`}
                      >
                        <option value="" disabled>
                          Choose a service…
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="text-ink-900">
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className="field-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your background and what you are aiming for…"
                        value={values.message}
                        onChange={(e) => setField('message', e.target.value)}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`field-input resize-y ${errors.message ? 'field-input-error' : ''}`}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitState === 'error' && (
                      <div
                        role="alert"
                        className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        <p className="text-sm leading-relaxed text-red-700">
                          Sorry, your message could not be sent right now. Please try again in a
                          moment — if the problem continues, reach out again shortly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="btn-primary mt-7 w-full sm:w-auto"
                    >
                      {submitState === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
