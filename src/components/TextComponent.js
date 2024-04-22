import React from 'react';
import Transition from './TextTransition';
import './TextComponent.css';

const TextComponent = () => {
  return (
    <div className='text-container'>
      <div>
        <h2 className='text-heading'>Best service</h2>
        <h2 className='text-heading'>provided by us:</h2>
        <h1 className='text-main-heading'>IOS Development</h1>
        <hr className='custom-hr' />
        <Transition />
      </div>
    </div>
  );
};

export default TextComponent;
