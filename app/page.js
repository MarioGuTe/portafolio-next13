import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className=" bg-white px-5 ">
      <section className="min-h-screen">
        <nav className=" py-10 mb-12 flex justify-between">
          <h1 className=" text-lg font-burtons">Mario Gutiérrez</h1>
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-4"
                href="#"
              >
                Curriculum
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
