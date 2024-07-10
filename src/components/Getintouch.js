import React from 'react'
import mapImage from './img.jpg'
import './componentsCss/Getintouch.css'
export default function Getintouch() {
  return (
    <div className='gettouch'>
<div className="map"><a href="https://maps.app.goo.gl/vgWdNYQ4LbyEBj3R7" target='blank'><img src={mapImage} alt=''></img></a></div>
<div className="formcontainer">
  <div className="headings">
<h2 className="heading1">GET IN TOUCH</h2>
<p className="heading2">Have some questions ?</p>
<p className="heading3">feel free to ask them anytime</p>
</div>
<div className="form">
  <form action="">
    <input type="text" className='input' placeholder='Name'/>
    <span className="underline"></span>
    <input type="text" className="input" placeholder='Email'/>
    <span className="underline"></span>
    <input type="text" className="input" placeholder='Phone' />
    <span className="underline"></span>
    <input type="text" className="input" placeholder='Message' />
    <span className="underline"></span>
<button type='submit' className='submit'>Send message &rarr;</button>
  </form>
</div>

</div>
    </div>
  )
}
