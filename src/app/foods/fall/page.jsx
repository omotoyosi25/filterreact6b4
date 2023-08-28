"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Icon from '../Icon'
import styles from '../../styles/food.module.css'

const foods = [
    {
      name: "Strawberries",
      class: "Fruit",
      season: "Spring"
    },
    {
      name: "Pumpkin",
      class: "Vegetable",
      season: "Fall"
    },
    {
      name: "Salmon",
      class: "Seafood",
      season: "Year-round"
    },
    {
      name: "Broccoli",
      class: "Vegetable",
      season: "Fall, Spring"
    },
    {
      name: "Chocolate",
      class: "Sweets",
      season: "Year-round"
    },
    {
      name: "Asparagus",
      class: "Vegetable",
      season: "Spring"
    },
    {
      name: "Apple",
      class: "Fruit",
      season: "Fall"
    },
    {
      name: "Cucumber",
      class: "Vegetable",
      season: "Summer"
    },
    {
      name: "Shrimp",
      class: "Seafood",
      season: "Year-round"
    },
    {
      name: "Avocado",
      class: "Fruit",
      season: "Year-round"
    },
    {
      name: "Carrot",
      class: "Vegetable",
      season: "Fall, Winter"
    },
    {
      name: "Ice Cream",
      class: "Sweets",
      season: "Year-round"
    },
    {
      name: "Mango",
      class: "Fruit",
      season: "Summer"
    },
    {
      name: "Spinach",
      class: "Vegetable",
      season: "Spring, Fall"
    },
    {
      name: "Beef",
      class: "Meat",
      season: "Year-round"
    },
    {
      name: "Pear",
      class: "Fruit",
      season: "Fall"
    },
    {
      name: "Potato",
      class: "Vegetable",
      season: "Year-round"
    },
    {
      name: "Peach",
      class: "Fruit",
      season: "Summer"
    },
    {
      name: "Egg",
      class: "Dairy",
      season: "Year-round"
    }
  ]

  
  
  export default function Food() {
    const [searchFood, setSearchFood] = useState('')

    const fallFood = foods.filter(food => food.season === 'Fall')
    
    const foodfiltered = fallFood.filter(food => food.name.toLowerCase().includes(searchFood.toLowerCase()) || food.season.toLowerCase().includes(searchFood.toLowerCase()))

    function temi(e){
      setSearchFood(e.target.value)
    }
  
    const foodClass =foodfiltered.map(food => (
      <section key={Math.random()} className={styles.section}>
          <h2>{food.name}</h2>
          <Image src={`https://robohash.org/${food.name}`} alt={food.name} width={250} height={250}/>
          <Icon />
      </section>
    )) 
   

  return (
    <>
    <div className='flex items-center justify-center my-5'>
    <input type="text" name="" id="" placeholder='search for food'
    className='w-[40%] outline-none  py-2 border-b-2 border-solid border-b-blue-600'
    value={searchFood} 
    onChange={temi}/>

    </div>

    <div className={styles.main}>

        {foodClass}
    </div>
    </>
  )
}
