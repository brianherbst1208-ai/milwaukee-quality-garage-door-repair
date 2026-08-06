export const COMPANY = {
  name: 'Madison Quality Garage Door Repair',
  shortName: 'Madison Quality Garage Doors',
  phone: '(608) 504-8245',
  phoneRaw: '6085048245',
  email: 'service@madisonqualitygaragedoorrepair.com',
  serviceArea: 'Milwaukee Metro Area',
  tagline: 'Reliable garage door repair, installation & opener service.',
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Emergency service only' },
  ],
};

export type ServiceSlug = 'garage-door-repair' | 'garage-door-spring-repair' | 'garage-door-opener-repair' | 'garage-door-installation';

export interface ServiceInfo {
  slug: ServiceSlug;
  title: string;
  short: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  metaDescription: string;
  intro: string[];
  features: { title: string; desc: string }[];
  cost: { service: string; range: string; average: string }[];
  why: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair',
    short: 'Broken springs, cables, rollers, tracks, panels and more — diagnosed and fixed fast.',
    heroEyebrow: 'Same-Day Service Available',
    heroTitle: 'Garage Door Repair',
    heroSubtitle: 'Fast, dependable repairs that restore safe, reliable operation to your home.',
    metaDescription: 'Professional garage door repair throughout the Milwaukee Metro Area — broken springs, cables, rollers, tracks, panels, and opener issues.',
    intro: [
      'A malfunctioning garage door is more than an inconvenience — it can lock you out of your home, compromise your security, and create a safety hazard for your family. Our experienced technicians arrive ready to diagnose the problem quickly and complete lasting repairs using quality replacement parts.',
      'From doors that won\u2019t open or close to noisy operation, off-track doors, and damaged panels, we handle virtually every residential garage door issue. We focus on identifying the underlying cause so your repair lasts, not just a temporary fix.',
    ],
    features: [
      { title: 'Broken Spring Replacement', desc: 'Torsion and extension springs sized and replaced to manufacturer specs.' },
      { title: 'Cable & Roller Repair', desc: 'Frayed cables and worn rollers replaced to restore smooth, quiet operation.' },
      { title: 'Off-Track Door Service', desc: 'Doors safely realigned and rehung with damaged hardware replaced.' },
      { title: 'Panel & Section Replacement', desc: 'Dented or damaged sections matched and replaced where possible.' },
      { title: 'Track & Hinge Repair', desc: 'Bent tracks straightened and worn hinges replaced for proper travel.' },
      { title: 'Weather Seal Replacement', desc: 'New bottom seals and weatherstripping to keep out drafts and water.' },
    ],
    cost: [
      { service: 'Diagnostic Service Call', range: '$75 – $125', average: '$95' },
      { service: 'Spring Replacement', range: '$150 – $350', average: '$245' },
      { service: 'Cable Replacement', range: '$130 – $260', average: '$190' },
      { service: 'Roller Replacement', range: '$120 – $240', average: '$175' },
      { service: 'Track Realignment', range: '$130 – $280', average: '$200' },
    ],
    why: [
      { title: 'Experienced Technicians', desc: 'Skilled professionals with extensive residential garage door experience.' },
      { title: 'Quality Components', desc: 'Durable replacement parts selected for reliable long-term performance.' },
      { title: 'Upfront Pricing', desc: 'Clear, honest estimates before any work begins — no surprises.' },
      { title: 'Safety First', desc: 'Every repair includes testing of balance, auto-reverse, and safety sensors.' },
    ],
    process: [
      { title: 'Inspect', desc: 'Full system inspection to identify the true cause of the problem.' },
      { title: 'Quote', desc: 'Clear, upfront estimate so you know the cost before we start.' },
      { title: 'Repair', desc: 'Quality parts and careful workmanship to restore reliable operation.' },
      { title: 'Test', desc: 'We verify balance, safety reversal, and smooth travel before we leave.' },
    ],
  },
  {
    slug: 'garage-door-spring-repair',
    title: 'Garage Door Spring Repair',
    short: 'Torsion and extension spring replacement sized and installed to spec.',
    heroEyebrow: 'Spring Specialists',
    heroTitle: 'Garage Door Spring Repair',
    heroSubtitle: 'Broken springs replaced right the first time with durable, correctly-rated parts.',
    metaDescription: 'Garage door torsion and extension spring replacement throughout Milwaukee. Fast, safe, and rated to your door\u2019s weight.',
    intro: [
      'The springs do the heavy lifting on your garage door — when one breaks, the door becomes dangerous and nearly impossible to open by hand. A loud bang from the garage and a door that won\u2019t budge are the most common signs of a broken spring.',
      'Our technicians replace both torsion and extension springs using parts correctly rated for your door\u2019s weight and size. We never reuse a single spring when the pair has aged together — replacing both ensures balanced, even operation and prevents a second failure soon after.',
    ],
    features: [
      { title: 'Torsion Spring Replacement', desc: 'Properly sized torsion springs mounted and tensioned to spec.' },
      { title: 'Extension Spring Replacement', desc: 'Galvanized extension springs with safety cables installed.' },
      { title: 'Spring Pair Replacement', desc: 'Both springs replaced together for balanced, even wear.' },
      { title: 'Cycle-Rated Springs', desc: 'High-cycle springs that last tens of thousands of open/close cycles.' },
      { title: 'Bearing & Drums Inspection', desc: 'We check cables, drums, and center bearings while we\u2019re there.' },
      { title: 'Balance Adjustment', desc: 'Door balanced so the opener works less and lasts longer.' },
    ],
    cost: [
      { service: 'Torsion Spring (single)', range: '$150 – $250', average: '$195' },
      { service: 'Torsion Spring Pair', range: '$200 – $400', average: '$295' },
      { service: 'Extension Spring Pair', range: '$130 – $260', average: '$190' },
      { service: 'High-Cycle Upgrade', range: '+$40 – $90', average: '+$60' },
    ],
    why: [
      { title: 'Correctly Rated Springs', desc: 'Springs matched to your door\u2019s weight — not a one-size guess.' },
      { title: 'Replace Both, Not One', desc: 'We replace the pair so the door stays balanced and safe.' },
      { title: 'High-Cycle Options', desc: 'Upgrade to springs rated for more years of daily use.' },
      { title: 'Complete Safety Check', desc: 'Cables, bearings, and opener force all verified after repair.' },
    ],
    process: [
      { title: 'Assess', desc: 'Weigh and measure the door to determine the correct spring.' },
      { title: 'Remove', desc: 'Safely unwind and remove the broken spring(s).' },
      { title: 'Install', desc: 'New springs mounted, tensioned, and balanced to spec.' },
      { title: 'Verify', desc: 'Test balance, travel, and auto-reverse before we leave.' },
    ],
  },
  {
    slug: 'garage-door-opener-repair',
    title: 'Garage Door Opener Repair',
    short: 'Opener diagnostics, gear replacement, remotes, keypads, and safety sensors.',
    heroEyebrow: 'Opener Repair Experts',
    heroTitle: 'Garage Door Opener Repair',
    heroSubtitle: 'Get your opener working again — diagnostics, repair, and replacement.',
    metaDescription: 'Garage door opener troubleshooting, repair, replacement, remote programming, and safety sensor service throughout Milwaukee.',
    intro: [
      'Garage door opener problems can leave your vehicle trapped inside the garage or prevent secure access to your home. Whether the opener hums without moving the door, stops halfway, refuses to respond to the remote, or operates inconsistently, our technicians can identify the cause and recommend the right solution.',
      'We repair and service most major opener brands, replacing worn components whenever practical and recommending replacement only when it provides better long-term value.',
    ],
    features: [
      { title: 'Motor Diagnostics', desc: 'Identify electrical or mechanical motor failures.' },
      { title: 'Remote Programming', desc: 'Program replacement remotes and wireless keypads.' },
      { title: 'Safety Sensor Repair', desc: 'Restore proper operation of photo-eye safety sensors.' },
      { title: 'Gear Replacement', desc: 'Replace worn drive gears and internal opener components.' },
      { title: 'Wall Control Repair', desc: 'Repair or replace faulty wall-mounted control stations.' },
      { title: 'Opener Replacement', desc: 'New opener selection and professional installation.' },
    ],
    cost: [
      { service: 'Diagnostic Service', range: '$100 – $175', average: '$135' },
      { service: 'Sensor Repair', range: '$150 – $275', average: '$210' },
      { service: 'Gear Replacement', range: '$200 – $350', average: '$275' },
      { service: 'New Opener Installation', range: '$450 – $900', average: '$650' },
    ],
    why: [
      { title: 'Experienced Troubleshooting', desc: 'We diagnose opener issues accurately before recommending repairs.' },
      { title: 'Brand Compatibility', desc: 'Our technicians service most major garage door opener manufacturers.' },
      { title: 'Safety Testing', desc: 'Every repair includes testing of reversing systems and safety sensors.' },
      { title: 'Honest Advice', desc: 'We recommend repair whenever practical and replacement only when it\u2019s the better investment.' },
    ],
    process: [
      { title: 'Evaluate', desc: 'Inspect the opener, controls, sensors, and drive system.' },
      { title: 'Diagnose', desc: 'Determine whether repair or replacement offers the best solution.' },
      { title: 'Repair', desc: 'Replace worn components and restore reliable operation.' },
      { title: 'Test', desc: 'Verify safe operation and proper reversal functions.' },
    ],
  },
  {
    slug: 'garage-door-installation',
    title: 'Garage Door Installation',
    short: 'New garage doors professionally installed with complete hardware.',
    heroEyebrow: 'Upgrade Your Home',
    heroTitle: 'Garage Door Installation',
    heroSubtitle: 'Beautiful new garage doors professionally installed to boost curb appeal.',
    metaDescription: 'Professional garage door installation with quality products and expert workmanship throughout the Milwaukee Metro Area.',
    intro: [
      'A new garage door improves curb appeal, increases energy efficiency, enhances security, and adds value to your home. Whether you\u2019re replacing an aging door or upgrading your home\u2019s appearance, our team provides expert installation with careful attention to every detail.',
      'We help homeowners choose garage doors that complement their home\u2019s architecture while providing dependable daily performance and long-lasting durability.',
    ],
    features: [
      { title: 'Traditional Steel Doors', desc: 'Durable, low-maintenance garage doors available in numerous styles.' },
      { title: 'Insulated Garage Doors', desc: 'Improve comfort and energy efficiency throughout the year.' },
      { title: 'Modern Designs', desc: 'Clean contemporary styles with windows and decorative finishes.' },
      { title: 'Carriage House Style', desc: 'Classic carriage-house look with modern overhead operation.' },
      { title: 'Complete Hardware Replacement', desc: 'New tracks, springs, rollers, and hardware with every system.' },
      { title: 'Opener Integration', desc: 'New or existing opener connected and tested with your new door.' },
    ],
    cost: [
      { service: 'Single Garage Door', range: '$1,100 – $2,200', average: '$1,600' },
      { service: 'Double Garage Door', range: '$1,600 – $3,500', average: '$2,450' },
      { service: 'Insulated Door Upgrade', range: '$1,800 – $4,200', average: '$2,900' },
    ],
    why: [
      { title: 'Professional Installation', desc: 'Every door installed to manufacturer specifications for safe, reliable operation.' },
      { title: 'Quality Products', desc: 'We install durable garage doors designed to withstand Wisconsin weather.' },
      { title: 'Complete System Replacement', desc: 'New tracks, springs, rollers, and hardware maximize performance and longevity.' },
      { title: 'Personalized Recommendations', desc: 'We help you choose styles, insulation, and features that fit your home and budget.' },
    ],
    process: [
      { title: 'Consultation', desc: 'Review your goals, style preferences, and budget.' },
      { title: 'Measure', desc: 'Take precise measurements to ensure a perfect fit.' },
      { title: 'Install', desc: 'Remove the existing door and install the complete new system.' },
      { title: 'Final Inspection', desc: 'Test balance, safety systems, opener operation, and overall performance.' },
    ],
  },
];

