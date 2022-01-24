import { Link } from 'react-router-dom';
import './login.css'
function NewPassword(){
    return(
        <div className="loginContainer">
        <div className="login" id="newPassowrdLogin">
            <h1>New Password</h1>
            <input type="password" placeholder="New Password" required />
            <input type="password" placeholder="Confirm New Password" required />
            <Link to="/login"><button className="sumbit">Continue</button></Link>
        </div>
        </div>
    )
}
export default NewPassword;