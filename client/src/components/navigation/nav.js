import './navi.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Nav(props){
  return (
    <nav>
    
    <div className="logoo" >
      <h1>{props.title}</h1>
    </div>
    <ul className="nav-links">
      <li className="hoverline" data-content="TIMER"><Link to="/timer">TIMER</Link></li>
      <li className="hoverline" data-content="BATTLE"><Link to="/battle">BATTLE</Link></li>
      <li className="hoverline" data-content="STATISTICS"><Link to="/statistics">STATISTICS</Link></li>
      <li className="hoverline" data-content="CONNECT"><Link to="/connect">CONNECT</Link></li>
      <li className="hoverline" data-content="OPTIONS"><Link to="/shop">SHOP</Link></li>
    </ul>
    <button className="loginsignup" id="myButton"><Link to="/login">Login/Signup</Link></button>
    <div className="burger">
      <Link to="/">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Link>
    </div>
  </nav>

    )
}
Nav.defaultProps ={
  title: "No Title"
}
Nav.propTypes ={
  title: PropTypes.string
}

