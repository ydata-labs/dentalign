"use client";
import React, { ReactNode, useState, useEffect } from "react";

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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Always render fallback on server and during hydration to prevent mismatch
    if (!mounted) {
        return <>{fallback}</>;
    }

    // Check for both undefined and empty string after mount
    const shouldRender = condition !== undefined && condition !== null && condition !== "";
    return shouldRender ? <>{children}</> : <>{fallback}</>;
}
