import './App.css'
import Navbar from './component/Navbar'
import TextForm from './component/textForm'
import About from './component/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar title="NewNavbar" home="SweetHome" />
        <div className='container'>
          <TextForm heading="enter your text to analyze" />
        </div> </>
    },
    {
      path: "/about",
      element: <>
        <Navbar title="NewNavbar" home="SweetHome" />
        <About /></>
    }
  ])

  return (
    <>
      {/* <Navbar title="NewNavbar" home="SweetHome" />     these are knows as props */}
      {/* <div className='container'>
        <TextForm heading="enter your text to analyze"/>
        </div> */}
      <RouterProvider router={router} />

    </>
  )
}

export default App
