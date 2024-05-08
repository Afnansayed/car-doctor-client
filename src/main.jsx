import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import Authproviders from './Providers/Authproviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
   <Authproviders>
   <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
   </Authproviders>
  </div>
)
