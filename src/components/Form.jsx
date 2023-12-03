import React from "react";
import * as htmlToImage from "html-to-image";

let node = document.getElementById("poster");

function Form() {
  return (
    <div className="flex flex-col bg-[#add8e6] m-4 p-4 rounded-lg border-black border-solid border-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
      <p className="text-2xl font-bold text-[#323232]">Bienvenido,</p>
      <p className="text-[#636363] font-semibold">crea tu poster.</p>
      <input type="text" className="input" placeholder="Poster Title" />
      <input type="text" className="input" placeholder="Author" />
      <input type="text" className="input" placeholder="Poster year" />
      <input type="text" className="input" placeholder="Poster Image" />
      <div className="my-2 flex gap-2">
        <button
          className="input"
          onClick={() =>
            htmlToImage.toPng(node).then(function (dataUrl) {
              let img = new Image();
              img.src = dataUrl;
              document.body.appendChild(img);
            })
          }
        >
          Generar Poster
        </button>
        <button className="input">Descargar Poster</button>
      </div>
    </div>
  );
}

export default Form;
