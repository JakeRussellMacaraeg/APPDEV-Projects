import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'

function App() {
  const fruits = [
    {id: 1, name: "Apple", color:"red"},
    {id: 2, name: "Banana", color: "yellow"},
    {id: 3, name: "Orange", color: "Orange"},
    {id: 4, name: "Grape", color: "purple"},
    {id: 5, name: "Kiwi", color: "green"}
]

  const desserts = [
    {id: 1, name: "Cake", color:"red"},
    {id: 2, name: "Ice Cream", color:"blue"},
    {id: 3, name: "Pie", color:"green"},
]
  return (
    <>
    <Header/>
    {fruits.length > 0 && <ListOfFruits items = {fruits} category = "My Favorite Fruit"/>}
    {desserts.length > 0 && <ListOfFruits items = {desserts} category = "My Favorite Desserts"/>}
    <Footer/>
    </>
  )
}

export default App
