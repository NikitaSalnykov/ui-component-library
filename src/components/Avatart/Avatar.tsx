import React from "react";
import clsx from "clsx";
import type { AvatarProps, AvatarSize, AvatarRounded, AvatarStatus } from "./Avatar.types";

const sizeMap: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
}

const roundedMap: Record<AvatarRounded,string> = {
  none: "rounded-none",
  md: "rounded-lg",
  full: "rounded-full",
}

const statusColor: Record<AvatarStatus, string> = {
  none: "hidden",
  online: "bg-emerald-500",
  offline: "bg-gray-400",
  busy: "bg-rose-500",
  away: "bg-amber-400",
};

function getInitials(name?: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase() ?? "").join("");
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props, ref) => {
    const {
      src,
      alt,
      name,
      size = "md",
      rounded = "full",
      status = "none",
      withShadow = false,
      showFallback = false,
      srcSet,
      sizes,
      className,
      ...rest
    } = props;

    const [imgError, setImgError] = React.useState(false);
    const showImage = !!src && !imgError && !showFallback;

    const initials = getInitials(name);

    return (
      <div
        ref={ref}
        className={clsx(
          "relative inline-flex shrink-0 items-center justify-center select-none bg-blue-100 text-gray-600",
          sizeMap[size],
          roundedMap[rounded],
          withShadow && " shadow-black shadow-md",
          className
        )}
        aria-label={alt ?? name ?? "avatar"}
        {...rest}
      >
        {showImage && (
          <img
            src={src}
            alt={alt ?? name ?? "avatar"}
            srcSet={srcSet}
            sizes={sizes}
            className={clsx("h-full w-full object-cover", roundedMap[rounded])}
            onError={() => setImgError(true)}
          />
        )}

        {!showImage && initials && (
          <span className="font-medium tracking-wide">{initials}</span>
        )}

        {!showImage && !initials && (
          <span
            className="text-gray-400"
            aria-hidden="true"
            role="img"
            title="User"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
            >
              <path
                d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M4 21.2C4 17.76 7.582 15 12 15s8 2.76 8 6.2V23H4v-1.8z"
                fill="currentColor"
                opacity="0.35"
              />
            </svg>
          </span>
        )}

        <span
          className={clsx(
            "absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white",
            statusColor[status]
          )}
          aria-hidden={status === "none" ? "true" : "false"}
          title={status !== "none" ? status : undefined}
        />
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;