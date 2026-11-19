import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 ${dark ? 'ring-white/10' : ''}`}>
      <img
        src="/images/1767462887129.jpg"
        alt="InternTra"
        className="h-11 w-11 rounded-lg object-contain sm:h-12 sm:w-12"
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-ink-100 bg-paper-100/95 shadow-[0_1px_12px_rgba(24,24,23,0.06)] backdrop-blur'
          : 'border-transparent bg-paper-100'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link to="/" aria-label="InternTra home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-forest-700' : 'text-ink-500 hover:text-ink-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-forest-600 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 bg-white text-ink-800 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-paper-100 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="container-site flex h-full flex-col pt-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} style={{ transitionDelay: `${i * 40}ms` }}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-ink-100 py-4 font-display text-2xl font-semibold transition-colors ${
                      isActive ? 'text-forest-700' : 'text-ink-900'
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight className="h-5 w-5 text-ink-300" />
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-8 w-full">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Wordmark };
