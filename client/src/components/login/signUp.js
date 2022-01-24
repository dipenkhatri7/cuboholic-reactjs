import './login.css'
import { Link } from 'react-router-dom';
function SignUp(){
    return(
        <div className="loginContainer">
        <div className="login">
            <h1>Sign Up</h1>
            <input type="textbox" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <Link to="./transition"><button className="sumbit">Continue</button></Link>
        </div>
        </div>
    )
}
export default SignUp;