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
    <>
      <div className="text-center p-10">
        <h2 className=" text-5xl py-2 font-semibold text-violet-500  md:text-6xl">
          Mario Gutiérrez
        </h2>
        <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
          Desarrollador Fullstack JavaScript
        </h3>
        <p className=" text-lg py-3 leading-8 text-gray-800 md:text-xl  dark:text-white">
          El cariño por aprender es la mejor habilidad que puede cultivar un
          desarrollador.
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-14 py-3 text-violet-500">
        <DiHtml5 />
        <DiCss3Full />
        <DiJsBadge />
        <DiReact />
        <DiNodejsSmall />
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-violet-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={Mario} alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </>
  );
};

export default Landing;
