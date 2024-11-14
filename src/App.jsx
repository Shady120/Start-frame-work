import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Compomet/footer/Footer'
import Navbar from './Compomet/Navbar/Navbar'
import Portfolio from './Compomet/Portfolio/Portfolio'
import Contact from './Compomet/Contact/Contact'
import About from './Compomet/About/About'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import Layout from './Compomet/Layout/Layout'


let router = createBrowserRouter([

{path:"" , element:<Layout/>,
  children: 
[
  {index:true, element:<About/>},
  {path:"Portfolio", element:<Portfolio/>},
  {path:"Contact", element:<Contact/>},
  {path:"*", element:<div className='h-screen bg-sky-100 flex justify-center items-center'><h2> 4 O 4</h2></div>},

]}




])




 function App() {
const [count, setCount] = useState(0)
  
  return (
    <>
    {/* <Layout /> */}
    <RouterProvider  router={router}/>
    </>
  )
}

export default App