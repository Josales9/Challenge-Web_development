import {} from 'react'
import Nav from './components/navbar/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
     
    </>
  )
}

export default App
