import type {
  NavLink,
  HeroStat,
  TipperVariant,
  FeatureItem,
  ProcessStep,
  WhyCard,
  WhyNumberItem,
  ContactDetail,
  MarqueeItem,
  VehicleCategory,
  FooterLink,
  SelectOption,
} from '@/types';

export const SITE_URL = 'https://www.bluerocktippers.com';
export const SITE_NAME = 'Bluerock Tippers';
export const SITE_DESCRIPTION =
  "Bluerock Tippers (also known as Bluerock) is India's premier commercial vehicle body fabricator. We manufacture precision-engineered Bluerock tippers, trailers, and specialised transport solutions for operators who demand the exceptional.";

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_EYEBROW = 'Navsari · Gujarat · Est. 1984';

export const HERO_DESC =
  "India's premier commercial vehicle body fabricator. Precision-engineered tippers, trailers, and specialised transport solutions for operators who demand the exceptional.";

export const HERO_STATS: HeroStat[] = [
  { value: '40', suffix: '+', label: 'Years Legacy' },
  { value: '5000', suffix: '+', label: 'Units Delivered' },
  { value: '24', suffix: 'hr', label: 'Service Response' },
];

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: 'Tipper Bodies' },
  { label: 'Cargo Bodies' },
  { label: 'Hook Loaders' },
  { label: 'Flat Bed Trailers' },
  { label: 'Tankers' },
  { label: 'Container Bodies' },
  { label: 'Custom Fabrication' },
];

// ── ABOUT ────────────────────────────────────────────────────────────────────

export const ABOUT_BODY_1 =
  'Since 1984, BlueRock has been at the forefront of commercial vehicle body fabrication in India. What began as a regional workshop has grown into a nationally recognised name, synonymous with precision and durability.';

export const ABOUT_BODY_2 =
  'Operating from a state-of-the-art facility in Navsari, Gujarat, our modernised plant combines four decades of craft knowledge with the latest fabrication technology — Auto-CAD, Solid Edge design, high-capacity press brakes, MIG welding, and shot-blasting paint booths.';

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  { abbr: 'LCV', label: 'Light' },
  { abbr: 'MCV', label: 'Medium' },
  { abbr: 'HCV', label: 'Heavy' },
];

// ── PRODUCTS ─────────────────────────────────────────────────────────────────

export const PRODUCTS_BODY =
  'Every body fabricated at BlueRock is engineered for a specific purpose — built on Indian truck platforms to maximise payload efficiency and long-term durability. Customised solutions for every transport need.';

export const TIPPER_VARIANTS: TipperVariant[] = [
  { label: 'Nose Type Chassis', variant: 'gold' },
  { label: 'Semi Forward Control', variant: 'gold' },
  { label: 'Fully Forward Control', variant: 'gold' },
  { label: 'Heavy Duty Mining', variant: 'sky' },
];

export const TIPPER_FEATURED_DESC =
  'From nose-type chassis to heavy-duty mining tippers — our flagship range covers LCV, MCV, and HCV platforms. Box type, rock body, ribless, garbage tippers — each precision crafted for maximum cycle efficiency.';

export const PRODUCT_CARDS = [
  {
    num: '02',
    name: 'CARGO BODY',
    desc: 'Standard box bodies, side wall trailers, and light-weight ribless designs. Optimal for goods transport operators.',
  },
  {
    num: '03',
    name: 'CONTAINERS & INSULATED',
    desc: 'Temperature-controlled insulated bodies and standard dry containers for cold chain and specialised cargo.',
  },
  {
    num: '04',
    name: 'TIP-TRAILER & FLATBED',
    desc: 'Heavy-duty tip-trailers and flat bed configurations for multi-axle transport of construction and bulk materials.',
  },
  {
    num: '05',
    name: 'HOOK LOADER',
    desc: 'Hydraulic hook-loader systems for waste management and skip-transport — engineered for daily heavy-cycle operations.',
  },
  {
    num: '06',
    name: 'TANKERS',
    desc: 'Petroleum and water tanker bodies, purpose-built with certified materials and precision-sealed weld joints.',
  },
  {
    num: '07',
    name: 'GARBAGE TIPPER',
    desc: 'Municipal and industrial waste collection tippers — corrosion-resistant with optimised loading geometry.',
  },
  {
    num: '08',
    name: 'CUSTOM SPECIAL PURPOSE',
    desc: 'Your requirement, our engineering. Fully bespoke body fabrication for any transport challenge — from mining to defence.',
    highlighted: true,
  },
];

// ── FEATURES ─────────────────────────────────────────────────────────────────

