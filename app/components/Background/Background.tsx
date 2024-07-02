import React from "react";
import { BackgroundBeams } from "../ui/background-teams";
import { CardDemo } from "../Card/Card";

export function BackgroundBeamsDemo() {
  return (
    <div className="background-beams-demo relative overflow-hidden">
      <BackgroundBeams />

      <div className="content-container flex flex-col mb-20 md:flex-row items-center justify-center">
        <div className="about-me max-w-full md:max-w-4xl mx-auto p-4 text-center md:text-left">
          <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 md:ml-10">
            About Me
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base font-medium md:ml-10">
            I am a FullStack developer with a track of creating stunning and
            intuitive user interfaces for web applications. My expertise in HTML,
            CSS, JavaScript, React.js, Next.js, and other frameworks allows me to
            translate complex concepts into user-friendly experiences that are
            both functional and visually appealing. I have a strong understanding
            of how to create engaging and effective user interfaces that meet the
            unique needs of each project. I am passionate about collaborating
            closely with clients and team members to understand their vision and
            deliver the best possible results. In addition to my technical
            skills, I am a strong communicator and problem solver, able to adapt
            to changing requirements and tight deadlines.
          </p>
        </div>

        <div className="card-container max-w-full md:max-w-4xl mx-auto p-4 w-full">
          <CardDemo />
        </div>
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo;
