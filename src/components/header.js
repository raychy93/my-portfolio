import React from "react"
import { Link } from "gatsby"
import {
  navLinks,
  navText,
} from './layout.module.css'






const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">

      
        <div classame="logo">
          <Link to="/" className={navText}>RayhanChowdhury</Link>
        </div>

        <div className="navigation">
          <nav>
           <Link to="/rando " className={navLinks}>About</Link>
            <Link to="/work" className={navLinks}>Work</Link>
            <Link to="/contact" className={navLinks}>Contact</Link>
          </nav>
      </div>
      </div>
    </div>
  </header>
)

export default Header
