import React from 'react'
import '../style/contact.css'
import cu1 from '../images/CU1.png'
import cu2 from '../images/CU2.png'
import cu3 from '../images/CU3.png'

function Contact() {
  return (
   

<div className="contactbackground">
  <br /><br /><br /><br /><br /><br /><br /><br />

 <div className='textheader'>
 <h6 className="dark"><span className="highlight">C</span>ontactUs</h6>
 </div>
  <div>
    <img src={cu1} alt="" height={100} width={100}/>
    <p>White Architectures 
      2787 Street, Fremont 
      Calfornia 
      94538
    </p>
  </div>
  <br /><br />
  <div>
    <img src={cu2} alt="" height={100} width={100}/>
    <p>wagetintouch@whitearch.com
    </p>
  </div>
  <br /><br />
  <div>
    <img src={cu3} alt="" height={100} width={100}/>
    <p>510-979-9360
    </p>
  </div>



</div>
  
  )
}

export default Contact