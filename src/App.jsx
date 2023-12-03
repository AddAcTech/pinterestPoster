import React, { useState } from "react";
import Poster from "./components/Poster";
import Form from "./components/Form";

function App() {
  const [poster, setPoster] = useState({
    title: "TITLE",
    author: "DIRECTOR",
    year: "YEAR",
    image: "",
    starring: "ACTOR",
    running: "123",
    productor: "ALEXIS AGUILAR",
  });
  return (
    <div className="flex flex-col md:flex-row  md:h-screen items-center justify-center">
      <Poster poster={poster} />
      <Form setPoster={setPoster} />
    </div>
  );
}

export default App;
