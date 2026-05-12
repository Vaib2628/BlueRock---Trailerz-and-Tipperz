export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  suffix: string;
  label: string;
}

export interface ProductCard {
  num: string;
  name: string;
  desc: string;
  featured?: boolean;
  highlighted?: boolean;
}

export interface TipperVariant {
  label: string;
  variant: 'gold' | 'sky';
}

export interface FeatureItem {
  iconPath: string;
  title: string;
  desc: string;
  iconExtra?: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface WhyCard {
  num: string;
  title: string;
  body: string;
}

export interface WhyNumberItem {
  value: string;
  suffix: string;
  label: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  iconType: 'location' | 'phone' | 'email' | 'clock';
}

export interface MarqueeItem {
  label: string;
}

export interface VehicleCategory {
  abbr: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
