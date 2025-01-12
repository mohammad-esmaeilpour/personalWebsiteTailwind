import { projectsSeo } from "@/public/data/projects";
import { Metadata } from "next";
import ProjectView from "./_components/ProjectView";
import { Fragment } from "react";
import Hero from "./_components/Hero";

export const metadata: Metadata = {
  title: projectsSeo.title,
  description: projectsSeo.metadescription,
  openGraph: {
    description: projectsSeo.metadescription,
    title: projectsSeo.title,
    images: "https://esmaeilpour.site/img/ui/logo.png",
    type: "website",
    url: "https://esmaeilpour.site/projects",
    siteName: "Mohammad Esmaeilpour portfolio",
  },
};

const Projects = () => {
  return (
    <Fragment>
      <Hero/>
      <ProjectView />;
    </Fragment>
    )
};

export default Projects;
