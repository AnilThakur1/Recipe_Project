
import "./footer.css";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer_image width_95">
          <div className="footer_wrapper">
            <div className="footer_top">
              <p>
                Speak to our expert at{" "}
                <a href="tel:1-800-453-6744">1-800-453-6744</a>
              </p>

              <div className="allicons">
                 <p className="follow">Follow Us</p>
                 <TiSocialFacebook className="icons"/>
                 <TiSocialLinkedin className="icons" />
                 <BiLogoInstagram className="icons" />
                
              </div>

             
            </div>

            <div className="footer_content">
              <div className="footer_column">
                <h4>Contact</h4>
                <p className="contact_para">
                  328 Queensberry Street, North Melbourne VIC3051, Australia.
                </p>
                <p>
                  <a className="contact_para" href="https://www.viator.com/">
                    hi@viatours.com
                  </a>
                </p>
              </div>

              <div className="footer_column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Tourz Reviews</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Travel Guides</a></li>
                  <li><a href="#">Data Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Legal</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Get in Touch</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">How it works</a></li>
                </ul>
              </div>

              <div className="footer_column">
                <h4>Newsletter</h4>
                <p className="letter_para">
                  Subscribe to the free newsletter and stay up to date
                </p>

                {/* <form className="newsletter_form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Send</button>
                </form> */}

                <form className="newsletter_form_mobile">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Send</button>
                </form>

                <div className="apps">
                  <h4 className="mobile_app">Mobile Apps</h4>
                  <a href="#">
                    <i className="fa-brands fa-app-store-ios"></i>
                    <span className="app_name">iOS App</span>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-android"></i>
                    <span className="app_name">Android App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
