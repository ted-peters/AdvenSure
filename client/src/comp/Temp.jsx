import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function Temp(props) {
    return (
        <div>
      <Card>
        
        <CardBody>
          <CardTitle tag="h5">{props.date}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.temp}</CardSubtitle>
          {/* <CardText><img src={props.icon}/> </CardText> */}
          
        </CardBody>
      </Card>
    </div>
    )
}
