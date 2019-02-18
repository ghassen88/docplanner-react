import React from 'react';
import List from './list';


const theitems=[
    {
        image:"https://www.docplanner.com/img/flag.png" ,
        titre:'Leader in 10&nbsp;countries',
        phrase:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia'
      
    },
    {
        image:"https://www.docplanner.com/img/visits.png" ,
        titre:'1 million appointments',
        phrase:'booked last month'
       

    
    },
    {
        image:"https://www.docplanner.com/img/patients.png",
        titre:'30 million unique patients',
        phrase:'visit us every month'
    },
    {
        image:"https://www.docplanner.com/img/doctors.png",
        titre:'2 million active doctors',
        phrase:' trustour solutions'
    },
   

]


const Listitem=()=>{
   return(
       <div className="list1">
      
    
    {theitems.map((el,index)=><List ite={el} Key={index}/>
     
      )}
    
   </div>
   )
    
}
export default Listitem;