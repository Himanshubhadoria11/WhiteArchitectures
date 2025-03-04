

import React from 'react';
import '../style/news.css';
import img1 from '../images/N1.png'
import img2 from '../images/N2.png'
import img3 from '../images/N3.png'
import img4 from '../images/N4.png'

function News() {
  return (
    <div className="newsbackground">
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <div className="textheader">
        <h6 className="light"><span className="highlight">A</span>bout</h6>
        
      
      <div/>  */}
      <div className="textheader">
      <h6 className="light"><span className="highlight">N</span>ews</h6>
      </div>
      <div className="newscontainer">
        <div className="newsitem">
          <img src={img1} alt="News 1" className="newsimage" height={200} width={350}/>
          <p className="light">White Architecture work was mentioned as best
            in one of the spacious interior as well clean Design
            in UNI-COS Magazine of the year 2020
          </p>
        </div>
        <br />
        <div className="newsitem">
          <img src={img2} alt="News 2" className="newsimage" height={200} width={350}/>
          <p className="light">D&D Magazine 2020 added an article on our work
            of "Space and Light" saying about the design trend 
            that we are setting out there
          </p>
        </div>
        <br />
        <div className="newsitem">
          <img src={img3} alt="News 3" className="newsimage" height={200} width={350}/>
          <p className="light">White Architecture work was mentioned as best
            in one of the spacious interior as well clean Design
            in UNI-COS Magazine of the year 2020</p>
        </div>
        <br />
        <div className="newsitem">
          <img src={img4} alt="News 4" className="newsimage" height={200} width={350}/>
          <p className="light">D&D Magazine 2020 added an article on our work
            of "Space and Light" saying about the design trend 
            that we are setting out there</p>
        </div>
      </div>
    </div>
  );
}

export default News;
