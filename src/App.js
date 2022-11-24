import logo from "./logo.svg";
import "./App.css";
import Secondpage from "./secondpage";
import React from "react";
import { useState } from "react";
import Apps from './Apps';
import Trail from './Trail';
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Apps/>}Route/>
        <Route   path="/magic_table" element={<Secondpage />} />
        <Route exact path='/helloworld' element={<Trail/>}Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* to={`/blog?name=${name}`}*/
