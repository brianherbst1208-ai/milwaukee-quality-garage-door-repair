import { Wrench, ShieldCheck, Heart, Award, Users, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY, IMAGES, TEAM, FAQS } from '@/data/site';
import { Link } from '@/router';
import { PageHero, SectionHeading, CTASection } from '@/components/ui';
import { useFaqSchema } from '@/components/SeoSchema';

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Madison Quality Garage Doors"
        subtitle="Two decades of honest, reliable garage door service for homeowners across the Milwaukee Metro Area."
        image={IMAGES.modernHouse}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading eyebrow="Who We Are" title="A Local Company Built on Trust" />
              <div className="mt-6 space-y-5">
                <p className="text-ink-600 text-lg leading-relaxed">
                  Madison Quality Garage Door Repair started with one truck, one technician, and a simple promise: do the job right, charge a fair price, and treat every home like it&rsquo;s our own. Twenty years later, that promise still drives everything we do.
                </p>
                <p className="text-ink-600 text-lg leading-relaxed">
                  We&rsquo;ve grown from a one-person operation to a team of experienced technicians serving homeowners throughout the Milwaukee Metro Area — but we haven&rsquo;t lost the personal touch. When you call, you talk to a real person. When we show up, we show up on time. And when we finish, your door works.
                </p>
                <p className="text-ink-600 text-lg leading-relaxed">
                  We believe garage door repair shouldn&rsquo;t be complicated or overpriced. You deserve honest answers, quality parts, and workmanship that lasts. That&rsquo;s what we deliver, every single time.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.technician} alt="Our team at work" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl ring-1 ring-ink-100 p-6 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50">
                    <Award className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-ink-900">20+</div>
                    <div className="text-sm text-ink-500">Years Serving Milwaukee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ink-50">
        <div className="container-page">
          <SectionHeading center eyebrow="What Drives Us" title="Our Core Values" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Honesty', desc: 'We tell you what your door needs — and what it doesn&rsquo;t. No upselling, no invented problems.' },
              { icon: Wrench, title: 'Quality', desc: 'Correctly rated parts and careful workmanship. Repairs that last, not quick fixes.' },
              { icon: Clock, title: 'Reliability', desc: 'We show up when we say we will. On time, every time, with same-day service available.' },
              { icon: Heart, title: 'Respect', desc: 'Your home, your time, and your budget matter. We treat all three with care.' },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 ring-1 ring-ink-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5">
                  <v.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-ink-900 mb-2">{v.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Years in Business' },
              { value: '5,000+', label: 'Doors Repaired' },
              { value: '500+', label: '5-Star Reviews' },
              { value: '6', label: 'Cities Served' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-bold font-display">{s.value}</div>
                <div className="mt-1 text-primary-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The People Behind the Work"
        title="Meet the Team"
        subtitle="Experienced, friendly, and dedicated to getting your garage door working right."
        image={IMAGES.modernHouse}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Meet the Team' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={member.name} className="group text-center animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="relative mx-auto w-44 h-44 rounded-2xl overflow-hidden shadow-lg mb-5 ring-4 ring-ink-50 group-hover:ring-primary-100 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <span className="text-5xl font-bold font-display text-white">{member.initials}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ink-900">{member.name}</h3>
                <p className="text-sm font-semibold text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-ink-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at Madison Quality Garage Doors"
        subtitle="We're always looking for skilled, reliable people who take pride in their work."
        image={IMAGES.modernHouse}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Careers' }]}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading eyebrow="Why Work Here" title="A Company That Values Its People" />
              <p className="mt-5 text-ink-600 text-lg leading-relaxed">
                We&rsquo;ve built our reputation on quality work and honest service — and that starts with how we treat our team. We offer competitive pay, consistent work, and a culture where your skills are respected.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Competitive hourly pay with overtime opportunities',
                  'Company vehicle for field technicians',
                  'Health insurance and paid time off',
                  'Ongoing training and skill development',
                  'Supportive, respectful team environment',
                  'Real opportunity for advancement',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 shrink-0" />
                    <span className="text-ink-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Open Positions" title="Current Openings" />
              <div className="mt-6 space-y-4">
                {[
                  { title: 'Garage Door Repair Technician', type: 'Full-Time', desc: 'Experienced technician for residential repair and service calls across the metro area.' },
                  { title: 'Installation Specialist', type: 'Full-Time', desc: 'Lead new garage door installations from measurement to final inspection.' },
                  { title: 'Service Coordinator', type: 'Full-Time', desc: 'Schedule dispatch, coordinate technicians, and be the friendly voice customers hear first.' },
                ].map((job) => (
                  <div key={job.title} className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 hover:ring-primary-200 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-ink-900">{job.title}</h3>
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full whitespace-nowrap">{job.type}</span>
                    </div>
                    <p className="text-sm text-ink-600 leading-relaxed mb-4">{job.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:gap-2.5 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-ink-500">
                Don&rsquo;t see a fit? Send us your resume anyway — we&rsquo;re always interested in meeting good people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Join the Team?" subtitle="Call us or send a message through our contact page to apply." />
    </>
  );
}

export function FaqPage() {
  useFaqSchema();
  return (
    <>
      <PageHero
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        subtitle="Straight answers to the things homeowners ask us most."
        image={IMAGES.garageEvening}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-ink-900">{faq.q}</h3>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 shrink-0 group-open:bg-primary-600 group-open:text-white transition-colors">
                    <svg className="w-4 h-4 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-ink-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl font-bold text-ink-900 mb-2">Still Have Questions?</h3>
            <p className="text-ink-600 mb-5">We&rsquo;re happy to help. Give us a call or send a message.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
              <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-semibold ring-1 ring-primary-200 hover:bg-primary-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


