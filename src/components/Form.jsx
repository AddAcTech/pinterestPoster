import React, { useState, useRef } from "react";
//import * as htmlToImage from "html-to-image";

function Form({ setPoster }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [running, setRunning] = useState("");
  const [producer, setProducer] = useState("");
  const [starring, setStarring] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPoster({ title, author, year, image, starring, running, producer });
  };

  return (
    <div className="flex flex-col bg-[#add8e6] m-4 p-4 rounded-lg border-black border-solid border-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
      <p className="text-2xl font-bold text-[#323232]">Welcome,</p>
      <p className="text-[#636363] font-semibold">create your poster.</p>
      <input
        type="text"
        className="input"
        placeholder="Poster Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Poster Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Poster year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Running time"
        value={running}
        onChange={(e) => setRunning(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Producer"
        value={producer}
        onChange={(e) => setProducer(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Starring"
        value={starring}
        onChange={(e) => setStarring(e.target.value)}
      />
      <div className="my-2 flex gap-2 justify-center">
        <button className="input" onClick={handleSubmit}>
          Generate
        </button>
      </div>
    </div>
  );
}
export default Form;
