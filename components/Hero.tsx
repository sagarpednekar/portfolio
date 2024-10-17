import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { profileImage } from "@/data";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div>
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:text-left text-center items-center relative z-10 mt-10 md:mt-20 mb-10 md:mb-20">
        <div className="w-full md:w-[50vw] p-5 md:p-10">
          <p className="font-bold text-3xl md:text-5xl">I am Sagar</p>
          <TextGenerateEffect
            className="text-xl md:text-3xl"
            words="Full Stack Developer from 🇮🇳"
          />
          <p className="text-lg md:text-2xl mb-2 md:mb-0">
            I transform abstract ideas into robust, scalable full-stack
            solutions, using cutting-edge technologies to create seamless user
            experiences and fuel business growth
          </p>
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses=""
            />
          </a>
        </div>
        <div className="w-full md:w-[50vw] flex justify-center mt-5 md:mt-0">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

          <img
            src={profileImage}
            alt="profile"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-center"
          />
            </BackgroundGradient>
        </div>

      </div>
    </div>
  );
}
