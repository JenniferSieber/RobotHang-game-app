import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <header className="nav">
        <nav className='nav-container'>
          
          <div className='brand'>
            <div>
              <FontAwesomeIcon icon={faRobot} />
                RobotHang
            </div>
          </div>
          
          <div className='links-container'>
            <ul className='links'>
              <li><a href="#">Login</a></li>
              <li><a href="#">Signup</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          
        </nav>
    </header>
  )
}

export default Navbar;
