// import React from 'react';
// import '../style/style.css';

// function Projects() {
//   return (
//     <div className="bgimage" >
//       <h1 color='light'>Sharp & Beautiful</h1>
//       <h1 color='white'>The Edge Building</h1>
//       <h6 color='white'>Madrid,Spain</h6>
//       </div>
      
   
//   );


// }

// export default Projects;
import React from 'react';
import '../style/style.css';
 import i from '../images/P1.jpg'

function Projects() {
  return (
    <div className="bgimage">
      <div className="text-container">
        <h1 className="light">Sharp & Beautiful</h1>
        <h1 className="light">The Edge Building</h1>
        <h6 className="light">Madrid,Spain</h6>
       
         
      </div>
      <div className="image-container">
        
        <img src={i} alt=""  height={450} width={350}  />
        
         
      </div>

    </div>
  );
}

export default Projects;






