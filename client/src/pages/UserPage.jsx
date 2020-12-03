import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const Example = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-5">
          <h1>Welcome USER</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h3>Create New Trip</h3>
          <Form>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="text" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Trip Start Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Trip Return Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <Button>Create Checklist</Button>
          </Form>
        </div>
        <div className="col-3">
          <Button className="btn btn-block btn-sm btn-light"><Link to="/weather">Destination Weather Condition</Link></Button>
          <hr />
          <h3>User Checklist</h3>
          <ul className="userChecklistItem"></ul>
        </div>
      </div>
    </div>
  );
}

export default Example;
