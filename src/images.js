import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';




const Images=()=>{
    return(
<Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
          <div className="image1">
          <h2 className="Titre1">For patients</h2>
          <h1 className="p1">Find a doctor, book a visit and solve any health-related doubt</h1>
          <select className="select" data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.au">Australia</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.doctoralia-fr.com">France</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
																	<option value="http://www.doctoralia.co.uk">UK</option>
															</select>
                                                            <img className="image11"  src="https://www.docplanner.com/img/screen-marketplace@2x.png"  ></img>                                           

          </div>
        
          </Col>
          <Col lg={6} md={12} sm={12}>
          <div className="image2">
          <h2 className="Titre2">For doctors</h2>
          <h1 className="p2">Save time managing visits and cut no-shows by half</h1>
          
          <img className="image22" src="https://www.docplanner.com/img/screen-saas@2x.png"></img>

          </div>
          </Col>
          </Row>
         
   </Container>
    );
}


export default Images;