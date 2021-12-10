import './style/App.scss';
import { useMousePosition } from './components/useMousePosition'
import React, { useState } from 'react';

function App() {

  const [isHoveringTop, setHoversTop] = useState(0);
  const { x } = useMousePosition();
  const skew = 1000;
  //const deltaSlow = (x - window.innerWidth * 0.5) + (x - window.innerWidth / 2) * 0.5;
  const delta = (x - window.innerWidth / 2) * 0.5;
  // x- delta gives a slower transition which can be nice
  // const handlePos = x - delta 

  // for negative we need to add innerwidth as offset
  const handlePos = -(x + delta) + window.innerWidth;
  const onMouseOverBottom = () => {
    setHoversTop(false);
  }
  const onMouseOverTop = () => {
    setHoversTop(true);
  }

  return (
    <section id='wrapper' className='skewed' ß>

      <div onMouseOver={() => onMouseOverTop()}
        style={{ width: skew + handlePos }} className="layer top">
        <div className='content-wrap'>
          <div className='content-body'>
            <h2>Developer /</h2>
            <h2>Designer</h2>
          </div>
          <img src='sky.png' alt='' />
        </div>
      </div>

      <div onMouseOver={() => onMouseOverBottom()}
        id='bottom' className='layer bottom'>
        <div className='content-wrap'>
          <div className='content-body'>
            <h2>Producer</h2>
            <p>Check out my music</p>
          </div>
          <img src='studio-dark.png' alt='' />
        </div>
      </div>

      <div className='name-container'>
        <h1>
          <span className='thin'>John</span>
          <span className='bold'> Gidskehaug</span>
        </h1>
      </div>


      <div style={{ 'left': handlePos }} className='handle'></div>

    </section>

  );
}

export default App;
