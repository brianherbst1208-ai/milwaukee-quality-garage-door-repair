import { useEffect } from 'react';
import { COMPANY, SERVICES, FAQS } from '@/data/site';

const SITE_URL = 'https://madisonqualitygaragedoorrepair.com';

function injectScript(id: string, json: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(json);
  document.head.appendChild(script);
}

function removeScript(id: string) {
  document.getElementById(id)?.remove();
}

export function useServiceSchema(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (!service) return;
    injectScript('service-schema', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: COMPANY.serviceArea },
      url: `${SITE_URL}/services/${service.slug}`,
    });
    return () => removeScript('service-schema');
  }, [service]);
}

export function useFaqSchema() {
  useEffect(() => {
    injectScript('faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    return () => removeScript('faq-schema');
  }, []);
}

export function useBreadcrumbSchema(items: { label: string; path: string }[]) {
  useEffect(() => {
    injectScript('breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: `${SITE_URL}${item.path}`,
      })),
    });
    return () => removeScript('breadcrumb-schema');
  }, [items]);
}
