import React from 'react'

const Progress = (params) => {
  //set the progress radius style
  let progressBorder = `0px`

  //Count the percent of passed days
  let percent = (params.passed / params.total) * 100
  //check if today passes the end date
  if (params.passed >= params.total) {
    percent = 100
    progressBorder = `0px 0px 8px 0px`
  }

  return (
    <div className="progress-wrap">
      <div className="day-text">{params.total - params.passed} days left</div>
      <div className="progress">
        <div
          className="bar"
          style={{ width: `${percent}%`, borderRadius: progressBorder }}
        ></div>
      </div>
    </div>
  )
}

export default Progress
