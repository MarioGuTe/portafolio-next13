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
    <section className=" pt-24">
      <div>
        <h3 className=" text-3xl py-1 dark:text-white">Portafolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-violet-500"> agencies </span>
          consulted for<span className="text-violet-500"> startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
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
            responsive
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web2}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web3}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web4}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web5}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive
          />
        </div>
        <div className=" basis-1/3 flex-1">
          <Image
            src={web6}
            className=" rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            responsive
          />
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
