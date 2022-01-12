import React from 'react'

import './button.style.scss'

const CustomButton = ({children , type, isGoogleSignIn, ...otherProps})=> (
  <button className =  {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
      {children }
  </button>
  )
  export default CustomButton;