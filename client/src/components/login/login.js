import './login.css'
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div className="loginContainer">
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="Email or Username" required />
            <input type="password" placeholder="Password" required />
            <button className="sumbit">Continue</button>
            <br></br>
           <p> <Link to="/forget" className="forgetPassword">Forget your password?</Link></p>
            <p>Don't have an account? <Link to="/signUp" className="register">Register now</Link> </p>
        </div>
        </div>
    ) 
}
export default Login;