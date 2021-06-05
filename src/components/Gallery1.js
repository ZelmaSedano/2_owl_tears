import React from 'react';
import Gallery from 'react-photo-gallery';

import './Gallery.css';
import { photos } from './photos';

/* popout the browser and maximize to see more rows! -> */
function Gallery1() {
  return (
    <div>
      <div className='gallery-container'>
        <div className='gallery-wrapper'>
          <Gallery photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default Gallery1;
