import { useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage, ServiceDetailPage } from '@/pages/ServicePages';
import { ServiceAreasPage, LocationPage } from '@/pages/LocationPages';
import { AboutPage, MeetTheTeamPage, CareersPage, FaqPage } from '@/pages/InfoPages';
import { ContactPage, ThankYouPage } from '@/pages/ContactPage';
import { LegalPage } from '@/pages/LegalPages';

function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ink-50 pt-20">
      <div className="text-center px-6">
        <div className="text-7xl font-bold font-display text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-ink-900 mb-3">Page Not Found</h1>
        <p className="text-ink-600 mb-8">The page you're looking for doesn't exist or has moved.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
          Back to Home
        </a>
      </div>
    </section>
  );
}

function App() {
  const { path } = useRouter();

  let page: React.ReactNode;
  let isFullPage = false;

  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/services') {
    page = <ServicesPage />;
  } else if (path.startsWith('/services/')) {
    page = <ServiceDetailPage slug={path.replace('/services/', '')} />;
  } else if (path === '/service-areas') {
    page = <ServiceAreasPage />;
  } else if (path.startsWith('/service-areas/')) {
    page = <LocationPage slug={path.replace('/service-areas/', '')} />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/meet-the-team') {
    page = <MeetTheTeamPage />;
  } else if (path === '/careers') {
    page = <CareersPage />;
  } else if (path === '/faq') {
    page = <FaqPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else if (path === '/thank-you') {
    page = <ThankYouPage />;
    isFullPage = true;
  } else if (path === '/privacy-policy' || path === '/terms-conditions' || path === '/disclaimer' || path === '/accessibility' || path === '/complaints-policy' || path === '/referral-marketing-disclosure') {
    page = <LegalPage slug={path.replace('/', '')} />;
  } else {
    page = <NotFoundPage />;
  }

  if (isFullPage) {
    return (
      <div className="min-h-screen bg-white">
        {page}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

export default App;
