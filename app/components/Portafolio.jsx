import React from "react";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";

const Portafolio = () => {
  return (
    <section className=" py-8 px-6 md:px-20 lg:px-40">
      <div className=" w-full text-center px-4 py-12 dark:text-white">
        <h3 className=" text-2xl py-2  text-violet-500 font-bold">
          Trabajos Recientes
        </h3>
        <p className="text-md py-2 leading-8 font-normal lg:text-lg">
          Estos son algunos de mis proyectos y trabajos más recientes dónde se
          juntan las diferentes tecnologías, conocimientos y habilidades
          anteriormente mencionadas
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
            responsive="true"
            alt="photo"
          />
          <p className=" dark:text-white pt-6">
            Portafolio personal dónde se aplicaron tecnologías modernas como lo
            son la última versión del superset Next13 de ReactJS y el popular
            framework Tailwind CSS para el estilo de la página.
          </p>
        </div>
        <div className=" basis-1/3 flex-1">
          <a href="https://ponte-bebop.netlify.app/" target="_blank">
            <Image
              src={web2}
              className=" rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive="true"
              alt="photo"
            />
          </a>
          <p className=" dark:text-white pt-6">
            Página profesional para la banda de Jazz Santiaguina "PonteBebop"
            con un enfoque en la experiencia de usuario por medio de animaciones
            e interacciones minimalistas y elegantes.{" "}
            <a
              className=" text-violet-500 font-semibold"
              href="https://ponte-bebop.netlify.app/"
              target="_blank"
            >
              Visitar Página
            </a>
          </p>
        </div>
        <div className=" basis-1/3 flex-1">
          <a href="https://fantastifotos.vercel.app/" target="_blank">
            <Image
              src={web3}
              className=" rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive="true"
              alt="photo"
            />
          </a>
          <p className=" dark:text-white pt-6">
            Sitio de búsqueda y descarga de Fotografías profesionales utilizando
            la API de Pixabay y la herramienta de desarrollo para frontend Vite
            para JavaScript con el fin de entregar una experiencia de usuario
            más veloz.{" "}
            <a
              className=" text-violet-500 font-semibold"
              href="https://fantastifotos.vercel.app/"
              target="_blank"
            >
              Visitar Página
            </a>
          </p>
        </div>
        <div className=" basis-1/3 flex-1">
          <a href="https://todoappmg.netlify.app/" target="_blank">
            <Image
              src={web4}
              className=" rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive="true"
              alt="photo"
            />
          </a>
          <p className=" dark:text-white pt-6">
            Aplicación clásica de tipo "Todo"(listado de tareas) hecha en
            Vanilla JS dónde se ponen en práctica todas las habilidades lógicas
            y funcionales básicas para una comprensión robusta de JavasScript.{" "}
            <a
              className=" text-violet-500 font-semibold"
              href="https://todoappmg.netlify.app/"
              target="_blank"
            >
              Visitar Página
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
