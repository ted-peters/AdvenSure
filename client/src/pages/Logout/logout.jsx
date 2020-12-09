import React, {useState} from "react";
import axios from 'axios';
import {Row, Button,Card, CardTitle} from "reactstrap";
import {useAuth} from '../../utils/authState.js';
import './logout.css';


function Logout() {
  const [authState, authDispatch] = useAuth();


  const refreshPage = () => {
    window.location.href="/login";
  }

  const logout = () => {
    axios({
      method: "GET",
      url: "/logout",
    }).then(()=> { 
      refreshPage()});
  };

  return (
    <div>
      <Row>
          <Card className="card" body inverse style={{ backgroundColor: '#ff55', borderColor: '#f1f5' }}>
            <CardTitle className="font">Logout</CardTitle>
            <row className="d-flex justify-content-center">
          <Button className="button" onClick= {logout}>Logout</Button>
          </row>
          </Card>
      </Row>
    </div>
  );
}

export default Logout;
