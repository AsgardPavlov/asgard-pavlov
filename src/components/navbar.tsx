'use client';

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {usePathname} from "next/navigation";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";

const ROUTES = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Bio",
    href: "/biography",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "CV",
    href: "/cv",
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:bottom-auto md:top-0 z-30 mx-auto mb-4 md:mb-0 md:mt-4 flex origin-bottom">
      {/*<div className="fixed bottom-0 md:top-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>*/}
      <Dock
        className={cn(
          "z-50 rounded-full pointer-events-auto space-x-2 relative mx-auto flex min-h-full h-full items-center p-1",
          "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu",
          "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        )}
      >
        <Tabs defaultValue={pathname} >
          <TabsList className="bg-transparent p-0">
            {ROUTES.map(i => (
              <TabsTrigger key={i.label} value={i.href} >
                <Link href={i.href} className="py-[10px] px-[16px]">
                  {i.label}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
