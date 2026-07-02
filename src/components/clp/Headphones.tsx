type HeadphonesProps = {
  color?: string;
  className?: string;
};

export function Headphones({ color = "#C9A96A", className }: HeadphonesProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of the Studio One over-ear headphones"
    >
      <path
        d="M40 100 C40 55, 70 25, 100 25 C130 25, 160 55, 160 100"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="26"
        y="92"
        width="28"
        height="56"
        rx="14"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="4"
      />
      <rect
        x="146"
        y="92"
        width="28"
        height="56"
        rx="14"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="4"
      />
      <circle cx="40" cy="120" r="4" fill={color} />
      <circle cx="160" cy="120" r="4" fill={color} />
    </svg>
  );
}
