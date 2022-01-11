import './navi.css'
import PropTypes from 'prop-types'

export default function Nav(props){
  return (
    <nav>
    <div className="logoo" href="/index.html">
      <h1>{props.title}</h1>
    </div>
    <ul className="nav-links">
      <li className="hoverline" data-content="TIMER"><a href="#/">TIMER</a></li>
      <li className="hoverline" data-content="BATTLE"><a href="#/">BATTLE</a></li>
      <li className="hoverline" data-content="STATISTICS"><a href="#/">STATISTICS</a></li>
      <li className="hoverline" data-content="CONNECT"><a href="#/">CONNECT</a></li>
      <li className="hoverline" data-content="OPTIONS"><a href="#/">OPTIONS</a></li>
      <button className="loginsignup" id="myButton">Login/Signup</button>
    </ul>

    <div className="burger">
      <a href="#/">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </a>
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

