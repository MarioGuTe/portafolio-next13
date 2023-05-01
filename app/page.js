"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  DiJsBadge,
  DiCss3Full,
  DiHtml5,
  DiGit,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import Image from "next/image";
import Mario from "../public/mario-avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className={` bg-white px-10 md:px-20 lg:px-40  dark:bg-zinc-900`}>
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-base font-burtons  dark:text-white">
              MARIO GUTIÉRREZ
            </h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl  dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-violet-700 to-violet-500 text-white px-2 py-2 rounded-md ml-4"
                  href="#"
                >
                  Curriculum
                </a>
              </li>
            </ul>
          </nav>
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
            {/* <DiGit /> */}
            <DiReact />
            <DiNodejsSmall />
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-violet-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={Mario} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        </section>
        <section>
          <div className="mt-8">
            <h3 className=" text-2xl py-2  dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-violet-500 "> agencies </span>
              consulted for <span className="text-violet-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=" lg:flex gap-10">
            {/* card 1 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
                Beautiful Designs
              </h3>
              <p className=" py-2  dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-violet-500">Design tools I use</h4>
              <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            </div>
            {/* card 2 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
                Beautiful Designs
              </h3>
              <p className=" py-2  dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-violet-500">Design tools I use</h4>
              <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            </div>
            {/* card 3 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
                Beautiful Designs
              </h3>
              <p className=" py-2  dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-violet-500">Design tools I use</h4>
              <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
              <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            </div>
          </div>
        </section>
        <section className=" pt-24">
          <div>
            <h3 className=" text-3xl py-1 dark:text-white">Portafolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-violet-500"> agencies </span>
              consulted for<span className="text-violet-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
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
      </main>
    </div>
  );
}
