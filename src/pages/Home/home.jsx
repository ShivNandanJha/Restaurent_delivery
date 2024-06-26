import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/ExploreMenu/exploreMenu'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import { useState } from 'react'
const home = () => {
const[category,setCategory]=useState('All')

  return (
    <div>
          <Header />
        <ExploreMenu category = {category} setCategory = {setCategory} />
      <FoodDisplay categoty={ category} />
    </div>
  )
}

export default home
   