import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import { Route, Switch } from "react-router";
import {SignIn} from "../../../srcMap/App.js"

export default function router(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics"> Topics </Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home}/>
                    <Route path="/topics" component={Topics} />
                    
                    
                </Routes>
            </div>
        </Router>
    );
}

function Home(){
    
        SignIn();
    
}
function About(){
    <div>
      <h2>Dashboard</h2>
    </div>
}
function Topics(){
    <div>
      <h2>Dashboard</h2>
    </div>
}