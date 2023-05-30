"use client";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Portafolio from "./components/Portafolio";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white dark:bg-gray-900">
        <nav className=" py-8 flex justify-between px-6 md:px-20 md:pb-0 lg:px-40">
          <h1 className=" text-base text-white dark:text-gray-900">MG</h1>
          <ul className=" flex items-center">
            <li>
              {darkMode === "dark" ? (
                <BsFillSunFill
                  className=" cursor-pointer text-xl text-white"
                  onClick={() => setDarkMode("")}
                />
              ) : (
                <BsFillMoonStarsFill
                  className=" cursor-pointer text-xl text-black"
                  onClick={() => setDarkMode("dark")}
                />
              )}
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
        <ContactForm />
      </main>
    </div>
  );
}
