import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import axios from 'axios';

const Example = (props) => {
  const[list, setList] = useState([]);

  const userTrip = () => {
    let title = document.getElementById('yourTrip').value;
    const arr = [...list];
        arr.push(title);
        setList(arr);
    // axios({
    //   method: "POST",
    //   data: {
    //     startDate: document.getElementById('tripStart').value,
    //     endDate: document.getElementById('tripReturn').value,
    //     title: document.getElementById('yourTrip').value,
    //   },
    //   withCredentials: true,
    //   url: "/api/user",
    // });
  };
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
              <Label for="yourTrip">Your Trip</Label>
              <Input type="text" name="text" id="yourTrip" />
            </FormGroup>
            <FormGroup>
              <Label for="tripStart">Trip Start Date</Label>
              <Input
                type="date"
                name="date"
                id="tripStart"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="tripReturn">Trip Return Date</Label>
              <Input
                type="date"
                name="date"
                id="tripReturn"
                placeholder="date placeholder"
              />
            </FormGroup>
            <Button onClick={userTrip}>Create Checklist</Button>
          </Form>
        </div>
        <div className="col-3">
          <Button className="btn btn-block btn-sm btn-light">
            <Link to="/weather">Destination Weather Condition</Link>
          </Button>
          <hr />
          <h3>User Checklist</h3>
          <ul className="userChecklistItem">
            {list.map(item => (
              <li><Button className="btn btn-block btn-sm btn-dark"><Link to="/checklist">{item}</Link></Button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example;