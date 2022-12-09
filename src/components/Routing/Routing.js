import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs'
import ListsandKeys from '../ListsandKeys'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ListsandKeys />} />
            <Route path='/contact-us' element={<ContactUs/>} />
        </Routes>
    </div>
  )
}

export default Routing