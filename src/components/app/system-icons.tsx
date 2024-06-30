import { SystemIconsKeys, systemIconToSVG } from "shared/constants/Icons";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  label?: string;
  icon: SystemIconsKeys;
  strokeWidth?: number;
  className: string;
}

export const SystemIcon = forwardRef<HTMLElement, IProps>(
  ({ icon, label, strokeWidth, className }, ref) => {
    if (!icon) {
      return null;
    }

    if (icon === "none") {
      return null;
    }

    const iconSvg = systemIconToSVG(icon, strokeWidth);
    return (
      <i
        ref={ref}
        className={cn("inline-block", className)}
        aria-label={label}
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />
    );
  }
);

export const GrabIcon = forwardRef<
  SVGSVGElement,
  {
    width?: number;
    className?: string;
  }
>(({ width, className }, ref) => {
  return (
    <svg
      className={cn("cursor-grab fill-main touch-none grab-icon", className)}
      ref={ref}
      viewBox="0 0 20 20"
      width={width || 12}
    >
      <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
    </svg>
  );
});
