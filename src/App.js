import './style/App.scss';
import React from 'react';
import DiagonalBackground from './components/diagonalBackground/DiagonalBackground';

function App() {
  return (
    <section id='wrapper' className='skewed'>
        <DiagonalBackground
          headingMain ='John'
          headingSecondary = 'Gidskehaug'
          leftText = {{heading:'DEVELOPER / DESIGNER',text:'Check my work'}}
          rightText = {{heading:'PRODUCER',text:'Check my music'}}
        />
    </section>
  );
}

export default App;
