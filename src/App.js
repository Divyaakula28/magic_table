import "./App.css";
import Secondpage from "./Components/secondpage";
import Content from "./Components/Content"
import React from "react";
import Apps from './Components/Apps';
import Trail from './Components/Trail';
import Printing from './Components/Printing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/submagic' element={<Apps/>}Route/>
        <Route   path="/magic_table" element={<Secondpage />} />
        <Route exact path='/helloworld' element={<Trail/>}Route/>
        <Route exact path='/' element={<Content/>}Route/>
        <Route exact path='/hello' element={<Printing/>}Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* to={`/blog?name=${name}`}*/
