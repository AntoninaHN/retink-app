import styles from "./SignUp.modules.css";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup-text">Sign Up For The BETA to see more</div>
      <div className="signup-input">
        <input
          placeholder="Business Name"
          className="signup-input name"
          type="text"
          name="name"
        ></input>
        <input
          placeholder="Email"
          className="signup-input email"
          type="text"
          name="email"
        ></input>
      </div>
      <div className="signup-button">
        <button className="signup-button-notify" type="submit">
          Notify me
        </button>
        <button className="signup-button-signup" type="submit">
          <a href="https://retink.io/fap/" className="btn-link">
            Sign up as a freelance partner
          </a>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