export const SERVICE_MAP: Record<string, ServiceInfo> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export interface LocationInfo {
  slug: string;
  name: string;
  eyebrow: string;
  heading: string;
  lead: string;
  why: { title: string; desc: string }[];
}

export const LOCATIONS: LocationInfo[] = [
  {
    slug: 'milwaukee',
    name: 'Milwaukee',
    eyebrow: 'Serving Milwaukee Homeowners',
    heading: 'Garage Door Repair in Milwaukee',
    lead: 'Milwaukee homeowners depend on their garage doors every day, and when something goes wrong, prompt repairs matter. We provide professional garage door repair, spring replacement, opener repair, and installation throughout Milwaukee. Our experienced technicians arrive ready to diagnose problems quickly and complete lasting repairs using quality replacement parts.',
    why: [
      { title: 'Local Experience', desc: 'We understand the challenges Milwaukee weather creates for garage door systems.' },
      { title: 'Quality Repairs', desc: 'Our technicians focus on durable repairs rather than temporary fixes.' },
      { title: 'Responsive Service', desc: 'We work efficiently to restore access to your home.' },
    ],
  },
  {
    slug: 'waukesha',
    name: 'Waukesha',
    eyebrow: 'Serving Waukesha',
    heading: 'Garage Door Repair in Waukesha',
    lead: 'If your garage door isn\u2019t operating properly, Madison Quality Garage Door Repair provides dependable repair and installation services throughout Waukesha. From broken springs and damaged rollers to opener failures and complete door replacements, we deliver solutions built to last. Every service begins with a thorough inspection so we can identify the true cause of the problem.',
    why: [
      { title: 'Honest Recommendations', desc: 'We explain your options clearly before beginning any work.' },
      { title: 'Experienced Technicians', desc: 'Years of hands-on experience repairing residential garage doors.' },
      { title: 'Quality Parts', desc: 'Durable replacement components for dependable performance.' },
    ],
  },
  {
    slug: 'west-allis',
    name: 'West Allis',
    eyebrow: 'Serving West Allis',
    heading: 'Garage Door Repair in West Allis',
    lead: 'Homeowners throughout West Allis trust Madison Quality Garage Door Repair for dependable garage door repairs, opener troubleshooting, spring replacement, and new garage door installation. We work efficiently while maintaining high standards of workmanship on every project.',
    why: [
      { title: 'Dependable Service', desc: 'Prompt appointments and quality workmanship.' },
      { title: 'Complete Repairs', desc: 'We inspect the entire system — not just the broken part.' },
      { title: 'Customer Focused', desc: 'Clear communication from start to finish.' },
    ],
  },
  {
    slug: 'wauwatosa',
    name: 'Wauwatosa',
    eyebrow: 'Serving Wauwatosa',
    heading: 'Garage Door Repair in Wauwatosa',
    lead: 'When your garage door isn\u2019t working properly, our experienced technicians provide dependable repairs throughout Wauwatosa. From broken torsion springs and damaged rollers to malfunctioning garage door openers, we deliver repairs that restore safe, reliable operation.',
    why: [
      { title: 'Local Knowledge', desc: 'We understand the needs of homeowners throughout the Milwaukee Metro Area.' },
      { title: 'Complete Garage Door Service', desc: 'Repair, replacement, installation, and opener service from one experienced team.' },
      { title: 'Quality Workmanship', desc: 'Every repair completed with attention to safety and long-term reliability.' },
    ],
  },
  {
    slug: 'new-berlin',
    name: 'New Berlin',
    eyebrow: 'Serving New Berlin',
    heading: 'Garage Door Repair in New Berlin',
    lead: 'Madison Quality Garage Door Repair provides dependable garage door repairs, spring replacement, opener repair, and garage door installation throughout New Berlin. We respond promptly, inspect the complete system, and recommend practical solutions that fit your needs.',
    why: [
      { title: 'Prompt Response', desc: 'We work quickly to restore access and security.' },
      { title: 'Honest Service', desc: 'Straightforward recommendations without unnecessary upselling.' },
      { title: 'Lasting Repairs', desc: 'We use quality parts designed for dependable daily performance.' },
    ],
  },
  {
    slug: 'brookfield',
    name: 'Brookfield',
    eyebrow: 'Serving Brookfield',
    heading: 'Garage Door Repair in Brookfield',
    lead: 'Homeowners in Brookfield rely on Madison Quality Garage Door Repair for dependable garage door repairs, opener troubleshooting, broken spring replacement, and complete garage door installation. Our technicians focus on identifying the underlying cause of the problem so repairs last longer.',
    why: [
      { title: 'Experienced Technicians', desc: 'Skilled professionals with extensive residential garage door experience.' },
      { title: 'Quality Components', desc: 'Durable replacement parts selected for reliable long-term performance.' },
      { title: 'Customer-First Service', desc: 'Clear communication, honest recommendations, and dependable workmanship.' },
    ],
  },
];

