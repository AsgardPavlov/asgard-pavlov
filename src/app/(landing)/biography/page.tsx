import {BlurFade} from "@/components/magicui/blur-fade";
import {BLUR_FADE_DELAY} from "@/lib/variables";
import React from "react";
import { Markdown } from "@/components/Markdown";

export default function BiographyPage() {
const markdown =
  "I grew up in a small village in Yakutia, Russia, where I dreamed of African safaris and wildlife conservation while " +
  "watching **National Geographic**. My path changed when our school visited local tech companies " +
  "([**inDrive**](https://indrive.com) and [**MyTona**](https://mytona.com)) — seeing developers create digital " +
  "products ignited something new in me." +
  "\n\n" +
  "At 17, I left for **Siberian Federal University**. When COVID hit, I returned home and worked as an electrician, even built wooden " +
  "chairs to make ends meet. Everything changed during an online hackathon where I met Ivan, who became my mentor. " +
  "We placed third, and I won \"Best Product Design.\" Instead of giving me answers, Ivan guided me " +
  "toward **JavaScript** and **React** courses." +
  "\n\n" +
  "With growing skills, I landed an internship at [**KozhinDev**](https://kozhindev.com) working on an [**open-source " +
  "UI library**](https://steroids.dev/). A year after the war started, I knew I needed opportunities beyond " +
  "Russia's closing borders." +
  "\n\n" +
  "Instagram's algorithm became my unlikely savior, showing me the " +
  "[**nFactorial Incubator**](https://nfactorial.school) coding bootcamp in Kazakhstan — my gateway to the global tech scene." +
  "\n\n" +
  "Since then, I've worked with startups across multiple domains: building a " +
  "[**social network mobile app**](https://www.wegowhere.com/), developing [**gym management SaaS**](https://usekilo.com) " +
  "solutions, and creating data visualization tools for an [**agrotech company**]" +
  "(https://www.facebook.com/people/Tengri-Lights/100084437472482/). " +
  "Each role has taught me something valuable." +
  "\n\n" +
  "I'm still on my journey. The African savanna of my childhood dreams has transformed into a digital landscape where " +
  "I'm making an impact. One thing remains the same—I'm still that village kid who refuses to let circumstances define my future."

  return (
    <section id="biography">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Biography
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Long story short about me
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="max-w-[800px] mx-auto">
            <Markdown>
              {markdown}
            </Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}