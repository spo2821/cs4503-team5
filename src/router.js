import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import{
    Button
} from '@mui/material'

import {SignIn} from "./login"
import {App} from "./map"
import {Lots} from "./lots"

function router(){
    return(
        <Router>
            <div>
                <ul>
                    
                        <Button variant="Text contained"><Link to="/">Home</Link></Button>
                        
                  
                        <Button variant="Text contained"><Link to="/map">Map</Link></Button>
                    
                    
                        <Button variant="Text contained"><Link to="/topics"> Topics </Link></Button>
                    
                        <Button variant="Text contained"><Link to="/lots">Lots</Link></Button>
                    
                </ul>
                <Routes>
                    <Route path="/map" element={<Map/>} />
                        
                    <Route path="/" element={<Home/>}/>
                    <Route path="/topics" element={<Topics/>} render={() => {
                        return (
                            <h2>HELLO</h2>
                        )
                    }} />
                    <Route path="/lots" element={<LotsLoader/>}/>
                    
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
function LotsLoader(){
    return(
        Lots()
    )
}


export{
    router,
    LotsLoader
}