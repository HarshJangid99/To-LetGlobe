import React from 'react'
import './componentsCss/Footer.css'
import { FaInstagram, FaFacebook , FaLinkedin , } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='footercontainer'>
<div className="address">
<p className='title'> &#8640; address</p>
<p>D1/122 vipulkhand,Gomtinagar Lucknow, <br/>
     Uttar Pradesh</p>
</div>
<div className="phone">
<p className='title'> &#8640;phone</p>
<a style={{ textDecoration : 'none'}} href="tel:+918707727347"><p>+91-8707727347</p></a>
</div>
<div className="email">
<p className='title'> &#8640;email</p>
<a href="mailto:hello@example.com" style={{textDecoration : 'none'}}><p > hello@toletglobe.in</p></a>
</div>
<div className="social">
<p className='title'> &#8640;social</p>
<div className="socialapps">
<a href="https://www.instagram.com/to_let_globe/reels/"  rel="noreferrer" target='_blank'><FaInstagram size={32} style={{ color: 'white', height: '18px' }} /></a>
<a href="https://www.facebook.com/toletglobe/" rel="noreferrer"  target='_blank'> <FaFacebook size={32} style={{ color: 'white',height: '18px' }}/></a>
<a href="https://www.linkedin.com/company/to-let-globe/mycompany/"  rel="noreferrer"  target='_blank'><FaLinkedin size={32} style={{color : 'white' , height : '18px'}}/></a>
     
</div>
</div>
    </div>
  )
}
