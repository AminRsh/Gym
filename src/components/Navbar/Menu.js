import React from 'react'
import './Menu.css'

const Menu = ({ openMenu }) => (
  
  <div className={openMenu ? "menu" : "menu hidden"}>
      <a href="#hero">home</a>
      <a href="#join">join</a>
      <a href="#pricing">pricing</a>
      <a href="#gallery">gallery</a>
      <a href="#features">features</a>
      <a href="#trainers">trainers</a>
      <a href="#summer">offers</a>
  </div>
);

export default Menu