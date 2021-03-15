import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Starter/Home";
import TaskOneBack from "./Task/TaskOneBack";
import TaskTwoBack from "./Task/TaskTwoBack";
import TaskThreeBack from "./Task/TaskThreeBack";
import TaskOneFront from "./Task/TaskOneFront";
import TaskTwoFront from "./Task/TaskTwoFront";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {ICONS} from './Services/constants';
import Icon from './Services/Icon.jsx';


function App() {
  return (
    
    <Router>
      <div>
        <ul className="navigation">
          <li>
            <Link to="/"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Home</Link>
          </li>
          <li>
            <Link to="/task-one-back-end"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Task One Back End</Link>
          </li>
          <li>
            <Link to="/task-two-back-end"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Task Two Back End</Link>
          </li>
          <li>
            <Link to="/task-three-back-end"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Task Three Back End</Link>
          </li>
          <li>
            <Link to="/task-one-front-end"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Task One Front End</Link>
          </li>
          <li>
            <Link to="/task-two-front-end"><Icon icon={ICONS.CLOUD_CHECK} />&nbsp;Task Two Front End</Link>
          </li>
        </ul>
        <hr />
        <ToastContainer />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/task-one-back-end">
                <TaskOneBack />
            </Route>
            <Route path="/task-two-back-end">
                <TaskTwoBack />
            </Route>
            <Route path="/task-three-back-end">
              <TaskThreeBack />
            </Route>
            <Route path="/task-one-front-end">
              <TaskOneFront />
            </Route>
            <Route path="/task-two-front-end">
              <TaskTwoFront />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
