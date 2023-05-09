"use client";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Portafolio from "./components/Portafolio";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className=" bg-white dark:bg-gray-900">
      <main className=" bg-white dark:bg-black">
        <nav className=" py-8 flex justify-between px-6 md:px-20 md:pb-0 lg:px-40">
          <h1 className=" text-base dark:text-white">MG</h1>
          <ul className=" flex items-center">
            <li>
              {currentTheme === "dark" ? (
                <BsFillSunFill
                  className=" cursor-pointer text-xl text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BsFillMoonStarsFill
                  className=" cursor-pointer text-xl text-black"
                  onClick={() => setTheme("dark")}
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
      </main>
    </div>
  );
}
