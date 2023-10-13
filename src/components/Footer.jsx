import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container">     
        <div>
          <a href="#" className="brand-sm"> 
            <FontAwesomeIcon icon={faRobot} />
              RobotHang
          </a>
        </div>            
  
        <div className="social-icons-container">
          <a href="https://twitter.com/JenWebDev">
            <FontAwesomeIcon icon={faTwitter} className="social-icons" />
          </a>
          <a href="https://www.instagram.com/jennifer_webdev/">
            <FontAwesomeIcon icon={faInstagram} className="social-icons" />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-sieber-74a54726b/">
            <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-sieber-74a54726b/">
            <FontAwesomeIcon icon={faGithub} className="social-icons" />
          </a>
        </div>
        <div className="dev">
          <a href="https://https://github.com/JenniferSieber" className="dev-link" target="_blank">created by: Jennifer Sieber &copy;2023</a>
        </div> 
      </section>
    </footer>
  )
}

export default Footer;