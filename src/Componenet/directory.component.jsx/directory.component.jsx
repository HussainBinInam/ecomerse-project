import React from "react";

import './directory.style.scss';

import MenuItem from '../menu-item.component/menu-item.component'
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
             {
                id: 1,
                title: "The First item",
                imageUrl: "https://m.media-amazon.com/images/I/61HsuCgUz8L._AC_SX466_.jpg",
                discription: "I am a discription"  /* these are the values set in the menu item boxes */
             },
             {
                id:2,
                title: "The second item",
                imageUrl: "https://m.media-amazon.com/images/I/61HsuCgUz8L._AC_SX466_.jpg",
                discription: "I am a discription" 
             },
             {
                id:3,
                title: "The third item",
                imageUrl: "https://m.media-amazon.com/images/I/61HsuCgUz8L._AC_SX466_.jpg",
                discription: "I am a discription" 
             },{
                id: 4,
                title: "The Forth item",
                imageUrl: "https://m.media-amazon.com/images/I/61HsuCgUz8L._AC_SX466_.jpg",
                size: "large",
                discription: "I am a discription" 
             },
             {
                id: 5 ,
                title: "The Fifth item",                
                imageUrl: "https://m.media-amazon.com/images/I/61HsuCgUz8L._AC_SX466_.jpg",
                size: "large",
                discription: "I am a discription" 
             },
            ]
        } 
            
    
    }
    render () {
        
        return (
            <div className= 'directory-menu'>
                {this.state.sections.map(({title,discription,id,imageUrl, size} ) =>(
                    <MenuItem key= {id} title= {title} discription = {discription} imageUrl={imageUrl} size = {size} />
                    
                )
                 )}
            </div> 
        )   
    }
}
export default Directory ;