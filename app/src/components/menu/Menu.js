import React from 'react';
import {
  Link
} from "react-router-dom";

const Menu = (props) => {

  return (
    <div className={props.status ? 'menu menu--open' : 'menu'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  );
}

export default Menu;