import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './components/Dashbord/Dashbord'
import Add from './components/Add/Add'
import List from './components/List/List'
import Edit from './components/Edit/Edit'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dashbord /> } />
          <Route path='/add' element={ <Add /> } />
          <Route path='/list' element={ <List /> } />
          <Route path='/edit/:id' element={ <Edit /> } />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
