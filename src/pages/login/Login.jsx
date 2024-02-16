import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">WeSocial</div>
            <span className='loginDesc'>
                Connect with friends and the world around you on WeSocial.
            </span>
        </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email" type="Email" className='loginInput' />
                <input placeholder="Password" type="Password" className='loginInput' />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className='loginRegisterButton'>Create a New Account</button>
              </div>
            </div>
      </div>
    </div>
  );
}
