import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs'
import ListsandKeys from '../ListsandKeys'
import Pagination from '../Pagination/Pagination'
import Users from '../Users'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ListsandKeys />} />
            <Route path='/contact-us' element={<ContactUs/>} />
            <Route path='/users' element={<Users />} />
            <Route path='/pagination' element={<Pagination />} />
        </Routes>
    </div>
  )
}

export default Routing