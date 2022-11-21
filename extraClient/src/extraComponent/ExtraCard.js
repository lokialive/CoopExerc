import React, { useEffect } from 'react'
import moment from 'moment'
import './index.css'
import axios from 'axios'
import carImage from '../images/car.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { get_extra_car } from '../redux/action/carAction'

const CarPage = () => {
  const car = useSelector((state) => state.car.car)
  const dispatch = useDispatch()
  const getExtraCar = async () => {
    const response = await axios
      .get('http://localhost:8000/api/car/extra/')
      .catch((err) => {
        console.log('Err', err)
      })
    dispatch(get_extra_car(response.data))
  }

  useEffect(() => {
    getExtraCar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Format and count date
  let endDate = moment(car.date_listing_ends)
  let startDate = moment(car.date_of_listing)
  let totalDays = endDate.diff(startDate, 'days') + 1
  let passedDays = 0 - startDate.diff(moment(), 'days')
  //set the border-radius of progress bar
  let progressBorder = `0px`
  if (passedDays >= totalDays) {
    passedDays = totalDays
    progressBorder = `0px 0px 8px 0px`
  }
  let percent = (passedDays / totalDays) * 100

  //Get the formatted start date
  let date = moment(car.date_of_listing).format('MMM D, YYYY')

  return (
    <div>
      <div className="no-padding my-card">
        <img className="image" src={carImage} alt="" />
        <div className="tag"> {car.tag}</div>
        {/* Detail Information under the Car Tag */}
        <div className="detail">
          <div className="start-text">{date}</div>
          <div className="title-text">{car.car_name}</div>

          {/* Information Table */}
          <div className=" row">
            <div className="para-text col-2 ">ENGINE</div>
            <div className="para-text col-3 ">HORSEPOWER</div>
            <div className="para-text col-3 ">TORQUE</div>
            <div className="para-text col-3">0-60 MPH</div>
          </div>
          <div className="row">
            <div className="detail-text col-2 ">{car.engine}</div>
            <div className="detail-text col-3 ">{car.horsepower} HP</div>
            <div className="detail-text col-3 ">{car.torque} Ib-ft</div>
            <div className="detail-text col-3 ">{car.sixty_mph} sec</div>
          </div>
          {/* The Split Line in the Middle */}

          <hr />

          <div className="row">
            <div className="col-9 para-text">BIDDING STATUS</div>
          </div>
          <div className="row">
            <div className="col-9 detail-text">{car.bidding_status}</div>
          </div>

          {/* Deail Page HyperLink */}
          <div className="detail-link">
            <a href="http://ViewCar.com">View Car &rarr; </a>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="progress-wrap">
          <div className="day-text">{totalDays - passedDays} days left</div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${percent}%`, borderRadius: progressBorder }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarPage
