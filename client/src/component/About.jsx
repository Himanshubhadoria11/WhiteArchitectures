import React from 'react'
import '../style/about.css'
import whitedesign from '../images/DesignWhite.png'


function About() {
  return (
    
    <div className="aboutimage">
      <br /><br /><br /><br />

      <div className="white" >
        <img src={whitedesign} alt="" height={400} width={1000} />
      </div>
     <div className="text-containe">
        <h6 className="light">Architecture is the learned game,correct and magnificent,</h6>
        <h6 className="light">of forms assembled in the light.So keeping this in mind we</h6>
        <h6 className="light">started with our work.We are a team of 5 Architects with a</h6>
        <h6 className="light">clean and white vision</h6>
         
      </div>
      <div className="textheader">
        <h6 className="light"><span className="highlight">A</span>bout</h6>
        
      
      <div/> 
      
     </div>
    </div>
    
    
   
  )
}

export default About