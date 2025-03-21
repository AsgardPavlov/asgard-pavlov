"use client";

import React from "react";
import {BlurFade} from "@/components/magicui/blur-fade";
import {BLUR_FADE_DELAY} from "@/lib/variables";
import {DATA} from "@/data/resume";
import {Markdown} from "@/components/Markdown";

export default function About() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3} className="text-wrap">
        <Markdown>
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}
