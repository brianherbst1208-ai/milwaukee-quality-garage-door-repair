import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY, IMAGES } from '@/data/site';
import { PageHero } from '@/components/ui';
import { EstimateForm } from '@/components/EstimateForm';

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request a Free Estimate"
        subtitle="Call us for same-day service or send us a message — we'll get back to you within one business day."
        image={IMAGES.contact}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-ink-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-ink-500 font-medium">Phone</div>
                    <div className="text-lg font-bold text-ink-900 group-hover:text-primary-600 transition-colors">{COMPANY.phone}</div>
                    <div className="text-sm text-ink-500">Call for same-day service</div>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-ink-500 font-medium">Email</div>
                    <div className="text-base font-bold text-ink-900 group-hover:text-primary-600 transition-colors break-all">{COMPANY.email}</div>
                    <div className="text-sm text-ink-500">We reply within one business day</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                    <MapPin className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-ink-500 font-medium">Service Area</div>
                    <div className="text-lg font-bold text-ink-900">{COMPANY.serviceArea}</div>
                    <div className="text-sm text-ink-500">Milwaukee, Waukesha, West Allis, Wauwatosa, New Berlin, Brookfield</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                    <Clock className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-ink-500 font-medium mb-1">Hours</div>
                    {COMPANY.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-6 text-sm">
                        <span className="text-ink-700 font-medium">{h.day}</span>
                        <span className="text-ink-600">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-success-500/10 p-5 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-success-600 shrink-0" />
                <div>
                  <div className="font-bold text-ink-900">Licensed &amp; Insured</div>
                  <div className="text-sm text-ink-600">Your home is in safe, professional hands.</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white">
                  <MessageSquare className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ink-900">Request a Free Estimate</h2>
                  <p className="text-sm text-ink-500">Fill out the form and we'll be in touch shortly.</p>
                </div>
              </div>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-ink-50 pt-20">
      <div className="container-page max-w-2xl text-center py-20">
        <div className="mx-auto flex w-20 h-20 items-center justify-center rounded-full bg-success-500/10 mb-8 animate-fade-up">
          <svg className="w-11 h-11 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          Thank You!
        </h1>
        <p className="text-lg text-ink-600 leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Your estimate request has been received. One of our team members will reach out to you shortly. For urgent service, don&rsquo;t hesitate to call us directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg">
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call {COMPANY.phone}
          </a>
          <a href="/" className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-700 font-semibold ring-1 ring-primary-200 hover:bg-primary-50 transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
