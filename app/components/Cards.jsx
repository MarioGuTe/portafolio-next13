import React from "react";
import Image from "next/image";
import design from "/public/design.png";

const Cards = () => {
  return (
    <section>
      <div className=" bg-violet-400 w-full text-center px-4 py-12 text-white">
        <h3 className=" text-2xl py-2 font-semibold">Acerca de mí</h3>
        <p className="text-md py-2 leading-8 font-medium">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for agencies consulted for startups
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 font-medium">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      {/* Cards Section */}
      <div className=" lg:flex gap-10">
        {/* card 1 */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
          <Image src={design} width={100} height={100} className=" mx-auto" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Desarrollo Web
          </h3>
          <p className=" py-2  dark:text-white">
            Me gusta el proceso de tomar una idea por más pequeña o grande que
            sea y darle vida a través del desarrollo web.
          </p>
          <h4 className=" py-4 text-xl font-normal text-violet-500">Skills</h4>
          <div className="flex flex-wrap">
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              HTML
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              CSS
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              JavaScript
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              ReactJS
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              NodeJS
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Git
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
          <Image src={design} width={100} height={100} className=" mx-auto" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Educación
          </h3>
          <p className=" py-2  dark:text-white">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className=" py-4 text-xl font-normal text-violet-500">
            Design tools I use
          </h4>
          <div className="flex flex-wrap">
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Figma
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Photoshop
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Photoshop
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
          <Image src={design} width={100} height={100} className=" mx-auto" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Diseño
          </h3>
          <p className=" py-2  dark:text-white">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className=" py-4 text-xl font-normal text-violet-500">
            Design tools I use
          </h4>
          <div className="flex flex-wrap">
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Figma
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Photoshop
            </p>
            <p className=" basis-1/3 flex-1 text-gray-800 py-1  dark:text-white">
              Photoshop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
