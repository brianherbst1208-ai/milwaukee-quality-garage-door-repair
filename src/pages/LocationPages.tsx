import { MapPin, ArrowRight, CheckCircle2, Phone, Clock, ShieldCheck } from 'lucide-react';
import { LOCATIONS, COMPANY, SERVICES, IMAGES } from '@/data/site';
import { Link } from '@/router';
import { PageHero, SectionHeading, CTASection } from '@/components/ui';

export function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Milwaukee Metro Service Areas"
        subtitle="Same reliable garage door repair, installation, and opener service across every community we serve."
        image={IMAGES.suburbanGarage}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <Link
                key={loc.slug}
                to={`/service-areas/${loc.slug}`}
                className="group rounded-2xl bg-white ring-1 ring-ink-100 shadow-sm hover:shadow-xl hover:ring-primary-200 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-bold text-ink-900 group-hover:text-primary-700 transition-colors">{loc.name}</h2>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-5 line-clamp-3">{loc.lead}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                    View {loc.name} Page
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function LocationPage({ slug }: { slug: string }) {
  const loc = LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-ink-600">Service area not found.</p>
        <Link to="/service-areas" className="text-primary-600 font-semibold mt-4 inline-block">View all service areas</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={loc.eyebrow}
        title={loc.heading}
        subtitle={`Professional garage door repair, spring replacement, opener repair, and installation in ${loc.name}, Wisconsin.`}
        image={IMAGES.suburbanGarage}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Service Areas', to: '/service-areas' }, { label: loc.name }]}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow={loc.name} title={`Reliable Garage Door Service in ${loc.name}`} />
              <div className="mt-6 space-y-5">
                <p className="text-ink-600 text-lg leading-relaxed">{loc.lead}</p>
                <p className="text-ink-600 text-lg leading-relaxed">
                  Whether your door won&rsquo;t open, a spring has snapped, your opener is malfunctioning, or you&rsquo;re ready for a new door entirely, our experienced technicians deliver repairs and installations built to last. We serve the entire {loc.name} community with prompt, professional service.
                </p>
              </div>

              <h3 className="mt-12 text-2xl font-bold text-ink-900 mb-6">Why {loc.name} Homeowners Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {loc.why.map((w) => (
                  <div key={w.title} className="flex gap-4 rounded-xl bg-ink-50 p-5">
                    <CheckCircle2 className="w-6 h-6 text-success-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-ink-900 mb-1">{w.title}</h4>
                      <p className="text-sm text-ink-600 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services in this area */}
              <h3 className="mt-12 text-2xl font-bold text-ink-900 mb-6">Services Available in {loc.name}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl bg-white ring-1 ring-ink-100 p-4 hover:ring-primary-200 hover:shadow-sm transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-ink-800 group-hover:text-primary-700 transition-colors">{s.title}</span>
                    <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-primary-600 ml-auto transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl bg-ink-950 text-white p-7 shadow-xl">
                  <h3 className="text-lg font-bold mb-4">Need Service in {loc.name}?</h3>
                  <p className="text-sm text-ink-300 mb-5">Call now for same-day service or request a free estimate online.</p>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors mb-3"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors"
                  >
                    Get Free Estimate
                  </Link>
                </div>

                <div className="rounded-2xl bg-ink-50 p-7">
                  <h3 className="font-bold text-ink-900 mb-4">Service Hours</h3>
                  <ul className="space-y-3">
                    {COMPANY.hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm">
                        <span className="text-ink-600">{h.day}</span>
                        <span className="text-ink-800 font-medium text-right">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-5 border-t border-ink-200 flex items-center gap-2 text-sm text-ink-600">
                    <ShieldCheck className="w-5 h-5 text-success-600" />
                    Licensed &amp; Insured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Garage Door Repair in ${loc.name}? We're Ready.`} />
    </>
  );
}
