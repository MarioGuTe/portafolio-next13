import React from "react";

const ContactForm = () => {
  return (
    <section className=" flex justify-center bg-violet-500 py-8">
      <form action="" className=" bg-white rounded-lg flex flex-col p-4 gap-4">
        <div>
          <h2>Conversemos 😉</h2>
          <p>
            Si tienes cualquier duda sugerencia o quieres hablar de programación
            no dudes en escribirme
          </p>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className=" border-solid border-4 border-violet-100 rounded-lg"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Correo Electrónico</label>
          <input
            type="text"
            className=" border-solid border-4 border-violet-100 rounded-lg"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="name">Mensaje</label>
          <textarea
            name=""
            id=""
            cols="15"
            rows="5"
            className=" border-solid border-4 border-violet-100 rounded-lg"
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
