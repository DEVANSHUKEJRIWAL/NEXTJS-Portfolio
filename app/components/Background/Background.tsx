import React from "react";
import {BackgroundBeams} from "../ui/BackgroundTeams";
import {CardDemo} from "../Card/Card";

export function BackgroundBeamsDemo() {
    return (
        <div className="background-beams-demo relative overflow-hidden">
            <BackgroundBeams/>

            <div className="content-container flex flex-col mb-20 md:flex-row items-center justify-center">
                <div className="about-me max-w-full md:max-w-4xl mx-auto p-4 text-center md:text-left">
                    <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 md:ml-10">
                        About Me
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base font-medium md:ml-10">
                        I am a Full-Stack Developer passionate about building scalable, efficient, and visually
                        appealing web applications. Skilled in Java (Spring Boot, Hibernate), Node.js, Express.js,
                        React.js, Next.js, and MongoDB, I create seamless user experiences while ensuring robust backend
                        performance. With hands-on experience in REST APIs, microservices, cloud technologies (AWS,
                        Docker, Kubernetes), and CI/CD pipelines, I deliver high-quality solutions that meet business
                        goals. A collaborative problem-solver and proactive communicator, I thrive in dynamic
                        environments, translating complex concepts into intuitive, user-friendly interfaces while
                        leading projects and teams to success.
                    </p>
                </div>

                <div className="card-container max-w-full md:max-w-4xl mx-auto p-4 w-full">
                    <CardDemo/>
                </div>
            </div>
        </div>
    );
}
