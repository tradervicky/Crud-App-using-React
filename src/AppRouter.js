import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import App from './App';
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/create' element={<Add/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/delete' element={<Delete/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;