import { COMPANY } from '@/data/site';
import { PageHero } from '@/components/ui';

interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface LegalDoc {
  title: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
}

const DOCS: Record<string, LegalDoc> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    eyebrow: 'Your Privacy',
    intro: `This Privacy Policy explains how ${COMPANY.name} ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website or use our services. We are committed to safeguarding your privacy and being transparent about how your data is handled.`,
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: ['We collect information you provide directly to us, such as when you request an estimate, contact us, or schedule service. This may include:'],
        list: ['Your name, email address, and phone number', 'Your service address and location', 'Details about your garage door issue or service request', 'Any messages or notes you share with us'],
      },
      {
        heading: 'How We Use Your Information',
        paragraphs: ['We use the information we collect to:'],
        list: ['Respond to your inquiries and schedule service appointments', 'Provide repair, installation, and maintenance services', 'Send you service-related communications and follow-ups', 'Improve our website, services, and customer experience', 'Comply with legal obligations'],
      },
      {
        heading: 'Information Sharing',
        paragraphs: ['We do not sell, trade, or rent your personal information to third parties. We may share your information with service partners who help us operate our business (such as scheduling or payment processors), only to the extent necessary, and under appropriate confidentiality obligations. We may also disclose information when required by law.'],
      },
      {
        heading: 'Data Security',
        paragraphs: ['We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'],
      },
      {
        heading: 'Cookies and Analytics',
        paragraphs: ['Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings, but disabling them may affect website functionality.'],
      },
      {
        heading: 'Your Rights',
        paragraphs: ['You have the right to access, correct, or request deletion of your personal information. You may also opt out of receiving marketing communications at any time. To exercise these rights, contact us using the information below.'],
      },
      {
        heading: 'Changes to This Policy',
        paragraphs: ['We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`If you have questions about this Privacy Policy or how we handle your information, please contact us at ${COMPANY.email} or call ${COMPANY.phone}.`],
      },
    ],
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    eyebrow: 'Terms of Use',
    intro: `These Terms and Conditions govern your use of the ${COMPANY.name} website and services. By accessing our website or engaging our services, you agree to these terms. Please read them carefully.`,
    sections: [
      {
        heading: 'Services',
        paragraphs: ['We provide residential garage door repair, spring replacement, opener repair, and installation services throughout the Milwaukee Metro Area. All services are subject to availability and scheduling. Specific service details, pricing, and warranties will be confirmed in writing or verbally before work begins.'],
      },
      {
        heading: 'Estimates and Pricing',
        paragraphs: ['Estimates provided through our website or by phone are approximate and based on the information you provide. Final pricing is confirmed after an on-site inspection. A standard diagnostic service-call fee may apply. Any approved repair work is subject to the quoted price before work begins.'],
      },
      {
        heading: 'Appointments and Cancellations',
        paragraphs: ['We strive to arrive within the scheduled service window. If we are delayed, we will notify you. Appointments may be rescheduled or canceled by either party with reasonable notice. Repeated no-shows or late cancellations may be subject to a fee at our discretion.'],
      },
      {
        heading: 'Warranties',
        paragraphs: ['Repair workmanship is covered by a limited warranty, the terms of which will be provided before service begins. Replacement parts are covered by the applicable manufacturer warranty. Warranties do not cover damage caused by misuse, neglect, accidents, or unauthorized modifications.'],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: ['To the fullest extent permitted by law, our liability for any claim arising from our services is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.'],
      },
      {
        heading: 'Website Use',
        paragraphs: ['You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You may not attempt to disrupt, hack, or gain unauthorized access to any part of the website. All content on this site is owned by us and may not be reproduced without permission.'],
      },
      {
        heading: 'Third-Party Links',
        paragraphs: ['Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of those sites. Visiting linked sites is at your own risk.'],
      },
      {
        heading: 'Changes to These Terms',
        paragraphs: ['We may revise these Terms and Conditions at any time. Updates will be posted on this page. Continued use of our website or services after changes constitutes acceptance of the updated terms.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`For questions about these Terms and Conditions, contact us at ${COMPANY.email} or call ${COMPANY.phone}.`],
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    eyebrow: 'Disclaimer',
    intro: `The information provided by ${COMPANY.name} on this website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding its accuracy, adequacy, validity, reliability, or completeness.`,
    sections: [
      {
        heading: 'No Professional Advice',
        paragraphs: ['The content on this website is not intended to be a substitute for professional advice. Garage door systems involve significant tension and weight and can be dangerous. You should not attempt repairs yourself. Always consult a qualified technician for diagnosis and repair.'],
      },
      {
        heading: 'External Links',
        paragraphs: ['Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.'],
      },
      {
        heading: 'Service Area Disclaimer',
        paragraphs: ['We are a service-area business serving the Milwaukee Metro Area. We do not operate a staffed office open to the public. All service is provided at the customer\u2019s location by appointment.'],
      },
      {
        heading: 'Pricing Disclaimer',
        paragraphs: ['Any pricing information provided on this website is for general reference only and does not constitute a binding quote. Actual prices may vary based on the specific conditions of your garage door system, parts required, and labor involved. A firm price is provided before any work begins.'],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: ['Under no circumstances shall we be liable for any loss or damage of any kind incurred as a result of the use of this website or reliance on any information provided. Your use of the website and our services is at your own risk.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`If you have questions about this disclaimer, contact us at ${COMPANY.email} or call ${COMPANY.phone}.`],
      },
    ],
  },
  accessibility: {
    title: 'Accessibility Statement',
    eyebrow: 'Accessibility',
    intro: `${COMPANY.name} is committed to ensuring digital accessibility for everyone, including people with disabilities. We are continuously improving the user experience for everyone and applying relevant accessibility standards.`,
    sections: [
      {
        heading: 'Our Commitment',
        paragraphs: ['We strive to make our website accessible to the widest possible audience, regardless of ability or technology. We aim to comply with the applicable accessibility standards, including WCAG 2.1 guidelines, to ensure a positive experience for all visitors.'],
      },
      {
        heading: 'Measures We Take',
        paragraphs: ['To support accessibility, we:'],
        list: ['Use clear, readable typography with sufficient color contrast', 'Structure pages with proper headings for screen reader navigation', 'Provide descriptive text alternatives for images where appropriate', 'Ensure keyboard navigability for interactive elements', 'Design responsive layouts that work across devices and screen sizes'],
      },
      {
        heading: 'Ongoing Efforts',
        paragraphs: ['Accessibility is an ongoing effort. We regularly review our website and welcome feedback on how we can improve. If you encounter any accessibility barriers, please let us know so we can address them.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`If you have difficulty accessing any part of our website or have suggestions for improvement, please contact us at ${COMPANY.email} or call ${COMPANY.phone}. We are committed to providing accessible service to all members of our community.`],
      },
    ],
  },
  'complaints-policy': {
    title: 'Complaints Policy',
    eyebrow: 'Customer Care',
    intro: `${COMPANY.name} is committed to providing high-quality service and ensuring every customer is satisfied. We take complaints seriously and use them as an opportunity to improve. This policy outlines how to raise a complaint and how we will handle it.`,
    sections: [
      {
        heading: 'How to Submit a Complaint',
        paragraphs: ['If you are unhappy with any aspect of our service, please let us know. You can submit a complaint by:'],
        list: [`Calling us at ${COMPANY.phone}`, `Emailing us at ${COMPANY.email}`, 'Using the contact form on our website', 'Speaking directly with your service technician or our office staff'],
      },
      {
        heading: 'What to Include',
        paragraphs: ['To help us resolve your complaint quickly, please provide:'],
        list: ['Your name and contact information', 'The date and location of the service', 'A description of the issue or concern', 'Any relevant photos, receipts, or documentation'],
      },
      {
        heading: 'Our Response Process',
        paragraphs: ['Once we receive your complaint:'],
        list: ['We will acknowledge receipt within one business day', 'A manager will review the details and investigate the concern', 'We will work to provide a resolution within five business days', 'If more time is needed, we will keep you informed of progress'],
      },
      {
        heading: 'Resolution',
        paragraphs: ['We aim to resolve every complaint fairly and promptly. Depending on the circumstances, a resolution may include a correction of the work, a partial or full refund, or another remedy agreed upon with you. Our goal is to make it right.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`For any complaint or concern, please reach out to us at ${COMPANY.email} or call ${COMPANY.phone}. We value your feedback and are committed to your satisfaction.`],
      },
    ],
  },
  'referral-marketing-disclosure': {
    title: 'Referral Marketing Disclosure',
    eyebrow: 'Transparency',
    intro: `${COMPANY.name} believes in transparency about how we market our services. This disclosure explains our referral and marketing practices so you can make informed decisions.`,
    sections: [
      {
        heading: 'Referral Relationships',
        paragraphs: ['From time to time, we may partner with other businesses, websites, or individuals who refer customers to us. These partners may receive compensation or other consideration for referrals. Any such arrangement does not affect the price you pay for our services.'],
      },
      {
        heading: 'Compensation Disclosure',
        paragraphs: ['Some links or referrals on our website or in our marketing materials may be part of a paid or compensated arrangement. Where this applies, we disclose it so you are aware. Our recommendations are based on our professional judgment and the needs of the customer.'],
      },
      {
        heading: 'Independent Service Provider',
        paragraphs: ['We are an independent, locally operated garage door service company. We are not affiliated with, endorsed by, or a representative of any garage door manufacturer unless explicitly stated. Any brand names mentioned are trademarks of their respective owners and are used for identification purposes only.'],
      },
      {
        heading: 'No Guarantee of Results',
        paragraphs: ['While we stand behind the quality of our work, individual results may vary depending on the condition of your garage door system, environmental factors, and usage patterns. No content on this website should be interpreted as a guarantee of specific outcomes.'],
      },
      {
        heading: 'Contact Us',
        paragraphs: [`If you have questions about our referral or marketing practices, contact us at ${COMPANY.email} or call ${COMPANY.phone}.`],
      },
    ],
  },
};

export function LegalPage({ slug }: { slug: string }) {
  const doc = DOCS[slug];

  if (!doc) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-ink-600">Page not found.</p>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: doc.title }]}
      />
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-page max-w-3xl">
          <p className="text-lg text-ink-600 leading-relaxed mb-10">{doc.intro}</p>
          <div className="space-y-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-ink-900 mb-3">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-ink-600 leading-relaxed mb-3">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-600">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 pt-8 border-t border-ink-100 text-sm text-ink-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </section>
    </>
  );
}
