import './circular.css'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCube } from 'react-icons/fa';



export default function(){
    return(

        <div className="nav-content">
            <span>
                <FaCube />
            </span>  
            <span>
                <FaFacebook />
            </span>  
            <span>
                <FaGithub />
            </span>  
            <span>
                <FaInstagram />
            </span>  
            <span>
                <FaTwitter />
            </span>  
            
        </div>


    )
}