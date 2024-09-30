import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Nft from './Pages/Nft/Nft'
import Logar from './container/loginContainer/logar'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/logar" element={<Logar />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