export const FEATURES: FeatureItem[] = [
  {
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'PREMIUM STEEL',
    desc: 'High-grade steel sourced from verified, genuine suppliers. Every batch tested to ensure structural integrity and long service life.',
  },
  {
    iconPath: '',
    iconExtra: 'rect',
    title: 'CAD PRECISION',
    desc: 'Every product developed through Auto-CAD and Solid Edge — parametric design that eliminates tolerance errors before fabrication begins.',
  },
  {
    iconPath: '',
    iconExtra: 'clock',
    title: '100% MIG WELD',
    desc: 'Full MIG welding using calibrated machines on every joint. No shortcuts — each weld is inspected and load-tested before sign-off.',
  },
  {
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'SHOT-BLAST FINISH',
    desc: 'Shot blasting and dedicated paint booths deliver a surface finish that resists corrosion, chipping, and chemical exposure in field conditions.',
  },
];

// ── PROCESS ──────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'CONSULTATION',
    desc: 'Understand your transport requirements, vehicle platform, and operational environment in detail.',
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'CAD drawings developed and shared for approval. Every dimension and load-point verified before cutting begins.',
  },
  {
    num: '03',
    title: 'FABRICATION',
    desc: 'High-capacity press brake forming, precision shearing, and full MIG welding by our experienced fabrication team.',
  },
  {
    num: '04',
    title: 'FINISHING',
    desc: 'Shot blasting, epoxy primer, and top-coat paint in our enclosed booth. Durable surface tested for adhesion and coverage.',
  },
  {
    num: '05',
    title: 'DELIVERY',
    desc: 'Full PDI inspection and field commissioning. After-sales support with 24-hour maximum service response.',
  },
];

// ── WHY US ───────────────────────────────────────────────────────────────────

export const WHY_CARDS: WhyCard[] = [
  {
    num: '01',
    title: 'FOUR DECADES OF CRAFT',
    body: 'Since 1984, a legacy of precision fabrication built through thousands of units operating across Western India and beyond.',
  },
  {
    num: '02',
    title: 'TRULY CUSTOMISED',
    body: "Every body is designed for your specific vehicle, payload, and use-case. No off-the-shelf compromises. No standard that doesn't fit.",
  },
  {
    num: '03',
    title: 'WESTERN REGION SPECIALIST',
    body: 'Deep knowledge of Indian road conditions, regulatory requirements, and regional transport demands makes every body purpose-fit.',
  },
  {
    num: '04',
    title: '24-HOUR SERVICE',
    body: 'Our field and plant teams respond to service calls within 24 hours — keeping your fleet operational and your uptime protected.',
  },
  {
    num: '05',
    title: 'VALUE FOR INVESTMENT',
    body: '100% customer retention is our standard. Premium quality steel, precision builds, and lasting finishes make BlueRock bodies the economical long-term choice.',
  },
];

export const WHY_QUOTE =
  "\"BlueRock bodies have been running our fleet for over a decade. The build quality simply outlasts everything else we've tried.\"";
export const WHY_QUOTE_ATTR = 'Fleet Operator · Western India';

export const WHY_NUMBERS: WhyNumberItem[] = [
  { value: '40', suffix: '+', label: 'Years Active' },
  { value: '100', suffix: '%', label: 'MIG Welded' },
  { value: '24', suffix: 'hr', label: 'Service SLA' },
  { value: 'LCV', suffix: '–HCV', label: 'Full Range' },
];

// ── CONTACT ──────────────────────────────────────────────────────────────────

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    label: 'Address',
    value: 'Block no. 460/1, Alipore,\nTal. Chikhali, Dist. Navsari - 396409\nGujarat',
    iconType: 'location',
  },
  { label: 'Phone', value: '+91 77963 71155', iconType: 'phone' },
  { label: 'Email', value: 'excellence@bluerocktippers.com', iconType: 'email' },
  { label: 'Response Time', value: 'Within 24 hours guaranteed', iconType: 'clock' },
];

export const CONTACT_BODY =
  'Tell us your vehicle platform, payload requirement, and use-case. Our team will respond within 24 hours with a specification proposal.';

export const SELECT_OPTIONS: SelectOption[] = [
  { label: 'Tipper Body (Nose Type)', value: 'tipper-nose' },
  { label: 'Tipper Body (Semi Forward)', value: 'tipper-semi' },
  { label: 'Heavy Duty Tipper', value: 'tipper-heavy' },
  { label: 'Cargo Body', value: 'cargo' },
  { label: 'Container / Insulated Body', value: 'container' },
  { label: 'Hook Loader', value: 'hook-loader' },
  { label: 'Tip-Trailer / Flatbed', value: 'tip-trailer' },
  { label: 'Tanker', value: 'tanker' },
  { label: 'Custom Special Purpose', value: 'custom' },
];

// ── FOOTER ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_COPYRIGHT = '© 2025 BlueRock Tippers and Trailerz. All rights reserved.';