export const LOCATION_MAP: Record<string, LocationInfo> = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l]),
);

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: (NavLink & { children?: NavLink[] })[] = [
  {
    label: 'Our Services',
    path: '/services',
    children: SERVICES.map((s) => ({ label: s.title, path: `/services/${s.slug}` })),
  },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Marcus Reinhart', role: 'Owner & Lead Technician', initials: 'MR', bio: 'Twenty years on the tools. Marcus started turning wrenches on garage doors before he could drive, and he still personally inspects every install.' },
  { name: 'Devon Clark', role: 'Senior Repair Technician', initials: 'DC', bio: 'Devon handles our toughest diagnostics — openers that hum, doors that jump tracks, springs that snap at 6 a.m. If it\u2019s broken, he\u2019s seen it.' },
  { name: 'Priya Anand', role: 'Installation Specialist', initials: 'PA', bio: 'Priya leads our new-door installs, from measuring to final balance test. She\u2019ll help you pick a door that fits your home and your budget.' },
  { name: 'Tomas Bauer', role: 'Service Technician', initials: 'TB', bio: 'Tomas covers the south side and Waukesha County. Friendly, fast, and meticulous about safety sensor alignment.' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  { q: 'How quickly can you come out?', a: 'We offer same-day service for most repair calls across the Milwaukee Metro Area, especially for doors that are stuck open or closed. Call (608) 504-8245 and we\u2019ll give you the earliest available window.' },
  { q: 'Do you charge for an estimate?', a: 'No. Estimates for repair and installation are free, and we give you a clear price before any work begins. There is a standard diagnostic service-call fee if you want us to troubleshoot on-site, which is credited toward the repair if you move forward.' },
  { q: 'My spring broke — is it safe to open the door?', a: 'No. A broken spring means the door is no longer counterbalanced and is extremely heavy. Do not try to lift it manually or force the opener. Keep everyone away and call us right away.' },
  { q: 'Should I repair or replace my opener?', a: 'If the opener is under 10 years old and the issue is a gear, sensor, or remote, repair is usually the better value. If the motor is failing or the unit lacks modern safety sensors, replacement is often the smarter long-term call. We\u2019ll give you an honest recommendation either way.' },
  { q: 'How long does a new garage door installation take?', a: 'A standard single or double door installation is typically completed in a single visit — usually 3 to 5 hours, including removal of the old door and full hardware replacement.' },
  { q: 'Do you warranty your work?', a: 'Yes. Repairs carry a workmanship warranty and new parts are covered by the manufacturer\u2019s warranty. We\u2019ll walk you through exactly what\u2019s covered before we start.' },
  { q: 'What areas do you serve?', a: 'We serve the entire Milwaukee Metro Area including Milwaukee, Waukesha, West Allis, Wauwatosa, New Berlin, and Brookfield. If you\u2019re nearby, give us a call and we\u2019ll let you know.' },
  { q: 'Do you offer emergency service?', a: 'Yes. We offer emergency service for doors stuck open or otherwise unsafe. Call (608) 504-8245 and we\u2019ll do our best to get a technician out as quickly as possible.' },
];

export const IMAGES = {
  heroHouse: 'https://images.pexels.com/photos/5353883/pexels-photo-5353883.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  modernHouse: 'https://images.pexels.com/photos/17158676/pexels-photo-17158676.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  garageEvening: 'https://images.pexels.com/photos/9459177/pexels-photo-9459177.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  suburbanGarage: 'https://images.pexels.com/photos/33350023/pexels-photo-33350023.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  blueGarage: 'https://images.pexels.com/photos/7475555/pexels-photo-7475555.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  technician: 'https://images.pexels.com/photos/8985457/pexels-photo-8985457.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  team1: 'https://images.pexels.com/photos/37556463/pexels-photo-37556463.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  team2: 'https://images.pexels.com/photos/8487760/pexels-photo-8487760.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  team3: 'https://images.pexels.com/photos/16552846/pexels-photo-16552846.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  team4: 'https://images.pexels.com/photos/37556464/pexels-photo-37556464.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  contact: 'https://images.pexels.com/photos/8867208/pexels-photo-8867208.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
};
