import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { SERVICES, LOCATIONS, COMPANY } from '@/data/site';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      service: String(data.get('service') || ''),
      location: String(data.get('location') || ''),
      message: String(data.get('message') || ''),
    };

    const { error } = await supabase.from('estimate_requests').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try calling us instead.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-ink-100 text-center animate-fade-in">
        <div className="mx-auto flex w-16 h-16 items-center justify-center rounded-full bg-success-500/10 mb-5">
          <CheckCircle2 className="w-9 h-9 text-success-600" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-bold text-ink-900 mb-2">Thank You!</h3>
        <p className="text-ink-600 mb-6">
          Your estimate request has been received. One of our team members will reach out shortly. For urgent service, call{' '}
          <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-primary-600 hover:text-primary-700">
            {COMPANY.phone}
          </a>.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-ink-100"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Full Name <span className="text-error-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Phone <span className="text-error-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(608) 555-0100"
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Email <span className="text-error-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Your City
          </label>
          <select
            id="location"
            name="location"
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
          >
            <option value="">Select your area</option>
            {LOCATIONS.map((l) => (
              <option key={l.slug} value={l.name}>{l.name}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Service Needed <span className="text-error-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-ink-700 mb-1.5">
            Describe the Problem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="My garage door won't open and I hear a loud clicking sound..."
            className="w-full rounded-xl border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-error-500/10 p-4 text-sm text-error-600">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" strokeWidth={2.2} />
            Request Free Estimate
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">
        We'll get back to you within one business day. Your information stays private.
      </p>
    </form>
  );
}
