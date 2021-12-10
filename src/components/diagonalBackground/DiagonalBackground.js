import React, { useState } from 'react';
import './diagBackground.scss'
import { useMousePosition } from './useMousePosition'
import { PropTypes } from 'prop-types';


function calculateSkew(skewBase, handlePos, callback) {
  return !callback ? skewBase + handlePos : callback(skewBase,handlePos) 
}

function caclulateHandlePos(x,normalizedDiagonal, callback) {
    //const deltaSlow = (x - window.innerWidth * 0.5) + (x - window.innerWidth / 2) * 0.5;
  // for negative we need to add innerwidth as offset
  return !callback ? -(x + normalizedDiagonal) + window.innerWidth : callback(x,normalizedDiagonal);
}

function mapCatesianToDiagnoal(x, innerWidth) {
  //const deltaSlow = (x - window.innerWidth * 0.5) + (x - window.innerWidth / 2) * 0.5;
  //const delta = (x - window.innerWidth / 2) * 0.5;
  return  (x - innerWidth / 2) * 0.5;
}

const DiagonalBackground = (props) => {

  const { headingMain, headingSecondary, leftText, rightText } = props;

  const [isHoveringTop, setHoversTop] = useState(0);
  const onMouseOverBottom = () => {
    setHoversTop(false);
  }
  const onMouseOverTop = () => {
    setHoversTop(true);
  }

  const { x } = useMousePosition();
  const skew = 1000;
  const normalizedDiagonal = mapCatesianToDiagnoal(x, window.innerWidth);
  const handlePos = caclulateHandlePos(x,normalizedDiagonal)
  const backgroundMovement = calculateSkew(skew, handlePos)

  return (
    <section id='wrapper' className='skewed'>

      <div onMouseOver={() => onMouseOverTop()}
        id = 'top'
        style={{ width: backgroundMovement}} 
        className="layer top">
        <div className='content-wrap'>
          <div className='content-body'>
          {
              leftText &&  
              <>
              <h2>
                {leftText.heading && leftText.heading}
              </h2>
              <p>{leftText.text && leftText.text}</p>
              </>
            }
          </div>
          <img src='sky.png' alt='' />
        </div>
      </div>

      <div 
        onMouseOver={() => onMouseOverBottom()}
        id='bottom' 
        className='layer bottom'>
        <div className='content-wrap'>
          <div className='content-body'>
            {
              rightText &&  
              <>
              <h2>
                {rightText.heading && rightText.heading}
              </h2>
              <p>{rightText.text && rightText.text}</p>
              </>
            }
          </div>
          <img src='studio-dark.png' alt='' />
        </div>
      </div>

      <div className='name-container'>
        <h1>
          <span className='thin'>{headingMain}</span>
          <span className='bold'>{headingSecondary}</span>
        </h1>
      </div>
      <div style={{ 'left': handlePos }} className='handle'></div>

    </section>
  )
}


const sideText = {
  heading: PropTypes.string,
  text: PropTypes.string
}



DiagonalBackground.propTypes = {
  headingMain: PropTypes.string,
  headingSecondary: PropTypes.string,
  sideLeft: PropTypes.shape(sideText),
  sideRight: PropTypes.shape(sideText)

};

export default DiagonalBackground;