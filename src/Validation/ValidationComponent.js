import React from 'react';
//import './Person.css';



const validation = (props) => {

//----------------------------------------------------------------

let osobe = "Nema dovoljno slova";

   
   if (props.changed>5){
   
     osobe = "Dovoljno je slova"
   }

//-------------------------------------------------------------------






return(

<div className = "Validation">











{osobe}
 


   

</div>


);
}







 export default validation;