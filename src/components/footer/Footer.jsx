import React from 'react';
import "./footer.css";

const Footer = () => {
    
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Manisha</h1>

            {/* <ul className="footer__list"> 
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
                
            </ul>*/}

            <div className="footer__social">
                <a href="https://www.facebook.com/manishashah525" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/manisha_shah3" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; ManishaShah. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer