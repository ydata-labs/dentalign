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
    return condition ? <>{children}</> : <>{fallback}</>;
}
