"use client";

import React from "react";
import {BlurFade} from "@/components/magicui/blur-fade";
import {BLUR_FADE_DELAY} from "@/lib/variables";
import {DATA} from "@/data/resume";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import {cn} from "@/lib/utils";

export default function About() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3} className="text-wrap">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: (props) => {
              return (
                <code
                  {...props}
                  className={cn(
                    props.className,
                    "text-wrap"
                  )}
                >
                  {props.children}
                </code>
              )
            }
          }}
        >
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}
