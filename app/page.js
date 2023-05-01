"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Portafolio from "./components/Portafolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className={` bg-white px-10 md:px-20 lg:px-40  dark:bg-zinc-900`}>
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
        <Landing />
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
          {/* Cards Section */}
          <Cards />
        </section>
        <Portafolio />
      </main>
    </div>
  );
}
