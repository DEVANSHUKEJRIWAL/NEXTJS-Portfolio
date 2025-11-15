import React from "react";
import ProjectCard from "./ProjectCard";
import {BackgroundBeams} from "../ui/BackgroundTeams";

export function CardHoverEffectDemo() {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-8">
            <p className="text-white font-sans text-4xl font-bold -mb-5">Projects</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>

            <BackgroundBeams/>
        </section>
    );
}

export const projects = [
    {
        title: "ScriptGen",
        description:
            "A content generator that uses AI to create unique and engaging content for your website or blog.",
        link: "https://github.com/DEVANSHUKEJRIWAL/ScriptGen",
    },
    {
        title: "MUJ_EMS",
        description:
            "A elective management system for Manipal University Jaipur made using MERN Stack.",
        link: "https://github.com/DEVANSHUKEJRIWAL/MUJ-EMS",
    },
    {
        title: "Cartique",
        description:
            "A ecommerce shopping app made using ReactJS and TailwindCSS with payment gateway integration.",
        link: "https://cartique-shop.netlify.app",
    },
    {
        title: "BashConf",
        description:
            "A cybersecurity conference website made using HTML, CSS, and JavaScript.",
        link: "https://bashconf.netlify.app",
    },
    {
        title: "PortFolio",
        description:
            "A portfolio website made using NEXTJS and TailwindCSS.",
        link: "https://devport-folio.netlify.app",
    },
    {
        title: "Spotify_Clone",
        description:
            "A clone of Spotify made using ReactJS and TailwindCSS.",
        link: "https://github.com/DEVANSHUKEJRIWAL/React_Spotify_Clone",
    },
];