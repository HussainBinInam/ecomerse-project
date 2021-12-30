import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  
  

} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';


import './menu-item.style.scss';
import WithRouter from '../../Extra/homemadewithRouter';


//  const Menuitem = ({title,discription,imageUrl,size,navigate, linkUrl, Match,params }) => (
    
//     <div  className={`${size} menu-item`}  /* onClick={()=> navigate.push(`${Match(linkUrl)}`)} */ >
//         {console.log (navigate)}
//         <div className = 'backgroundImage' 
       
//         style = {{
//             backgroundImage:`url(${imageUrl})`
//            }} /> {/* we dont want our content size to increase we only want the background image to increase */}
//       <div className='content'> {/* this is the conetent of each box this will Include the text and the picture of the box */}
//          <h1 className='title'> {title} </h1>  
//          <spam className='subtitle'> {discription} </spam>
//      </div>
//     </div>
// ); 

const GetNavigatevalue = (local,Url)=>{
  let navvalue  = local+Url;  
  let check = console.log (navvalue)
  return(
    navvalue
  )
    
  
}

const Menuitem = ({ title, imageUrl, size, linkUrl }) => {

  let navigate = useNavigate();
  //let history = useHistory();
  let params = useParams();
  let location = useLocation();
  let localval = location.pathname;
  let tempval ;
  return (
    
    <div className={`${size} menu-item`} onClick= {()=> {navigate(GetNavigatevalue (localval,linkUrl)); } } >
     
      
      <div
        className='backgroundImage'
        style = {{
          backgroundImage:`url(${imageUrl})`
        }} />
      
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
};
export default Menuitem ;