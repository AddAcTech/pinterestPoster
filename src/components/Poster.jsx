import React, { useRef } from "react";
import bat from "../assets/bat.jpg";
import * as htmlToImage from "html-to-image";

function Poster() {
  const node = useRef(null);
  function generatePoster() {
    if (node.current) {
      htmlToImage
        .toJpeg(node.current, { quality: 0.95 })
        .then(function (dataUrl) {
          let link = document.createElement("a");
          link.download = "myPoster.jpeg";
          link.href = dataUrl;
          link.click();
        });
    }
  }

  return (
    <div>
      <div ref={node} className="bg-[#dcd9d2] p-[25px] w-[450px]" id="poster">
        <div className="w-[400px] h-[400px] bg-[#ffe4c4] flex justify-center items-center mx-auto overflow-hidden object-contain mb-3">
          <img
            className="object-cover overflow-hidden"
            id="poster-image"
            src={bat}
            alt="Poster Image"
          />
        </div>
        <div>
          <span className="font-bold text-2xl" id="poster-title">
            THE BATMAN
          </span>
          <span className="font-bold ml-2" id="poster-year">
            2021
          </span>
        </div>
        <div>
          <span className="font-bold text-xl" id="poster-description">
            DIRECTED BY
          </span>
          <span className="font-bold text-xl ml-2" id="poster-year">
            Matt Reeves
          </span>
        </div>
      </div>
      <button className="input w-full" onClick={generatePoster}>
        Download
      </button>
    </div>
  );
}

export default Poster;
