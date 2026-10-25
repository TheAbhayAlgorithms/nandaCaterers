import React from "react";

interface IconProps {
  className?: string;
}

// Custom inline SVG line icons per Section 5.4 (stroke 1.5)
export function WeddingRingsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="14" r="5" />
      <circle cx="16" cy="14" r="5" />
      <path d="M14 6l1.5-2h3l1.5 2" />
      <path d="M17.5 4v2" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <line x1="12" y1="11" x2="12" y2="13" />
    </svg>
  );
}

export function ClocheIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 4a1.5 1.5 0 0 0-1.5-1.5h-.01" />
      <path d="M4 18h16a1 1 0 0 0 1-1A9 9 0 0 0 3 17a1 1 0 0 0 1 1z" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <circle cx="12" cy="4" r="1.5" />
    </svg>
  );
}

export function PartyPopperIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5.8 11.3L2 22l10.7-3.8L5.8 11.3z" />
      <path d="M4 3h.01" />
      <path d="M20 4h.01" />
      <path d="M15 2h.01" />
      <path d="M19 12h.01" />
      <path d="M11 7a3 3 0 0 0 4-1" />
      <path d="M18 17a3 3 0 0 0-1-4" />
    </svg>
  );
}

export function FoodCounterIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M3 11l2-7h14l2 7" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <line x1="12" y1="11" x2="12" y2="21" />
    </svg>
  );
}

export function MenuCardIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export const serviceIconMap: Record<string, React.ComponentType<IconProps>> = {
  wedding: WeddingRingsIcon,
  corporate: BriefcaseIcon,
  family: ClocheIcon,
  party: PartyPopperIcon,
  decoration: FoodCounterIcon,
  social: MenuCardIcon,
};
