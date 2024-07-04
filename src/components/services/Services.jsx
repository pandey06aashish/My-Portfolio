import React from 'react'
import "./Services.css"
import cursor from '../../assets/pointerlogo.svg'
import Services_Data from '../../assets/Services-Data.js'
import arrow_icon from '../../assets/arrow.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={cursor} alt=''/>
        </div>
        <div className='services-container'>
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services;