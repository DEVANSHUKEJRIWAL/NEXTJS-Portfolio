import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["NEXT.JS.", "REACT.JS.", "MONGODB.", "TAILWINDCSS."];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
  <div className="mx-auto font-bold text-neutral-600 dark:text-neutral-400 flex justify-start items-start text-4xl">
  <div className="text-base md:text-2xl lg:text-2xl p-4 text-wrap">
  <span className="block md:inline">I am Devanshu_Kejriwal. Developer with some designing skills.</span> 
  <span className="block md:inline ">Experience in</span>
  <FlipWords words={words} /> <br />
</div>

  </div>
</div>

  );
}
