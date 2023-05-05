"use client";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Portafolio from "./components/Portafolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className={` bg-white dark:bg-gray-900`}>
        <nav className=" py-8 flex justify-between px-6 md:px-20 md:pb-0 lg:px-40">
          <h1 className=" text-base dark:text-white">MG</h1>
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
        <Cards />
        <Portafolio />
      </main>
    </div>
  );
}
