import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';





const List=({ite})=>
{
    return(

<div>
<Card className="crd" body>
          <CardTitle ><img src={ite.image}/></CardTitle>
          <CardText className="txt"> {ite.titre}</CardText>
         <p>{ite.phrase}</p>
        </Card>

</div>

    );
}
export default List;