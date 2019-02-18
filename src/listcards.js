import React from 'react';
import Cardt from './cardt';
import { Container,Row } from 'reactstrap';

const thecards=[
    {
        image:"https://www.docplanner.com/images/warsaw.png" ,
        titre:'warsaw',
        button:'ajouter'
    },
    {
        image:"https://www.docplanner.com/images/barcelona.png" ,
        titre:'Barcelona',
        button:'supprimer'
    },
    {
        image:"https://www.docplanner.com/images/istanbul.png" ,
        titre:'Istanbul',
        button:''
    },
    {
        image:"https://www.docplanner.com/images/rome.png",
        titre:'Rome',
        button:''
    },
    {
        image:"https://www.docplanner.com/images/mexico-city.png" ,
        titre:'Mexico city',
        button:''
    },
    {
        image:"https://www.docplanner.com/images/curitiba.png" ,
        titre:'Curtiba',
        button:''
    },
    

]


const Listcard=()=>{
   return(
       <div className="List">
       <Container>
           <Row className="row1">
    
    {thecards.map((el,index)=><Cardt item={el} Key={index}/>
     
      )}
      </Row>
      </Container>
   </div>
   )
    
}
export default Listcard;