import '../styles/footer.css';
import React from 'react';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section_padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>For Business</h4>
                    <a href='/employeer'>
                        <p>Employeer</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/individual'>
                        <p>Individual</p>
                    </a>

                </div>
                <div className='sb__footer-links_div'>
                    <h4>Resources</h4>
                    <a href='/resource'>
                        <p>Resource center</p>
                    </a>
                    <a href='/resource'>
                        <p>Testimonials</p>
                    </a>
                    <a href='/resource'>
                        <p>STV</p>
                    </a>      
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Partners</h4>
                    <a href='/employer'>
                        <p>Swing Tech</p>
                    </a> 
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Company</h4>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/press'>
                        <p>Press</p>
                    </a>
                    <a href='/career'>
                        <p>Career</p>
                    </a>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </div>
            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @(new Date().getFullYear()) CodeInn. All right reserved.
                    </p>
                </div>
                <div className='sb__footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>  

            </div>
        </div>
    </div>
  )
}
