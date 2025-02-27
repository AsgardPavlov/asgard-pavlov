import {BLUR_FADE_DELAY} from "@/lib/variables";
import {DATA} from "@/data/resume";
import {Badge} from "@/components/ui/badge";
import {BlurFade} from "@/components/magicui/blur-fade";

export default function TechnologiesFrameworks() {
  return (
    <section id="technologies-frameworks">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Technologies and Frameworks</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.technologiesFrameworks.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}