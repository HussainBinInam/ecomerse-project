import React from 'react'

import './button.style.scss'

const CustomButton = ({children , type,...otherProps})=> (
  <button className = 'custom-button' {...otherProps} >
      {children }
  </button>
  )
  export default CustomButton;