import { useCallback, useEffect, useState } from 'react'
import { Router, NavLink, Route, Link, Outlet, Routes } from 'react-router-dom';
import './App.css'
import './styles/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Question } from './components/Question';
import { ExamRouter } from './Router';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { CreateExam } from './components/exam/Create';
import Login from './components/user/Login';
import Home from './components/user/Home';
import Logout  from './components/user/Logout';
interface Props{
  loggedIn:string,
  
}
import { isLoggedIn } from './components/util/UserService';
import { Portal } from 'semantic-ui-react';
import { Exam } from './components/exam/Exam';
const Layout = (props:Props) => {
 const {loggedIn}=props;
  const isloggedIn=(loggedIn:string)=>{
    console.log("in app will set with : ",loggedIn);
    
   
  }
  return (
    <div>

      <nav>
        <ul>
          {(loggedIn==="false") &&

            <li>
              <Link to="/">Login</Link>
            </li>
          }

          <li>
            <Link  to="/create">Sınav Oluştur</Link>
          </li>
          <li>
            <Link to="/home">Anasayfam</Link>
          </li>

          <li>
            <Link to="/list">Sınavlarım</Link>
          </li>

          {(loggedIn ==="true") &&

            <li>
              <Link to="/logout">Logout</Link>
            </li>
          }
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
const App = () => {
  const [jwt, setJwt] = useState("");
  {/* Routes nest inside one another. Nested route paths build upon
  parent route paths, and nested route elements render inside
  parent route elements. See the note about <Outlet> below. */}
  const [loggedIn, setLoggedIn] = useState("false");
  const isLoggedIn=(loggedIn:string)=>{
    console.log("in app will set with : ",loggedIn);
    
    setLoggedIn(loggedIn);
  }
  return <>{<Layout loggedIn={loggedIn}  />}<Routes>
    <Route path="/" >
      <Route index element={<Login isLoggedIn={isLoggedIn}  />} />
      <Route path="home" element={<Home />} />
      <Route path="create" element={<CreateExam />} />
      <Route path="logout" element={<Logout isLoggedIn={isLoggedIn}/>} />
      <Route path="list" element={<Exam />} />
      {/* Using path="*"" means "match anything", so this route
      acts like a catch-all for URLs that we don't have explicit
      routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  </>
}

export default App
