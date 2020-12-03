import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import {Row, Button,Card, CardTitle} from "reactstrap";
import {useAuth, actions} from '../../utils/authState.js';
import './logout.css';


function Logout() {
  const [authState, authDispatch] = useAuth();
  // const [loginUsername] = useState("");
  // const [loginPassword] = useState("");

  const logout = () => {
    authDispatch({
                type: actions.LOGOUT,
            })
  };

  return (
    <div>
      <Row>
      {Redirect? <Redirect}
          <Card className="card" body inverse style={{ backgroundColor: '#ff55', borderColor: '#f1f5' }}>
            <CardTitle className="font">Logout</CardTitle>
          <Button className="button" onClick= {logout}>Logout</Button>
          </Card>
      </Row>
    </div>
  );
}

export default Logout;
