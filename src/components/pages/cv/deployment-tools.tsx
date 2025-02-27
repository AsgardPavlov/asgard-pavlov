import {BLUR_FADE_DELAY} from "@/lib/variables";
import {DATA} from "@/data/resume";
import {Badge} from "@/components/ui/badge";
import {BlurFade} from "@/components/magicui/blur-fade";

export default function DeploymentTools() {
  return (
    <section id="programming-languages">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Deployment Tools</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.deploymentTools.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}