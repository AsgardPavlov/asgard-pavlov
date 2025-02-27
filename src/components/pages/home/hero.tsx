import {BlurFade} from "@/components/magicui/blur-fade";
import {DATA} from "@/data/resume";
import {BLUR_FADE_DELAY} from "@/lib/variables";

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {`Hey, I'm ${DATA.firstName} 👋`}
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
              <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                <span className="font-mono">
                  (0
                  <span className="text-blue-500 px-1">
                    →
                  </span>
                  1)
                </span>
                {" "}
                Full Stack Engineer
              </span>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}