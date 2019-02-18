import React, { Component } from 'react';
import logo from './logo.svg';
import Example from './card'
import Logo from './logo';
import Phrase from './phrase'
import Paragraphe from './paragraphe'
import Images from './images';
import Mots from './mots'
import './App.css';
import Listcard from './listcards';
import Title from './title';

import Footer from './footer';
import  Listen from './listen';

class App extends Component {
 
  
  render() {
    return (
      <div className="App">
  
       < Example />
     <Logo/>

     <Phrase/>
     <br/>
     <br/>
     <br/>
     <Paragraphe/>
     <Images/>
     <br/>
     <br/>
     <Mots/>
     <br/>
    
     < Listen/>
     <br/>
     <Title/>
     <Listcard/>
     <Footer/>
     
      
      </div>
    );
  }
}

export default App;
