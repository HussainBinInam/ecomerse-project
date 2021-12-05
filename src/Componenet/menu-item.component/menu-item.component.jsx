import React from "react";

import './menu-item.style.scss';


const Menuitem = ({title,discription,imageUrl,size }) => (
    <div  
        className={`${size} menu-item`} > 
        <div className = 'backgroundImage'
        style = {{
            backgroundImage:`url(${imageUrl})`
           }} /> {/* we dont want our content size to increase we only want the background image to increase */}
      <div className='content'> {/* this is the conetent of each box this will Include the text and the picture of the box */}
         <h1 className='title'> {title} </h1>  
         <spam className='subtitle'> {discription} </spam>
     </div>
    </div>
);
export default Menuitem ;