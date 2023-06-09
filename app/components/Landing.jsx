import React from "react";
import Image from "next/image";
import Mario from "/public/mario-avatar.png";
import {
  DiJsBadge,
  DiCss3Full,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";

const Landing = () => {
  return (
    <section className="min-h-screen md:px-20 lg:px-40 dark:bg-gray-900">
      <div className="text-center p-10">
        <h2 className=" text-4xl py-2 font-semibold text-violet-500  md:text-5xl">
          Mario Gutiérrez
        </h2>
        <h3 className=" text-xl py-2 md:text-2xl dark:text-white">
          Desarrollador Fullstack JavaScript
        </h3>
        <p className=" text-base py-3 leading-8 text-gray-800 md:text-lg md:pb-0 dark:text-white">
          El cariño por aprender es la mejor habilidad que puede cultivar un
          desarrollador.
        </p>
      </div>
      <div className=" text-4xl flex flex-col justify-center gap-4 py-1 px-6 text-violet-500 md:flex-row md:gap-0 lg:text-5xl lg:pt-0 ">
        <div className=" flex justify-center gap-2">
          <DiHtml5 />
          <DiCss3Full />
          <DiJsBadge />
        </div>
        <div className=" flex justify-center gap-2 ml-2">
          <DiReact />
          <DiNodejsSmall />
        </div>
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-violet-600 rounded-full w-44 h-44 mt-12 overflow-hidden md:h-72 md:w-72 lg:mt-4 lg:h-52 lg:w-52 xl:mt-16">
        <Image src={Mario} alt="avatar" fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
};

export default Landing;
