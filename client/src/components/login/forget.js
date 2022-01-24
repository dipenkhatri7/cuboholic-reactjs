
import './login.css'
import { Link } from 'react-router-dom';
function Forget(){
    return(
        <div className="loginContainer">
    <div className="login" id="forgetLogin">
        <h1>Recovery</h1>
        <input type="textbox" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <Link to="./newPassword"><button className="sumbit">Continue</button></Link>
    </div>
    </div>
    )
}
export default Forget;