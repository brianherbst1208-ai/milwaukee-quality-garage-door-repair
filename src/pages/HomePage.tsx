import { Phone, Star, ShieldCheck, Clock, MapPin, Wrench, ChevronRight, ArrowRight, CheckCircle2, Zap, Award, Users } from 'lucide-react';
import { COMPANY, SERVICES, LOCATIONS, IMAGES } from '@/data/site';
import { Link } from '@/router';
import { SectionHeading } from '@/components/ui';

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <img src={IMAGES.heroHouse} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/60 to-transparent" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="container-page relative py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/15 ring-1 ring-primary-400/30 text-primary-300 text-sm font-medium mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              Same-Day Service Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] animate-fade-up" style={{ animationDelay: '0.05s' }}>
              Garage Door Repair Done{' '}
              <span className="text-primary-400">Right</span>, Done Fast.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Broken springs, stuck doors, dead openers, and new installations — serving homeowners throughout the {COMPANY.serviceArea} with honest pricing and quality workmanship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-all shadow-2xl shadow-primary-600/40 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {COMPANY.phone}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/30 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 text-ink-300">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by 500+ homeowners</span>
              </div>
              <div className="flex items-center gap-2 text-ink-300 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-success-500" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2 text-ink-300 text-sm font-medium">
                <Clock className="w-5 h-5 text-primary-400" />
                7 Days a Week
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="bg-primary-700 text-white">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '20+', label: 'Years Experience' },
              { icon: Users, value: '500+', label: 'Happy Customers' },
              { icon: Wrench, value: '5,000+', label: 'Doors Repaired' },
              { icon: MapPin, value: '6', label: 'Cities Served' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-8 h-8 text-primary-200 shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-2xl font-bold font-display">{stat.value}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-ink-50">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="What We Do"
            title="Complete Garage Door Services"
            subtitle="From a broken spring to a brand-new door, we handle every residential garage door need with care and expertise."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink-100 hover:shadow-xl hover:ring-primary-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-4">{service.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.technician} alt="Garage door technician at work" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl ring-1 ring-ink-100 p-6 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-success-500/10">
                    <Award className="w-7 h-7 text-success-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-ink-900">100%</div>
                    <div className="text-sm text-ink-500">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="A Team You Can Actually Trust"
                subtitle="We treat your home like ours — honest pricing, quality parts, and workmanship that lasts."
              />
              <div className="mt-8 space-y-5">
                {[
                  { icon: ShieldCheck, title: 'Upfront, Honest Pricing', desc: 'You get a clear price before any work begins. No surprise fees, no upselling.' },
                  { icon: Clock, title: 'Fast, Reliable Response', desc: 'Same-day service for most repairs. We respect your time and your schedule.' },
                  { icon: Wrench, title: 'Quality Parts & Workmanship', desc: 'Durable, correctly-rated replacement parts installed by experienced technicians.' },
                  { icon: CheckCircle2, title: 'Safety First, Always', desc: 'Every repair includes balance, auto-reverse, and safety sensor testing.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                      <item.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-ink-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-ink-50">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Where We Work"
            title="Proudly Serving the Milwaukee Metro"
            subtitle="Same reliable service across every community we serve."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/service-areas/${loc.slug}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100 hover:ring-primary-300 hover:shadow-lg transition-all"
              >
                <MapPin className="w-7 h-7 text-primary-500 group-hover:text-primary-600 group-hover:scale-110 transition-all" />
                <span className="font-semibold text-ink-800 group-hover:text-primary-700 transition-colors">{loc.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/service-areas" className="inline-flex items-center gap-1.5 text-primary-600 font-semibold hover:gap-2.5 transition-all">
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="How It Works"
            title="Simple, Stress-Free Service"
            subtitle="From the first call to the final test, we keep it straightforward."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Call or Request', desc: 'Reach out by phone or online. Tell us what\u2019s going on with your door.' },
              { step: '02', title: 'We Diagnose', desc: 'Our technician inspects the full system and identifies the real problem.' },
              { step: '03', title: 'Clear Quote', desc: 'You get an upfront price. No work starts until you approve.' },
              { step: '04', title: 'Fixed &amp; Tested', desc: 'We complete the repair and verify safe, smooth operation before leaving.' },
            ].map((p, i) => (
              <div key={p.step} className="relative animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-5xl font-bold font-display text-primary-100 mb-3">{p.step}</div>
                <h3 className="text-lg font-bold text-ink-900 mb-2" dangerouslySetInnerHTML={{ __html: p.title }} />
                <p className="text-sm text-ink-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-ink-200">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-page relative">
          <SectionHeading
            center
            light
            eyebrow="Customer Stories"
            title="What Our Neighbors Say"
            subtitle="Real feedback from homeowners across the Milwaukee Metro Area."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', city: 'Wauwatosa', text: 'My spring snapped on a Sunday morning. They came out within two hours and had it fixed by lunch. Fair price, no upsell. I\u2019ll never call anyone else.' },
              { name: 'James K.', city: 'Brookfield', text: 'The door was off its tracks and scraping. The tech was professional, explained everything, and got it running smoother than it ever has. Highly recommend.' },
              { name: 'Linda P.', city: 'West Allis', text: 'New garage door install was flawless. They helped me pick the right door for my home and budget. Clean work site, friendly crew, and it looks amazing.' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-7 backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-ink-200 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-ink-400">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container-page relative text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto">
            Your Garage Door Problem Has a Solution.
          </h2>
          <p className="mt-5 text-lg text-primary-100 max-w-xl mx-auto">
            Call now for same-day service, or request a free estimate online. We\u2019re ready to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-primary-700 font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Request Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
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
