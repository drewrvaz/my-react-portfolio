import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div>
      <h3>Hello I'm</h3>
        <h1>Andrew Vazquez</h1>
        <p>Fullstack Developer</p>
        <button id='resume'>Download Resume</button>
        <button id='contact'>Let's Talk</button>
    </div>
  )
}

export default Header