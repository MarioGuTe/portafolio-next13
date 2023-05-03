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
    <section className="min-h-screen md:px-20 lg:px-40">
      <div className="text-center p-10">
        <h2 className=" text-4xl py-2 font-semibold text-violet-500  md:text-6xl">
          Mario Gutiérrez
        </h2>
        <h3 className=" text-xl py-2 md:text-3xl dark:text-white">
          Desarrollador Fullstack JavaScript
        </h3>
        <p className=" text-base py-3 leading-8 text-gray-800 md:text-xl  dark:text-white">
          El cariño por aprender es la mejor habilidad que puede cultivar un
          desarrollador.
        </p>
      </div>
      <div className=" text-4xl flex flex-col justify-center gap-4 py-1 px-6 text-violet-500">
        <div className=" flex justify-center">
          <DiHtml5 />
          <DiCss3Full />
          <DiJsBadge />
        </div>
        <div className=" flex justify-center">
          <DiReact />
          <DiNodejsSmall />
        </div>
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-violet-600 rounded-full w-44 h-44 mt-12 overflow-hidden md:h-96 md:w-96">
        <Image src={Mario} alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
};

export default Landing;
