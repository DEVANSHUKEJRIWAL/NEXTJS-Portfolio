import React from 'react';
import {Meteors} from "@/app/components/ui/Meteors";
import {FaGithub} from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link}) => (
    <div
        className="group relative shadow-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-gray-600 border border-neutral-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:shadow-2xl">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-neutral-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
            </svg>
        </div>

        <h3 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
        </h3>

        <p className="font-normal text-base text-neutral-400 mb-4 relative z-50">
            {description}
        </p>

        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-1 rounded-lg border-neutral-500 text-neutral-300 transition-colors duration-300 hover:border-white hover:text-white"
        >
            <FaGithub/>
        </a>

        <Meteors number={5}/>
    </div>
);

export default ProjectCard;
