import { useMemo, useState } from "react";
import clsx from "clsx";

type InteractiveCardProps = {
  title: string;
  description: string;
  accent?: "navy" | "green" | "gray";
  highlight?: string;
  icon?: React.ReactNode;
  href?: string;
  disableHover?: boolean;
  containerClassName?: string;
  bodyClassName?: string;
  children?: React.ReactNode;
};

const accentMap: Record<NonNullable<InteractiveCardProps["accent"]>, string> = {
  navy: "from-brand-navy/90 via-brand-navy/80 to-brand-green/80",
  green: "from-brand-green/90 via-brand-green/80 to-brand-navy/80",
  gray: "from-brand-gray/80 via-brand-navy/60 to-brand-green/70"
};

export function InteractiveCard({
  title,
  description,
  accent = "navy",
  highlight,
  icon,
  href,
  disableHover = false,
  containerClassName,
  bodyClassName,
  children
}: InteractiveCardProps) {
  const baseTransform = disableHover ? "none" : "perspective(900px)";
  const [transform, setTransform] = useState(baseTransform);

  const gradientClass = useMemo(() => accentMap[accent], [accent]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX - bounds.width / 2) / bounds.width) * 10;
    const rotateX = -((offsetY - bounds.height / 2) / bounds.height) * 8;

    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`);
  };

  const handleLeave = () => {
    setTransform(baseTransform);
  };

  const interactionHandlers = disableHover
    ? {}
    : {
        onMouseMove: handleMove,
        onMouseLeave: handleLeave
      };

  const content = (
    <div
      style={{ transform }}
      className={clsx(
        "relative h-full overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-[1px] shadow-panel",
        disableHover ? "" : "group transition-all duration-300 ease-out",
        containerClassName
      )}
      {...interactionHandlers}
    >
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br opacity-80 blur-[0px]",
          disableHover ? "" : "transition duration-500 group-hover:opacity-100 group-hover:blur-[2px]",
          gradientClass
        )}
      />
      <div
        className={clsx(
          "relative z-10 flex h-full flex-col gap-4 rounded-[22px] bg-white/70 p-6 backdrop-blur",
          bodyClassName
        )}
      >
        <div className="flex items-start gap-3">
          {icon && <div className="text-xl text-brand-green">{icon}</div>}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
              {highlight && (
                <span className="rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold text-brand-navy">
                  {highlight}
                </span>
              )}
            </div>
            <p className="mt-1 text-base text-slate-700">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full" aria-label={title}>
        {content}
      </a>
    );
  }

  return content;
}

export default InteractiveCard;
