import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, Button } from 'reactstrap';




const Cardt=({item})=>{
    return(
<div>

{/*      <Card>
        <CardImg top src={item.image} />
        <CardBody>
          <CardTitle>{item.titre}</CardTitle>
         
          <Button>Button</Button>
        </CardBody>
      </Card> */}
      <div class="office fade-elements__visible slick-slide" data-slick-index="1"
       aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01">
					<a href="/career?&amp;loc=spain#jobs-offers" class="office__inner" tabindex="-1">
						<div class="office__image">
                            <img src={item.image}/>
						</div>
                        <br/>
                        <br/>
						<div class="office__desc">
                        {item.titre}
							<span class="btn  btn-primary" >See openings</span>
						</div>
					</a>
				</div></div>


    );

}
export default Cardt;