import React from "react";

function Poster() {
  return (
    <div>
      <div className="bg-[#f0e68c] p-[25px] w-[450px]">
        <div className="w-[400px] h-[400px] bg-[#ffe4c4] flex justify-center items-center mx-auto overflow-hidden object-contain mb-3">
          <img
            className="object-cover overflow-hidden"
            id="poster-image"
            src="default-image.jpg"
            alt="Poster Image"
          />
        </div>
        <h2 className="font-bold text-2xl" id="poster-title">
          Poster title
        </h2>
        <p className="font-bold text-xl" id="poster-description">
          Author
        </p>
        <p className="font-bold" id="poster-year">
          Poster Year
        </p>
      </div>
    </div>
  );
}

export default Poster;
