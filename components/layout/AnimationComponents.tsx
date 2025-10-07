"use client";

import { DataBg } from "@/util/data-bg";
import { useAccordion } from "@/util/useAccordion";
import { useRevealAnimation } from "@/util/useRevealAnimation";
import useTextAnimation2 from "@/util/useTextAnimation2";
import useTextAnimation3 from "@/util/useTextAnimation3";

export default function AnimationComponents() {
    useRevealAnimation();
    DataBg();
    useTextAnimation2();
    useTextAnimation3();
    useAccordion();

    return null;
}
