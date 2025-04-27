import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { ToastContainer } from 'react-toastify'



function App() {



  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
