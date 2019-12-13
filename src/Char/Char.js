import React from 'react';
import './Char.css';



const slovo = (props) => {

    return(

        <div onClick={props.click} className = "Slovo">
        
        
        
        

        {props.character}
         
      
        
          </div>
        
        
        );

}



export default slovo;