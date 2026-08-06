import { useEffect, useState } from 'react';
import { Phone, Menu, X, ChevronDown, Wrench } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/site';
import { Link } from '@/router';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,34,71,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" ariaLabel="Home">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors ${scrolled ? 'text-ink-900' : 'text-white'}`}>
                Madison Quality
              </span>
              <span className={`text-[11px] font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-ink-500' : 'text-white/70'}`}>
                Garage Door Repair
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      scrolled ? 'text-ink-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-72">
                      <div className="bg-white rounded-xl shadow-xl ring-1 ring-ink-100 p-2 animate-fade-in">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 rounded-lg text-sm text-ink-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled ? 'text-ink-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
                  : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 ring-1 ring-white/30'
              }`}
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {COMPANY.phone}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-ink-800' : 'text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink-950/40 backdrop-blur-sm animate-fade-in" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-lg text-ink-900">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg text-ink-600 hover:bg-ink-50" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-ink-800 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l-2 border-ink-100 pl-2 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 rounded-lg text-sm text-ink-600 hover:bg-primary-50 hover:text-primary-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
