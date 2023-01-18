import logo from "../assets/svg/retinklogo.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import linkedin from "../assets/svg/linkedin.svg";
import youtube from "../assets/svg/youtube.svg";
import pinterest from "../assets/svg/pinterest.svg";
import styles from "./Footer.modules.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-address-left">
          <div className="footer-logo">
            <img src={logo} alt="logo-footer" />
          </div>
          <div className="footer-address">
            <ul className="left">
              <li>Product by Retink Media UG</li>
              <li>Get Early Access</li>
            </ul>
            <ul className="right">
              <li>Bonn, Germany</li>
              <li>Provide Feedback</li>
            </ul>
          </div>
        </div>
        <div className="footer-social-connection">
          <div className="footer-contact-right">
            <h2 className="footer-contact-title">Connect with Us</h2>
            <div className="footer-social-media">
              <img
                src={facebook}
                alt="facebook"
                className="footer-social-media"
              />
              <img
                src={twitter}
                alt="twitter"
                className="footer-social-media"
              />
              <img
                src={instagram}
                alt="instagram"
                className="footer-social-media"
              />
              <img
                src={linkedin}
                alt="linkedin"
                className="footer-social-media"
              />
              <img
                src={youtube}
                alt="youtube"
                className="footer-social-media"
              />
              <img
                src={pinterest}
                alt="pinterest"
                className="footer-social-media"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-copyright">
          <p>Copyright © 2021 Retink</p>
        </div>
        <div className="footer-more-info">
          <a href="/" className="footer-policy">
            Privacy Policy
          </a>
          <a href="/" className="footer-terms">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
