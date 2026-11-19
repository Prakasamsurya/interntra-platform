import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { Wordmark } from './Navbar';

const PAGE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              A student career development platform helping college students and freshers build
              their professional identity and take practical steps towards their careers.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-800 px-4 py-2 text-sm text-ink-200">
              <Mail className="h-4 w-4 text-forest-300" />
              <span>Reach out through our contact page — we reply to every message.</span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Pages</h3>
            <ul className="mt-5 space-y-3">
              {PAGE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-sm text-ink-200 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services navigation">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-ink-200 transition-colors hover:text-white"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {year} InternTra. Student career development platform.
          </p>
          <p className="text-xs text-ink-500">Built for students, freshers and recent graduates.</p>
        </div>
      </div>
    </footer>
  );
}
