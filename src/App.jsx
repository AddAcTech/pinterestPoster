import React, { useState } from "react";
import Poster from "./components/Poster";
import Form from "./components/Form";

function App() {
  const [poster, setPoster] = useState({
    title: "",
    author: "",
    year: "",
    image: "",
    starring: "",
    running: "",
    productor: "",
  });
  return (
    <div className="flex flex-col md:flex-row  md:h-screen items-center justify-center">
      <Poster poster={poster} />
      <Form setPoster={setPoster} />
    </div>
  );
}

export default App;
