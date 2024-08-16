import React from 'react'
import NavBar from './NavBar/NavBar.jsx'
import PrincipalMenu from './desk/PrincipalMenu.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Helps from './pages/Helps.jsx'
import Link from './pages/Link.jsx'
import Live from './pages/Live.jsx'
import More from './pages/More.jsx'
import Note from './pages/Note.jsx'
import Packs from './pages/Packs.jsx'
import Push from './pages/Push.jsx'
import Shop from './pages/Shop.jsx'
import Login from './pages/Login.jsx'
import Try from './pages/Try.jsx'
import Find from './pages/Find.jsx'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes >
        <Route path='/' element={<PrincipalMenu/>}/>
        <Route path='/helps' element={<Helps/>}/>
        <Route path='/link' element={<Link/>}/>
        <Route path='/live' element={<Live/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/note' element={<Note/>}/>
        <Route path='/packs' element={<Packs/>}/>
        <Route path='/push' element={<Push/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Golive' element={<Try/>}/>
        <Route path='/find' element={<Find/>} />

      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
