import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import weatherTest from "../weatherTest.png";
  
  const Example = (props) => {
    return (
      <div>
        <Card>
          <CardImg width="200" src={weatherTest} alt="Test Weather" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Example;