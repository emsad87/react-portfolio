import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav id='navPanel' className='nav'>
        <ul className='navList'>
          <li>
            <a href='#intro' className='navLink'>
              Intro
            </a>
          </li>
          <li>
            <a href='#portfolio' className='navLink'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#skills' className='navLink'>
              Skills
            </a>
          </li>
          <li>
            <a href='#about' className='navLink'>
              About Me
            </a>
          </li>
          <li>
            <a href='#experience' className='navLink'>
              Experience
            </a>
          </li>
          <li>
            <a href='#education' className='navLink'>
              Education
            </a>
          </li>
          <li>
            <a href='#contact' className='navLink'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
