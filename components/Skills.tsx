"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { CharacterV1, CharacterV2, CharacterV3 } from "./ui/skiper-ui/skiper31";

const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);
  const targetRef4 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: targetRef4,
  });

  const chars = ["M", "Y", " ", "S", "K", "I", "L", "L", "S"];
  const centerIndex = Math.floor(chars.length / 2);

  const frontendIcons = [
    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=102838&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=123603&format=png&color=000000", 
    "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=H997wGMPVphe&format=png&color=000000",
    "https://skiper-ui.com/mac/Github.png",
  ];
  const frontendCenterIndex = Math.floor(frontendIcons.length / 2);

  const backendIcons = [
    "https://skiper-ui.com/mac/Postman.png",
    "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    "https://skiper-ui.com/mac/Monog.png",
    "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
  ];
  const backendCenterIndex = Math.floor(backendIcons.length / 2);

  const toolIcons = [
    "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=rD15EcpCkinR&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
  ];
  const toolCenterIndex = Math.floor(toolIcons.length / 2);

  return (
    <section id="skills">
      <main className="w-full bg-white">
        {/* Scroll indicator - responsive positioning and sizing */}
        <div className="absolute left-1/2 top-16 z-10 grid -translate-x-1/2 content-start justify-items-center gap-4 text-center text-black sm:top-20 sm:gap-6 md:top-22">
          <span className="relative max-w-[12ch] px-4 text-[10px] uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-12 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-[''] sm:px-0 sm:text-xs sm:after:h-16">
            Scroll to see more
          </span>
        </div>

        {/* Section 1: MY SKILLS text */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {chars.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Frontend Icons */}
        <div
          ref={targetRef2}
          className="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl">
            {frontendIcons.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={frontendCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Backend Icons */}
        <div
          ref={targetRef3}
          className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {backendIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={backendCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Tool Icons */}
        <div
          ref={targetRef4}
          className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {toolIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={toolCenterIndex}
                scrollYProgress={scrollYProgress4}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;