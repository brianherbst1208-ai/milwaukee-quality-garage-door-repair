import { Phone, Mail, MapPin, Clock, Wrench, Shield, ChevronRight } from 'lucide-react';
import { COMPANY, SERVICES, LOCATIONS } from '@/data/site';
import { Link } from '@/router';

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      {/* CTA bar */}
      <div className="border-b border-white/10">
        <div className="container-page py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Need a repair today?</h2>
              <p className="text-ink-400">Same-day service available across the Milwaukee Metro Area.</p>
            </div>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4" ariaLabel="Home">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-600 text-white">
                <Wrench className="w-6 h-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-white">Madison Quality</span>
                <span className="text-[11px] font-medium tracking-wide uppercase text-ink-400">Garage Door Repair</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed mb-5">
              Reliable garage door repair, installation, and opener service for homeowners throughout the {COMPANY.serviceArea}.
            </p>
            <div className="flex items-center gap-2 text-sm text-ink-400">
              <Shield className="w-4 h-4 text-primary-400" />
              Licensed &amp; Insured
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-ink-400 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-ink-400 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link to={`/service-areas/${l.slug}`} className="text-sm text-ink-400 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm text-ink-400 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get In Touch</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-3 text-ink-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-ink-400 hover:text-primary-400 transition-colors break-all">
                  <Mail className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                {COMPANY.serviceArea}
              </li>
              <li className="flex items-start gap-3 text-ink-400">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>
                  {COMPANY.hours.map((h) => (
                    <span key={h.day} className="block">
                      <span className="text-ink-300">{h.day}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-500">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link to="/privacy-policy" className="hover:text-ink-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-ink-300 transition-colors">Terms &amp; Conditions</Link>
              <Link to="/accessibility" className="hover:text-ink-300 transition-colors">Accessibility</Link>
              <Link to="/disclaimer" className="hover:text-ink-300 transition-colors">Disclaimer</Link>
              <Link to="/referral-marketing-disclosure" className="hover:text-ink-300 transition-colors">Referral Disclosure</Link>
              <Link to="/complaints-policy" className="hover:text-ink-300 transition-colors">Complaints</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
