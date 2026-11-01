import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loader from './App/index'
import React from "react";

function App():React.JSX.Element {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
