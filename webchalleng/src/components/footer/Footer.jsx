import {} from 'react';
import './style_footer.css';
import Logo_HC from '../../assets/img/logo HC.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <>
      <div id="footer_content">
          <div id="footer_contacts">
              <p>Em parceria com:</p>
                  <img src={Logo_HC} alt=""/>
                  <div id="footer_social_media">
                      <a href="#" className="footer-link" id="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="#" className="footer-link" id="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="#" className="footer-link" id="whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                  </div>
          </div>
          <ul className="footer-list">
              <li>
                  <h3>Blog</h3>
              </li>
              <li>
                  <a href="#" className="footer-link">Tech</a>
              </li>
              <li>
                  <a href="#" className="footer-link">Adventures</a>
              </li>
              <li>
                  <a href="#" className="footer-link">Music</a>
              </li>
          </ul>

          <ul className="footer-list">
              <li>
                  <h3>Products</h3>
              </li>
              <li>
                  <a href="#" className="footer-link">App</a>
              </li>
              <li>
                  <a href="#" className="footer-link">Desktop</a>
              </li>
              <li>
                  <a href="#" className="footer-link">Cloud</a>
              </li>
          </ul>
          
          <div id="footer_subscribe">
                  <h3>Subscribe</h3>
                  <p>Enter your E-mail to get modified about our news solutions</p>

                  <div id="input_group">
                      <input type="email" id="email"/>
                      <button>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </button>
                  </div>
          </div>
      </div>
      <div id="footer_copyright">
          &#169
          2024 all rights reserved
      </div>
      </>
  );
}
export default Footer;
