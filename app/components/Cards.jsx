import React from "react";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

const Cards = () => {
  return (
    <section>
      <div className=" bg-violet-400 w-full text-center px-4 py-12 text-white">
        <h3 className=" text-2xl py-2 font-bold">Acerca de mí</h3>
        <p className="text-md py-2 leading-8 font-medium">
          Hola soy Mario, Desarrollador Fullstack además de Músico Profesional
          de basta experiencia, he desarrollado distitntos proyectos de manera
          freelance, independiente y autónoma dónde he implementando soluciones
          tanto a funcionalidades de Frontend como la interacción del cliente
          con la interfaz de usuario aplicando distintas tecnologías como
          JavaScript, React, HTML, CSS.
        </p>
        <p className="text-md py-2 leading-8 font-medium">
          Soy una persona constante, responsable y sobre todo apasionada por
          aprender nuevas tecnologías, aptitudes que me han permitido explorar
          con profundidad diferentes desafios personales y de igual manera me
          han permitido enfocar mis esfuerzos en comprender y buscar las mejores
          soluciones para el cliente.
        </p>
      </div>
      {/* Cards Section */}
      <div className=" lg:flex gap-10 px-6 md:px-20 lg:px-40">
        {/* card 1 */}
        <div className=" text-center  border-solid border-4 border-violet-100 p-10 rounded-xl my-10 shadow-purple-500">
          <BsFillFileEarmarkCodeFill className=" text-8xl mx-auto  text-violet-500" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Desarrollo Web
          </h3>
          <p className=" py-2  dark:text-white">
            Me gusta el proceso de tomar una idea por más pequeña o grande que
            sea y darle vida a través del desarrollo web.
          </p>
          <h4 className=" py-4 text-xl font-medium text-violet-500">
            Lenguajes y Frameworks
          </h4>
          <div>
            <p className="text-gray-800 py-1  dark:text-white">HTML</p>
            <p className="text-gray-800 py-1  dark:text-white">CSS</p>
            <p className="text-gray-800 py-1  dark:text-white">JavaScript</p>
            <p className="text-gray-800 py-1  dark:text-white">ReactJS</p>
            <p className="text-gray-800 py-1  dark:text-white">NodeJS</p>
            <p className="text-gray-800 py-1  dark:text-white">Git</p>
          </div>
        </div>
        {/* card 2 */}
        <div className=" text-center border-solid border-4 border-violet-100 p-10 rounded-xl my-10 shadow-purple-500">
          <FaUniversity className=" text-8xl mx-auto  text-violet-500" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Formación
          </h3>
          <p className=" py-2  dark:text-white">
            Saber que hay un mundo de cosas nuevas por aprender es una de las
            razones por las que me levanto cada mañana.
          </p>
          <h4 className=" py-4 text-xl font-medium text-violet-500">
            Certificados y Cursos
          </h4>
          <div>
            <p className="text-gray-800 py-1  dark:text-white">
              Desarrollador Fullstack Javascript (Bootcamp Desafío Latam
              2022-2023)
            </p>
            <p className="text-gray-800 py-1  dark:text-white">
              React JS Fundamentals (Escalab: Tech Talents Hub 2023)
            </p>
            <p className="text-gray-800 py-1  dark:text-white">
              Complete Web & Mobile Designer UI/UX (Udemy 2023)
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className=" text-center border-solid border-4 border-violet-100 p-10 rounded-xl my-10 shadow-purple-500">
          <HiBadgeCheck className="text-8xl mx-auto  text-violet-500" />
          <h3 className=" text-2xl font-semibold pt-8 pb-2  text-violet-500">
            Habilidades
          </h3>
          <p className=" py-2  dark:text-white">
            En mi día a día estas son algunas de las aptitudes y herramientas
            que empleo para enriquecer mi trabajo.
          </p>
          <h4 className=" py-4 text-xl font-medium text-violet-500">
            Skills Complementarias
          </h4>
          <div>
            <p className=" text-gray-800 py-1  dark:text-white">Diseño UX/UI</p>
            <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
            <p className=" text-gray-800 py-1  dark:text-white">Kanban</p>
            <p className=" text-gray-800 py-1  dark:text-white">
              Inglés Avanzado EF SET Certificate C2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
