import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { DomainApi, RegistrationDTO } from '../../rest/DomainApi'

import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../common/message/ErrorMessage';
interface Props {
  isLoggedIn: (loggedIn: string) => void
}

const Login = ({ isLoggedIn }: Props) => {

  const [loginData, setLoginData] = useState({ username: "", password: "" } as RegistrationDTO);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    console.log("will login with: ", loginData);
    new DomainApi().auth.loginUser(loginData)
      .then((resp) => {

        if (resp.data.jwt == "") {
          console.log("hatada");
          setLoginError(true);
          isLoggedIn("false");
        }
        else {


          localStorage.setItem("userInfo", JSON.stringify({ "username": loginData.username, "jwt": resp.data.jwt }));
          setLoginError(false);
          console.log("in login will set with true:");

          isLoggedIn("true");
          navigate("/home");
        }
      });
  }

  return (<Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='username' autoComplete='on' onChange={(e) =>
        setLoginData((prev) => {
          return { ...prev, "username": e.target.value }
        })} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='password' autoComplete='on' type='password'
        onChange={(e) => setLoginData((prev) => { return { ...prev, "password": e.target.value } })} />
    </Form.Field>
    {!loginError || <ErrorMessage visible={loginError} title="Hata" body="Hata" />}

    <Button onClick={() => login()}>Submit</Button>
  </Form>);

}
export default Login;