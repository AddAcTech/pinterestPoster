import React from "react";
import Poster from "./components/Poster";
import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col md:flex-row  md:h-screen items-center justify-center">
      <Poster />
      <Form />
    </div>
  );
}

export default App;
