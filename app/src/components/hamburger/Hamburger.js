
import React from 'react';

const Hamburger = (props) => {

  const setHamburger = () => {
    props.updateStatus();
  };

  return (
    <div className={props.status ? 'hamburger hamburger--open' : 'hamburger'}
    onClick={setHamburger}>
        <span className='hamburger__bar1'></span>
        <span className='hamburger__bar2'></span>
        <span className='hamburger__bar3'></span>
    </div>
  );
}

export default Hamburger;