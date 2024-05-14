import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import User from './assets/components/User/User.jsx'
import GitHub, { githubinfoLoader } from './assets/components/GitHub/GitHub.jsx'
// import path = 'user/:userid' element
// const router = createBrowserRouter([
//   {
//     path:'/',
// element : <Layout/>,
// children: [
//   {
//     path:"",
//     element:<Home />
//   },
//   {
//     path :"About",
//     element: <About />
//   },
//   {
//     path:"/contact",
//     element: <Contact />
//   }
// ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route path='' element ={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='user/:userid' element = {<User/>} />
        <Route
         loader={githubinfoLoader}
         path='github'
          element = {<GitHub/>} 
        />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>
)
