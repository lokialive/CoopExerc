import React from 'react'
import car from '../images/car.jpg'
import moment from 'moment'
import Progress from './Progress'

const Card = (params) => {
  //Get and count the date
  let endDate = moment(params.carInfo.date_listing_ends)
  let startDate = moment(params.carInfo.date_of_listing)
  let totalDays = endDate.diff(startDate, 'days') + 1
  let passedDays = 0 - startDate.diff(moment(), 'days')
  if (passedDays > totalDays) passedDays = totalDays

  //Format the start date to show on the card
  let start = startDate.format('MMM D, YYYY')

  return (
    <div>
      <div className="card">
        <img className="image" src={car} alt="car" />
        <div className="tag">
          <p> {params.carInfo.tag}</p>
        </div>

        {/* Information Under the Car Tag */}
        <div className="card-detail">
          <h2>{start}</h2>
          <h1>{params.carInfo.car_name}</h1>
          <div className="container">
            <div>
              <p className="para-text">ENGINE</p>
              <p className="info">{params.carInfo.engine}</p>
            </div>
            <div>
              <p className="para-text">HORSEPOWER</p>
              <p className="info">{params.carInfo.horsepower} HP</p>
            </div>
            <div>
              <p className="para-text">TORQUE</p>
              <p className="info">{params.carInfo.torque} Ib-ft</p>
            </div>
            <div>
              <p className="para-text">0-60 MPH</p>
              <p className="info">{params.carInfo.sixty_mph} sec</p>
            </div>
          </div>

          {/* Split Line in the Middle */}
          <div className="mid-line"></div>

          <div className="container2">
            <div>
              <p className="para-text">BIDDING STATUS</p>
              <p className="info">{params.carInfo.bidding_status}</p>
            </div>
          </div>

          {/* Detail Link */}
          <div className="detail-link">
            <a href="http://ViewCar.com">View Car &rarr; </a>
          </div>
        </div>

        {/* Progress Bar of the Date */}
        <Progress total={totalDays} passed={passedDays} />
      </div>
    </div>
  )
}

export default Card
