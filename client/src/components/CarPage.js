import { useState, useEffect } from 'react'
import Card from '../components/Card'
const CarPage = () => {
  const [car, setCar] = useState([])

  //first load the component
  useEffect(() => {
    getCar()
  }, [])

  //Fetch api to get data
  let getCar = async () => {
    let response = await fetch('http://localhost:8000/api/car/')
    let data = await response.json()
    setCar(data)
  }

  return (
    <div>
      <Card carInfo={car} />
    </div>
  )
}

export default CarPage
