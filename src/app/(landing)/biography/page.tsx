import {BlurFade} from "@/components/magicui/blur-fade";
import {BLUR_FADE_DELAY} from "@/lib/variables";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {cn} from "@/lib/utils";
import React from "react";

export default function BiographyPage() {
  const markdown = `
    I grew up in the Sakha Republic (Yakutia) of Russia, where my childhood dreams revolved around running a conservation safari in Africa - caring for wildlife and documenting nature like a National Geographic explorer.
    
    During middle school, I discovered the world of technology when our teacher organized field trips to [InDrive](https://indrive.com/) and [MyTona](https://mytona.com/) offices. These experiences planted the seed that would eventually inspire me to become a creator of digital products.
    
    At 17, I enrolled at Siberian Federal University (SFU) in central Siberia. During my first year, the COVID-19 lockdown forced me to return to my hometown of Yakutsk. My close friend and I tried various ways to earn money, including crafting and selling wooden chairs. During this period, I participated in an online hackathon called "My Future Profession is IT." There, I collaborated with Ivan on developing a mobile application for local university events. He provided design templates and mockups, taught me basic tools in Figma, and created the design for our app. We placed third in the hackathon, and I received a special nomination for best product design.
    
    After this breakthrough, I began asking Ivan to mentor me in development. His approach was to guide rather than spoon-feed - "read about this topic and try to implement it yourself." He recommended valuable Udemy courses for JavaScript, React, and React Native.
    
    Returning to university for my second year, I had accumulated several pet projects for my portfolio and decided to apply for internships in Krasnoyarsk. After navigating through approximately five interviews, I secured an internship at KozhinDev.
    
    At KozhinDev, I worked on an open-source UI library for React, learning how to develop foundational UI frameworks similar to Material-UI and Bootstrap from the ground up. I worked there for a year until the war began. My ambition was to work in the global market alongside the giants of the IT industry, and I realized that with borders closing and major companies exiting Russia, opportunities were dwindling.
    
    I began searching for opportunities to relocate to neighboring countries like Kazakhstan. Fortuitously, Instagram's algorithm connected me with information about the nFactorial Incubator - a summer coding bootcamp in Almaty, Kazakhstan.
  `

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
                The life is a game and how I play it
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="max-w-[800px] mx-auto">
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
              {markdown}
            </Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}