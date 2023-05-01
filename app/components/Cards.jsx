import React from "react";
import Image from "next/image";
import design from "/public/design.png";

const Cards = () => {
  return (
    <div className=" lg:flex gap-10">
      {/* card 1 */}
      <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
        <Image src={design} width={100} height={100} className=" mx-auto" />
        <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
          Beautiful Designs
        </h3>
        <p className=" py-2  dark:text-white">
          Creating elegant designs suited for your needs following core design
          theory.
        </p>
        <h4 className=" py-4 text-violet-500">Design tools I use</h4>
        <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
      </div>
      {/* card 2 */}
      <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
        <Image src={design} width={100} height={100} className=" mx-auto" />
        <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
          Beautiful Designs
        </h3>
        <p className=" py-2  dark:text-white">
          Creating elegant designs suited for your needs following core design
          theory.
        </p>
        <h4 className=" py-4 text-violet-500">Design tools I use</h4>
        <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
      </div>
      {/* card 3 */}
      <div className=" text-center shadow-lg p-10 rounded-xl my-10 shadow-purple-500">
        <Image src={design} width={100} height={100} className=" mx-auto" />
        <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
          Beautiful Designs
        </h3>
        <p className=" py-2  dark:text-white">
          Creating elegant designs suited for your needs following core design
          theory.
        </p>
        <h4 className=" py-4 text-violet-500">Design tools I use</h4>
        <p className=" text-gray-800 py-1  dark:text-white">Figma</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
        <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
      </div>
    </div>
  );
};

export default Cards;
