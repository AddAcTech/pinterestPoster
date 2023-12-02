import React from "react";

function Form() {
  return (
    <div className="flex flex-col bg-neutral-500 m-4 p-4 rounded-lg shadow-lg shadow-neutral-600">
      <label className="my-1">Title:</label>
      <input
        type="text"
        className="rounded-lg px-2"
        placeholder="Poster Title"
      />

      <label className="my-1">Author:</label>
      <input type="text" className="rounded-lg px-2" placeholder="Author" />

      <label className="my-1">Year:</label>
      <input
        type="text"
        className="rounded-lg px-2"
        placeholder="Poster year"
      />

      <label className="my-1">URL de la Imagen:</label>
      <input
        type="text"
        className="rounded-lg px-2"
        placeholder="Poster Image"
      />

      <div className="my-2 flex flex-col text-white font-bold">
        <button className="bg-zinc-950  rounded-md my-2">Generar Póster</button>
        <button className="bg-orange-500 rounded-md">Descargar Póster</button>
      </div>
    </div>
  );
}

export default Form;
