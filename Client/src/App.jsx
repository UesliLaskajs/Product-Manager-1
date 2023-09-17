import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Updata';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path='/products/:id' element={<Details/>}/>
      <Route path='/products/update/:id' element={<Update/> }></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
