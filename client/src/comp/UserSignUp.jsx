import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

const UserSignUp = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001"
    }).then((res) => console.log(res));
  };

  return (
    <Form className ="signupForm">
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="name">Display Name</Label>
            <Input type="name" id="usernameid" placeholder="username" onChange={(e)=> setRegisterUsername(e.target.value)} />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" id="passwordid" placeholder="password"onChange={(e)=> setRegisterPassword(e.target.value)} />
          </FormGroup>
        </Col>
      </Row>
      <Button OnClick = {register}>Submit New Registration</Button>
    </Form>
  );
}

export default UserSignUp;