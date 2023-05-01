"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
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
            <h1 className=" text-base font-burtons">MARIO GUTIÉRREZ</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl"
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
            <h2 className=" text-5xl py-2 font-semibold text-violet-600  md:text-6xl">
              Mario Gutiérrez
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">
              Desarrollador Fullstack JavaScript
            </h3>
            <p className=" text-lg py-3 leading-8 text-gray-800 md:text-xl">
              El cariño por aprender es la mejor habilidad que puede cultivar un
              desarrollador.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-14 py-3 text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-violet-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={Mario} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        </section>
        <section>
          <div className="mt-8">
            <h3 className=" text-2xl py-2">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=" lg:flex gap-10">
            {/* card 1 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
            </div>
            {/* card 2 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
            </div>
            {/* card 3 */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className=" mx-auto" />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Photoshop</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1">Portafolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
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
