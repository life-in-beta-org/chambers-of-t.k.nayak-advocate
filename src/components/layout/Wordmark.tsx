
interface WordmarkProps {
  light?: boolean;
  compact?: boolean;
}

export default function Wordmark({
  light = false,
  compact = false,
}: WordmarkProps) {
  const textColor = light ? "text-ivory" : "text-navy";

  return (
    <a
      href="#home"
      aria-label="Chambers of T. K. Nayak — Home"
      className={`inline-flex items-center gap-3 ${textColor}`}
    >
      <span
        className={[
          "flex shrink-0 items-center justify-center",
          "border border-gold font-display text-gold",
          compact ? "size-10 text-lg" : "size-12 text-xl",
        ].join(" ")}
        aria-hidden="true"
      >
        TKN
      </span>

      <span className="flex flex-col">
        <span
          className={[
            "font-display leading-tight tracking-wide",
            compact ? "text-base" : "text-lg md:text-xl",
          ].join(" ")}
        >
          Chambers of T. K. Nayak
        </span>

        {!compact && (
          <span className="mt-1 text-[10px] uppercase tracking-[0.25em] opacity-70">
            Advocate
          </span>
        )}
      </span>
    </a>
  );
}
