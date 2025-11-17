import React from "react";
import {Timeline} from "../Timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Software Developer Intern – BNP Paribas (2024)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Enhanced backend services using <strong>Java Spring Boot</strong> and
                    implemented <strong>integration testing with WireMock</strong>.
                    Collaborated with frontend teams to improve the Audit Trail dashboard,
                    optimizing data flow and system performance across microservices.
                </div>
            ),
        },
        {
            title: "Technical Intern – Uniqus Consultech (2023)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Developed full-stack features using <strong>React.js</strong> and{" "}
                    <strong>Node.js</strong>. Worked on optimizing MongoDB queries and
                    improving backend API response times, enhancing overall system
                    efficiency and UX.
                </div>
            ),
        },
        {
            title: "Open Source Contributor - GSSoC '23",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Developed full-stack features using <strong>React.js</strong> and{" "}
                    <strong>Node.js</strong>. Worked on optimizing MongoDB queries and
                    improving backend API response times, enhancing overall system
                    efficiency and UX.
                </div>
            ),
        },
        {
            title: "Vice Chairperson – Cyberspace Club (2022)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Led a 20+ member team to organize hackathons, coding workshops, and
                    cybersecurity challenges. Mentored peers in{" "}
                    <strong>web development</strong> and cloud fundamentals, fostering a
                    culture of technical growth and collaboration.
                </div>
            ),
        },
        {
            title: "Convenor – Novus Tech Fest (2022)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Managed a cross-functional team to plan and execute the annual college
                    tech festival, coordinating with sponsors and participants to deliver
                    impactful technical events and workshops.
                </div>
            ),
        },
        {
            title: "Full Stack Developer Journey (Present)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Building scalable, cloud-ready web apps using{" "}
                    <strong>Next.js, React, Spring Boot, and AWS</strong>. Exploring{" "}
                    <strong>DevOps, microservices, and AI integration</strong> to create
                    next-gen digital experiences.
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data}/>
        </div>
    );
}
