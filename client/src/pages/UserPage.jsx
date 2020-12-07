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
  }, userTrip);

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

  const tripClick = (e) => {
    console.log(e.target.value);
    localStorage.setItem("userTripChecklist", JSON.stringify(`${user}${e.target.value}`))
    window.location.href="/checklist";
  }

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
              <Input style={{width: "100%",
                      borderRadius: "60px",
                      marginTop: "10px",
                      opacity: ".7",
                      background: "linear-gradient(to left, #ffefba, #ffffff)"}} 
                        type="text" name="text" id="yourTrip" />
            </FormGroup>
            <FormGroup>
              <Label for="tripStart">Trip Start Date</Label>
              <Input style={{width: "100%",
                      borderRadius: "60px",
                      marginTop: "10px",
                      opacity: ".7",
                      background: "linear-gradient(to left, #ffefba, #ffffff)"}} 
                type="date"
                name="date"
                id="tripStart"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="tripReturn">Trip Return Date</Label>
              <Input style={{width: "100%",
                      borderRadius: "60px",
                      marginTop: "10px",
                      opacity: ".7",
                      background: "linear-gradient(to left, #ffefba, #ffffff)"}} 
                type="date"
                name="date"
                id="tripReturn"
                placeholder="date placeholder"
              />
            </FormGroup>
            <Button     style={{
                      fontSize: "16px",
                      color: "white",
                      opacity: ".6",
                      borderRadius: "40px",
                      background: "linear-gradient(to top, #2193b0, #3a7bd5",
                      marginTop: "16px",
                      marginLeft: "5px",
                      height: "40px",
                      border: "none",
                      boxShadow:  "-1px 0px 1px #6fadcb, 0px 1px 1px #54809d, -2px 1px 1px #6fadcb, -1px 2px 1px #54809d, -3px 2px 1px #6fadcb, -2px 3px 1px #54809d;",
                    }}onClick={userTripAdd}>Create Checklist</Button>
          </Form>
        </div>
        <div className="col-3">
          <Button className style={{width: "100%",
                      borderRadius: "60px",
                      opacity: ".7",
                      marginTop: "10px",
                      border: "none",
                      background: "linear-gradient(to left, #ffefba, #ffffff)"}}>
            <Link to="/weather">Destination Weather Condition</Link>
          </Button>
          <hr />
          <h3>User Checklist</h3>
          <ul className="userCheckListItem">
            {list.map(item => (
              <li><Button style={{border: "none", boxShadow:  "-1px 0px 1px #6fadcb, 0px 1px 1px #54809d, -2px 1px 1px #6fadcb, -1px 2px 1px #54809d, -3px 2px 1px #6fadcb, -2px 3px 1px #54809d;",background: "linear-gradient(to top, #2193b0, #3a7bd5",borderRadius: "40px",fontSize: "16px",borderRadius: '4px', opacity: '.6'}} onClick={tripClick} value={item}>{item}</Button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example;