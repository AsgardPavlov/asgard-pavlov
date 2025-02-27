import {BLUR_FADE_DELAY} from "@/lib/variables";
import {DATA} from "@/data/resume";
import {Badge} from "@/components/ui/badge";
import {BlurFade} from "@/components/magicui/blur-fade";

export default function ProgrammingLanguages() {
  return (
    <section id="programming-languages">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Programming Languages</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.programmingLanguages.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}