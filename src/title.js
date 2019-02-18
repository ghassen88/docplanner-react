import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import './App.css';





const Title=()=>{
    return(
<div>
    <Container>
        <Row>
            <Col></Col>
            <Col lg="6">
            <div className="titleG">
            <h1 className="h11">
				Improve the lives of millions.
				Change&nbsp;yours forever
			</h1>
            <p className="ph">
				More than 500 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,<br/> Mexico City, Colombia and Curitiba, our search for great talent never <br/>stops.
			</p>
            </div>
            </Col>
            <Col></Col>
            </Row>
            </Container>
</div>
    );
}
export default Title;

