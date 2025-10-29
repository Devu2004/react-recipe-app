import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'
const MainRoutes = () => {
  return (
    <>
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/recipe/details/:id' element={<SingleRecipe/>}/>
            <Route path='/createRecipe' element={<CreateRecipe/>}/>
        </Routes>
    </div>
    </>
  )
}

export default MainRoutes