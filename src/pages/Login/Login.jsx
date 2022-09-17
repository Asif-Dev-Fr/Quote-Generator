import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
  
    // Methods
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("e", event, login, password);
      if (
        login !== "" &&
        login === process.env.REACT_APP_LOGIN &&
        password !== "" &&
        password === process.env.REACT_APP_PASSWORD
      ) {
        handleLogin();
        localStorage.setItem("login", JSON.stringify(login));
        navigate("/homepage");
      }
    };
  
    const clearInput = () => {
      setLogin("");
      setPassword("");
    };
    return (
      <div className="homepageContainer">
        <div className="homepage">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="buttonDiv">
              <Button variant="danger" onClick={clearInput}>
                Clear
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
}

export default Login