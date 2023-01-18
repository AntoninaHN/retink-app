import avatar from "../assets/svg/retink-avatar.svg";
import logo from "../assets/svg/retinklogo.svg";
import styles from "./Header.modules.css";

function Header() {
  return (
    <div className="header">
      <div>
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-title">
          <h1 className="main-title">
            Get Advanced AI
            <br />+ ExpertCreated
            <span className="highlight-title"> Logos</span>
          </h1>
          <div className="header-description">
            <p>
              Boost your sales <span className="highlight"> 10x </span>
              faster with content customised by our <br></br>
              unique partnership of
              <span className="highlight">
                {" "}
                human creativity and AI optimization{" "}
              </span>
            </p>
          </div>
          <div className="signup-link">
            <a href="/" className="link">
              Sign Up For The BETA!
            </a>
          </div>
          <div className="header-signup">
            <p>
              <input placeholder="Business Name" className="input-info" /> would
              like a beta invite sent to{" "}
              <input placeholder="@email address" className="input-info" /> when
              it's ready!
            </p>
          </div>
          <div className="header-signup-buttons">
            <button
              className="header-notify-button btn-text-notify"
              type="submit"
            >
              Notify me
            </button>
            <button className="header-signup-button" type="submit">
              <a
                href="https://retink.io/fap/"
                className="signup-btn-link link-btn"
              >
                Sign up as a freelance partner
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="header-avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
