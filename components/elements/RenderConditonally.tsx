import React, { ReactNode } from "react";

interface RenderConditionallyProps {
    condition: any;
    children: ReactNode;
    fallback?: ReactNode;
}

export default function RenderConditionally({
    condition,
    children,
    fallback = null,
}: RenderConditionallyProps) {
    // Check for both undefined and empty string
    const shouldRender = condition !== undefined && condition !== null && condition !== "";
    return shouldRender ? <>{children}</> : <>{fallback}</>;
}
