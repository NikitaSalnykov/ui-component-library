import { default as React } from 'react';

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarRounded = "none" | "md" | "full";
export type AvatarStatus = "none" | "online" | "offline" | "busy" | "away";
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    rounded?: AvatarRounded;
    status?: AvatarStatus;
    withShadow?: boolean;
    showFallback?: boolean;
    srcSet?: string;
    sizes?: string;
    className?: string;
}
