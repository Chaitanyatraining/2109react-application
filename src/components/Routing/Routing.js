import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs'
import UseEffectPagination from '../Hooks/UseEffectPagination'
import UserDataEffect from '../Hooks/UserDataEffect'
import UseReducerHook from '../Hooks/UseReducerHook'
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
            <Route path='/userDataEffect' element={<UserDataEffect />} />
            <Route path='/useEffectPagination' element={<UseEffectPagination />} />
            <Route path='/UseReducerHook' element={<UseReducerHook />} />
        </Routes>
    </div>
  )
}

export default Routing