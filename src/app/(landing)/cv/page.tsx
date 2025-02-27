import Experience from "@/components/pages/cv/experience";
import Education from "@/components/pages/cv/education";
import ProgrammingLanguages from "@/components/pages/cv/programming-languages";
import TechnologiesFrameworks from "@/components/pages/cv/technologies-frameworks";
import DeploymentTools from "@/components/pages/cv/deployment-tools";

export default function CvPage() {
  return (
    <>
      <Experience />
      <Education />
      <ProgrammingLanguages />
      <TechnologiesFrameworks />
      <DeploymentTools />
    </>
  )
}
