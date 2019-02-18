import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';





const Paragraphe=()=>{
    return(
<div>
<Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
          <p className="Paragraphe1">
   			We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
				</p>
          </Col>
          <Col lg={6} md={12} sm={12}>
          <p className="Paragraphe2">
					We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
				</p>
          </Col>
          </Row>
         
   </Container>
              
    </div>
    );
}
export default Paragraphe;