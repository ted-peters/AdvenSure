import React, {useState, useEffect} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
} from "react-router-dom";
import axios from 'axios';

const Example = (props) => {
  const[user, setUser] = useState();
  const[userTrip, setUserTrip] = useState();
  const[list, setList] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setUserTrip(user);
    JSON.parse(localStorage.getItem(userTrip)) === null ? localStorage.setItem(userTrip, JSON.stringify(list)) : setList(JSON.parse(localStorage.getItem(userTrip)))
  })

  const userTripAdd = () => {
    let title = document.getElementById('yourTrip').value;
    const arr = [...list];
        arr.push(title);
        setList(arr);
        localStorage.setItem(userTrip, JSON.stringify(arr));
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
  const {name} = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-5">
          <h1>Welcome {user}</h1>
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
            <Button onClick={userTripAdd}>Create Checklist</Button>
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
              <li><Button style={{background: 'linear-gradient(to bottom, #ece9e6, #ffffff)' ,borderRadius: '4px', opacity: '.6'}}><Link to="/checklist">{item}</Link></Button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example;