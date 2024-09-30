import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Nft from './Pages/Nft/Nft'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nft" element={<Nft />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
