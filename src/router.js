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
                    <Route path="/map" element={<Map/>} />
                        
                    <Route path="/" element={<Home/>}/>
                    <Route path="/topics" element={<Topics/>} render={() => {
                        return (
                            <h2>HELLO</h2>
                        )
                    }} />
                    
                    
                </Routes>
            </div>
        </Router>
    );
}

function Home(){
    //<SignIn/>
    return(
        SignIn()
    )
    
}
function  Map(){
    return(
        App()
    )
    
}
function Topics(){
    console.log("test worked")
    return(
        <div>
            <h2> HELLO</h2>
        </div>
        
        //SignIn()
    );

//    <div>
  //    <h2>Dashboard</h2>
  //  </div>
}

export{
    router
}