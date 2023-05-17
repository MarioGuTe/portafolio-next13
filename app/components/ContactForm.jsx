import React from "react";

const ContactForm = () => {
  return (
    <section className=" flex justify-center">
      <form action="" className=" border-solid border-4 border-violet-100">
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Correo Electrónico</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Mensaje</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
