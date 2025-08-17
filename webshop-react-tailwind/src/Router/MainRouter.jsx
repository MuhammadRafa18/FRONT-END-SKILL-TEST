import React from 'react'
import { Route, Router, Routes } from 'react-router'
import { Home } from '../Component/Home'
import { Product } from '../Component/Product'
import { About } from '../Component/About'

export const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product/>} />
        <Route path='/About' element={<About/>} />
    </Routes>
  )
}
