import React from 'react';
import Block from './block';
import  Listitem from './listitem';
import { Container,Row,Col } from 'reactstrap';





const Listen=()=>{
return(
<div className="listen">
    <Container>
        <Row>
            <Col>
<Block/>

            </Col>
           
            <Col >
           
<Listitem/>

            </Col>
            </Row>
        </Container>


    </div>


);


}
export default Listen;