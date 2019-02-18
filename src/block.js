import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';





const Block=()=>{
    return(
<div className="block">

    <h1 className="tblock">
	The world's
<br/>biggest healthcare platform
  </h1>
  <p className="tphrase">
	We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
		</p>
   <div>    
       <img src="https://media.licdn.com/dms/image/C4E0BAQFOWnbru99f5w/company-logo_200_200/0?e=2159024400&v=beta&t=EceoeatN3ZdtLKlQdk-5b9mznHFILuVm2EExIss1FTA"  width="400px"></img>
   </div>
    </div>
    );
}

export default Block;