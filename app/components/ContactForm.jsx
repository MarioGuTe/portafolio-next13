import React from "react";
import { HiMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";

const ContactForm = () => {
  return (
    <section className=" flex flex-col justify-center bg-violet-500 py-8">
      <form
        action=""
        className=" bg-white rounded-lg flex flex-col p-4 mx-4 gap-4"
      >
        <div>
          <h2 className=" text-xl font-semibold">Conversemos 😉</h2>
          <p className=" text-sm text-gray-500 mt-2">
            Si tienes cualquier idea, sugerencia o simplemente quieres hablar de
            programación no dudes en escribirme
          </p>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className=" p-1 border-solid border-4 border-violet-100 rounded-md focus:border-solid focus:border-4 focus:border-violet-300 outline-none"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Correo Electrónico</label>
          <input
            type="text"
            className=" p-1 border-solid border-4 border-violet-100 rounded-md focus:border-solid focus:border-4 focus:border-violet-300 outline-none"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Mensaje</label>
          <textarea
            name=""
            id=""
            cols="15"
            rows="5"
            className=" p-1 border-solid border-4 border-violet-100 rounded-md focus:border-solid focus:border-4 focus:border-violet-300 outline-none"
          ></textarea>
        </div>
        <button className="  py-3 rounded-lg bg-violet-500 text-white text-lg font-medium">
          Enviar
        </button>
      </form>
      <div className=" text-center mt-6 text-white font-medium">
        <h2>Datos de Contacto</h2>
        <div className=" mt-3">
          <div className=" flex items-center justify-center gap-1">
            <HiMail className=" text-xl" />
            <p>mariogutierreztello@gmail.com</p>
          </div>
          <div className=" flex items-center justify-center gap-1">
            <RiWhatsappFill className=" text-xl" />
            <p>+569 42642310</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
