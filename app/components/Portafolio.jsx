import React from "react";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";

const Portafolio = () => {
  return (
    <section className=" pt-8 px-6 md:px-20 lg:px-40">
      <div className=" w-full text-center px-4 py-12 dark:text-white">
        <h3 className=" text-2xl py-2  text-violet-500 font-bold">
          Trabajos Recientes
        </h3>
        <p className="text-md py-2 leading-8 font-normal">
          Estos son algunos de mis proyectos y trabajos más recientes dónde se
          juntan las diferentes tecnologías, conocimientos y habilidades
          anteriormente mencionadas
        </p>
      </div>
      {/* portafolio projects section */}
      <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className=" basis-1/3 flex-1">
          <Image
            src={web1}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web2}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web3}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web4}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web5}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web6}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive="true"
            alt="photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
