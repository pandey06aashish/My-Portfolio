import React from 'react'
import './Mywork.css'
import arrow_img  from '../../assets/pointerlogo.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={arrow_img} alt="" />
        </div>
        <div className="mywork-container">
             {mywork_data.map((work,index)=>{
                return <img key={index} src={work.work_img}alt=''/>
             })}
        </div>
        <div className="myworkshowmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork;