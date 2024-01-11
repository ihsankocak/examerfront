import { Button } from "semantic-ui-react";
import { localStorageConstants } from "../util/Constants"
import ErrorMessage from "../common/message/ErrorMessage";
import SuccessMessage from "../common/message/SuccessMessage";
import { Link, useNavigate } from "react-router-dom";
interface Props {
  isLoggedIn: (loggedOut: string) => void,
}


const Logout = (props: Props) => {
  const {isLoggedIn}=props;
  const logoutUser = (): boolean => {
    localStorage.setItem(localStorageConstants.userInfo, JSON.stringify("{'username':'','jwt':''}"));
    console.log("Emptied userinfo");
    navigate('/');
    props.isLoggedIn("false")
    return true;
  }
  const navigate = useNavigate();

  return (<Button onClick={() => logoutUser()}>Logout</Button>);



}

export default Logout;

