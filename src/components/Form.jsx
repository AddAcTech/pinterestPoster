import React from "react";

function Form() {
  return (
    <div className="flex flex-col bg-[#add8e6] m-4 p-4 rounded-lg border-black border-solid border-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
      <p className="text-2xl font-bold text-[#323232]">Welcome,</p>
      <p className="text-[#636363] font-semibold">create your poster.</p>
      <input type="text" className="input" placeholder="Poster Title" />
      <input type="text" className="input" placeholder="Author" />
      <input type="text" className="input" placeholder="Poster year" />
      <input type="text" className="input" placeholder="Poster Image" />
      <div className="my-2 flex gap-2 justify-center">
        <button className="input">Generate</button>
        <button className="input">Download</button>
      </div>
    </div>
  );
}

export default Form;
