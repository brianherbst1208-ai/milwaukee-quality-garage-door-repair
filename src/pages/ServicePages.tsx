import { Wrench, Zap, ShieldCheck, ArrowRight, CheckCircle2, Clock, DollarSign, Phone } from 'lucide-react';
import { SERVICES, COMPANY, IMAGES } from '@/data/site';
import { Link } from '@/router';
import { PageHero, SectionHeading, CTASection } from '@/components/ui';

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Garage Door Services"
        subtitle="From a snapped spring to a full new-door installation, we handle every residential garage door need with honest pricing and quality workmanship."
        image={IMAGES.garageEvening}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.slug}
                className="group rounded-2xl bg-white ring-1 ring-ink-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <ServiceIcon slug={service.slug} />
                    </div>
                    <h2 className="text-xl font-bold text-ink-900">{service.title}</h2>
                  </div>
                  <p className="text-ink-600 leading-relaxed mb-5">{service.short}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-start gap-2 text-sm text-ink-700">
                        <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 shrink-0" />
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary-600 font-semibold hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us band */}
      <section className="py-16 bg-ink-50">
        <div className="container-page">
          <SectionHeading center eyebrow="Our Promise" title="What You Get With Every Service" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: 'Upfront Pricing', desc: 'Clear quotes before any work begins.' },
              { icon: Clock, title: 'Same-Day Service', desc: 'Fast response across the metro area.' },
              { icon: ShieldCheck, title: 'Quality Parts', desc: 'Durable components built to last.' },
              { icon: CheckCircle2, title: 'Safety Tested', desc: 'Every repair ends with a full safety check.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 ring-1 ring-ink-100 text-center">
                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                <p className="text-sm text-ink-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-ink-600">Service not found.</p>
        <Link to="/services" className="text-primary-600 font-semibold mt-4 inline-block">View all services</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        image={IMAGES.garageEvening}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Overview" title={`Professional ${service.title}`} />
              <div className="mt-6 space-y-5">
                {service.intro.map((p, i) => (
                  <p key={i} className="text-ink-600 text-lg leading-relaxed">{p}</p>
                ))}
              </div>

              {/* Features */}
              <h3 className="mt-14 text-2xl font-bold text-ink-900 mb-6">What We Handle</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {service.features.map((f) => (
                  <div key={f.title} className="flex gap-4 rounded-xl bg-ink-50 p-5">
                    <CheckCircle2 className="w-6 h-6 text-success-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-ink-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-ink-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - cost */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-ink-950 text-white p-7 shadow-xl">
                <h3 className="text-lg font-bold mb-1">Typical Pricing</h3>
                <p className="text-sm text-ink-400 mb-5">Estimates only — your final quote is confirmed on-site.</p>
                <div className="space-y-4">
                  {service.cost.map((c) => (
                    <div key={c.service} className="border-b border-white/10 pb-4 last:border-0">
                      <div className="text-sm text-ink-200 mb-1">{c.service}</div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{c.range}</span>
                        <span className="text-xs text-primary-300">avg {c.average}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="mt-6 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Call {COMPANY.phone}
                </a>
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-ink-50">
        <div className="container-page">
          <SectionHeading center eyebrow="Why Trust Us" title={`Why Choose Us for ${service.title}`} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.why.map((w, i) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 ring-1 ring-ink-100 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <h3 className="font-bold text-ink-900 mb-2">{w.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading center eyebrow="Our Process" title="How It Works" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((p, i) => (
              <div key={p.title} className="relative">
                <div className="text-5xl font-bold font-display text-primary-100 mb-3">{`0${i + 1}`}</div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{p.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  const icons: Record<string, React.ReactNode> = {
    'garage-door-repair': <Wrench className="w-7 h-7" strokeWidth={2} />,
    'garage-door-spring-repair': <Zap className="w-7 h-7" strokeWidth={2} />,
    'garage-door-opener-repair': <Wrench className="w-7 h-7" strokeWidth={2} />,
    'garage-door-installation': <ShieldCheck className="w-7 h-7" strokeWidth={2} />,
  };
  return <>{icons[slug] || <Wrench className="w-7 h-7" />}</>;
}
