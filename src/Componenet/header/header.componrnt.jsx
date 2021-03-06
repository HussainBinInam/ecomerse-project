import React from "react";
import {Link} from "react-router-dom";

import  {ReactComponent as Logo} from '../../Assits/crown.svg'
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utility.js";
const Header = ({currentUser}) => (
    <div className="header">
        <Link to='/' className = "logo-container">
            <Logo className ='logo'/>
        </Link>
        <div className = 'options'>
            <Link className = "option" to ='/shop'>
                Shop
            </Link>
            <Link className = "option" to ='/shop'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className="option" onClick= {()=>auth.signOut() } > SIGN OUT </div>
                :
                <Link className = "option" to ="/signin" >SIGN IN</Link>
            }
        </div>
    </div>
)
export default Header;