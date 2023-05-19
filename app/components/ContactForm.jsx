import React from "react";

const ContactForm = () => {
  return (
    <section className=" flex justify-center bg-violet-500 py-8">
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
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
