import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loader from './App/index'
import FourOhFour from "./App/pages/404.tsx";
import React from "react";

function App():React.JSX.Element {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader/>} />
          <Route path="*" element={<FourOhFour/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
