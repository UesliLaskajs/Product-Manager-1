import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path='/products/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
