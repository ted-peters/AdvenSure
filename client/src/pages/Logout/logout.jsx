import React, { useState } from "react";
import axios from "axios";
import {Row, Button, Card, CardTitle} from "reactstrap";
import './logout.css';


function Logout() {
  const [loginUsername] = useState("");
  const [loginPassword] = useState("");

  const logout = () => {
    axios({
      method:"GET",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: false,
      url: "/api/logout",
    })
  };

  return (
    <div>
      <Row>
          <Card className="card" body inverse style={{ backgroundColor: '#ff55', borderColor: '#f1f5' }}>
            <CardTitle className="font">Logout</CardTitle>
          <Button className="button" onClick= {logout}>Logout</Button>
          </Card>
      </Row>
    </div>
  );
}

export default Logout;
