import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";

import {SignIn} from "./login"
import {App} from "./map"

function router(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <Link to="/topics"> Topics </Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/map" component={Map} />
                    <Route path="/" component={Home}/>
                    <Route path="/topics" component={Topics} />
                    
                    
                </Routes>
            </div>
        </Router>
    );
}

function Home(){
    
        SignIn()
    
}
function  Map(){
    App()
}
function Topics(){
    <div>
      <h2>Dashboard</h2>
    </div>
}

export{
    router
}