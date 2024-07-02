// components/Preview.tsx
import React from "react";
import { IconContainer } from "./Icons";
import { Radar } from "./radar";

import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRapid } from "react-icons/si";


const Preview = () => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4 bg-black">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="REST Api"  icon={<SiRapid />} />
          <IconContainer
            delay={0.4}
            text="NEXTJS"
            icon={<RiNextjsFill className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="ReactJS"
            delay={0.3}
            icon={<FaReact className="h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            text="ExpressJS"
            delay={0.5}
            icon={<SiExpress className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="MONGODB"
            icon={<SiMongodb className="h-8 w-8 text-slate-600" />}
            delay={0.8}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            delay={0.6}
            text="JavaScript"
            icon={<IoLogoJavascript className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            delay={0.7}
            text="Github"
            icon={<FaGithub className="h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>
      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
    </div>
  );
};

export default Preview;
