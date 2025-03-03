

import React from 'react';
import '../style/news.css';

function News() {
  return (
    <div className="newsbackground">
      <div className="newscontainer">
        <div className="newsitem">
          <img src="" alt="News 1" className="newsimage" />
          <p className="news-description">Description of news 1</p>
        </div>
        <div className="newsitem">
          <img src="image2.jpg" alt="News 2" className="newsimage" />
          <p className="news-description">Description of news 2</p>
        </div>
        <div className="newsitem">
          <img src="image3.jpg" alt="News 3" className="newsimage" />
          <p className="news-description">Description of news 3</p>
        </div>
        <div className="newsitem">
          <img src="image4.jpg" alt="News 4" className="newsimage" />
          <p className="news-description">Description of news 4</p>
        </div>
      </div>
    </div>
  );
}

export default News;
