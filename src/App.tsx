import React from "react";
import {useMediaQuery} from "react-responsive";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loader from './App/index'
import FourOhFour from "./App/pages/404.tsx";
import OnMobile from "./App/pages/ResponiveMedia.jsx.tsx";

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

function Responsive():React.JSX.Element{
    const desk:boolean = useMediaQuery({query:'(min-width: 1214px)'})

    return (
        <>
            { desk ? <App/> : <OnMobile/> }
        </>
    )
}

export default Responsive
