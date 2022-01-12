import React from "react";

import CustomButton from '../button/button.component'
import './signin.scss';
import FormInput from "../form-input/form-input.component";
import {SignInWithGoogle} from '../../firebase/firebase.utility.js'

class Signin extends React.Component {
    constructor(props){
        super(props);
         
        this.state = {
            email :'',
            password :''

        }
    }
    Interesting = () => {
        console.log ("hmmmmmmmmmmmmmm")
    }
    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email :'', password:''})
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an accout </h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    name= "email" 
                    type="email" 
                    value = {this.state.email} 
                    handleChange = {this.handleChange} 
                    label ='Email' 
                    required/>
                    
                    <FormInput 
                    name= "password" 
                    type="password" 
                    label ='Password' 
                    value = {this.state.password} 
                    handleChange = {this.handleChange}  
                    required/>
                    <div className = "buttons">
                         <CustomButton type= "submit"> Sign in</CustomButton>
                         <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn > Sign in with google</CustomButton>
                    </div>

                </form>
            </div> )
    }
}
export default Signin;