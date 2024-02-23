import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Quote from "./components/Quote";

const App = () => {
  return (
    <>
      <Navbar />
      <Quote />
      <div className="container p-5">
        <Form />
        <ListGroup />
      </div>
    </>
  );
};

export default App;
