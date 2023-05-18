import { useState } from 'react'
import { Router, NavLink, Route, Link, Outlet, Routes } from 'react-router-dom';
import './App.css'
import { Question } from './components/Question';
import { ExamRouter } from './Router';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { CreateExam } from './components/exam/Create';
const  Layout=()=> {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/create">Sınav Oluştur</Link>
          </li>
          <li>
            <Link to="/list">Sınavı Gör</Link>
          </li>


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
const  App=()=> {
  const [count, setCount] = useState(0)
  {/* Routes nest inside one another. Nested route paths build upon
  parent route paths, and nested route elements render inside
  parent route elements. See the note about <Outlet> below. */}
  return <>{<Layout />}<Routes>
    <Route path="/" >
      <Route index element={<Question />}/>
      <Route path="list" element={<Question />} />
      <Route path="create" element={<CreateExam />} />
      {/* Using path="*"" means "match anything", so this route
      acts like a catch-all for URLs that we don't have explicit
      routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>;
  </>
}

export default App
