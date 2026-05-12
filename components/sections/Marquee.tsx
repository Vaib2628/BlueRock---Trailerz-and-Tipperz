import { MARQUEE_ITEMS } from '@/lib/constants';

export default function Marquee() {
  // Duplicate for seamless loop, match HTML which has 14 items total (2 sets of 7)
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="bg-rock-gold overflow-hidden"
      aria-label="Product categories marquee"
      style={{ padding: '12px 0' }}
      role="marquee"
    >
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: 'marquee 25s linear infinite' }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="font-display text-[18px] tracking-[6px] uppercase text-rock-navy px-12 flex items-center gap-12"
          >
            {item.label}
            <span className="w-[6px] h-[6px] rounded-full bg-rock-navy opacity-40 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
