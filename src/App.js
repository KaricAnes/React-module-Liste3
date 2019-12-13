import React, { Component } from 'react';
import Validnost from './Validation/ValidationComponent';
import Slovo from './Char/Char';
import './App.css';
 
class App extends Component {



//state pocetni---------------------------------------------------------------------######
            state = {
  
    text: '',
    textLength: 'Ovo je brojac'
  
                     }
  //state pocetni ----------------------------------------------------------------------------------










 
//recalculate function----------------------------------#########################
 brojanjeSlova = (even) => {

  this.setState({
    
    
    textLength: even.target.value.length,
    text: even.target.value
  
    
  });
  //const textic = this.state.textLength;
  //const textic = 'kllk';
}



 


/*
Ovo nek stoji za uspomenu da se zna da je arrow funkcija majkaaaaaaaaaa

recalculate( event ) {
  this.setState({
    
    
    textLength: event.target.value.length
  });
}
*/
// -----------------------------------------------------------############################


//---------------------------------------------------

deletePersonHandler = (index) => {

  //const narod = [...this.state.text];
  const narod = this.state.text.split('');

  narod.splice(index, 1);
  
  
  const updatedText = narod.join('');
  this.setState({text: updatedText});
  }

//---------------------------------------------------




     render() {


//Ovo mapiranje od vec postojeceg arraya pravi potpuno novi
//onaj stari ne dira

  const charList = this.state.text.split('').map((x, index) => {

         return <Slovo
           character = {x}
           key = {index}
           click = {() => this.deletePersonHandler(index)}
           />;
          

         
  });
      



          



       return (
    
   <div className = "App">

        <input type = "text" onChange = {this.brojanjeSlova} placeholder = "Kucaj..." />
       
        

        <h3>{this.state.text /* textLength */}</h3>
        <h3>{this.state.textLength }</h3>


        <Validnost
          changed = {this.state.text.length}>"napisanih slova"</Validnost>



         {charList}

        </div>
    
   
    
       );
     }
   }
 
   export default App;