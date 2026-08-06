import { Link } from '@/router';
import { ChevronRight, Phone } from 'lucide-react';
import { COMPANY } from '@/data/site';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({ eyebrow, title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-ink-950">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-ink-950 to-ink-950" />
      )}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container-page relative">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-sm text-ink-400 mb-6 animate-fade-in">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="hover:text-primary-400 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-ink-200">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="w-3.5 h-3.5" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3 animate-fade-up">{eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl animate-fade-up" style={{ animationDelay: '0.05s' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-ink-300 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center, light }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-primary-300' : 'text-primary-600'}`}>{eyebrow}</p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-ink-300' : 'text-ink-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <div className="container-page relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          {title || 'Ready to fix your garage door?'}
        </h2>
        <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
          {subtitle || 'Call now or request a free estimate online. Same-day service available.'}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Request Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
