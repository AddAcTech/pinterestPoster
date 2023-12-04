import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";

function Poster({ poster }) {
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
      <div
        ref={node}
        className="bg-[#dcd9d2] p-[25px] max-w-md my-2 md:my-0"
        id="poster"
      >
        <div className="w-full bg-[#ffe4c4] flex justify-center items-center mx-auto overflow-hidden object-contain mb-3">
          <img
            className="object-cover overflow-hidden h-[300px] "
            id="poster-image"
            src={poster.image}
            alt="Poster Image"
          />
        </div>
        <div className="overflow-hidden">
          <span className="font-bold text-[#2b2b28] text-4xl tracking-tighter">
            {poster.title.toUpperCase()}
          </span>
          <span className="font-medium ml-2">{poster.year}</span>
        </div>
        <div className="font-normal">
          <p>running time {poster.running} minutes</p>
        </div>
        <div className="font-normal">
          <span>directed by</span>
          <span className="ml-2">{poster.author.toUpperCase()}</span>
        </div>
        <div className="font-normal">
          <span>produced by</span>
          <span className="ml-2">
            {poster.producer ? poster.producer.toUpperCase() : "PRODUCER"}
          </span>
        </div>
        <div className="mt-2 font-normal ">
          <span>starring</span>
          <span className="ml-2">{poster.starring.toUpperCase()}</span>
        </div>
      </div>
      <button className="input w-full" onClick={generatePoster}>
        Download
      </button>
    </div>
  );
}
export default Poster;
