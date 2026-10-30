import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loader from './App/index'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
