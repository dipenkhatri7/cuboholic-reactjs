import './login.css'
import { Link } from 'react-router-dom';
function Transition(){
    return(
        <div className="loginContainer">
        <div className="login" id="transitionLogin">
            <h1>Transition Pin</h1>

            <input type="number"  placeholder="******" />

            <Link to="./login"><button className="sumbit">Continue</button></Link>
            <br></br>
           
            <p>Didn't got transition pin? <Link to="./transition" className="register">Resend</Link> </p>
        </div>
        </div>
    )
}
export default Transition;