import React from "react";
import { useState } from "react";
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
import {Map2} from "./map2"
import {Map4} from "./map4"
import {Lots} from "./lots"
import {Lots2} from "./lots2"

import { useContext } from 'react';
import AppContext from "./AppContext"


function router(){
// 	const [apple, setApple] = useState(false);
//     const [kilos, setKilos] = useState(false);
const userSettings = {
  apple: true,
  fav1: true,
  fav2: false,
  fav3: false,
  fav4: true,
  kilos:false,
//   setApple,
//   setKilos,
};
    return(
    
	
    	<AppContext.Provider value={userSettings}>
    { <Router>
            <div>
                <ul>
                    
                        <Button variant="Text contained"><Link to="/">Home</Link></Button>
                        
                  
                        <Button variant="Text contained"><Link to="/map">Map</Link></Button>
                    
                    
                        <Button variant="Text contained"><Link to="/Profile"> Profile </Link></Button>
                    
                        <Button variant="Text contained"><Link to="/lots2">Lots</Link></Button>
                    
                </ul>
                <Routes>
                    <Route path="/map" element={<Map/>} />
                    <Route path="/map2" element={<Map2/>} />
                    <Route path="/map4" element={<Map4/>} />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Profile" element={<Topics/>} render={() => {
                        return (
                            <h2>User Profile</h2>
                        )
                    }} />
                    <Route path="/lots" element={<LotsLoader/>}/>
                    <Route path="/lots2" element={<LotsLoader2/>}/>
                </Routes>
            </div>
        </Router>}
  </AppContext.Provider>
       
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
	const myContext = useContext(AppContext);
	const [cls, setCls] = useState("on");
	const [cls2, setCls2] = useState("on");
	const [cls3, setCls3] = useState("Google Maps");
	const [cls4, setCls4] = useState("Miles");
// 	const apple = myContext.apple;
	const [apple, setApple] = useState(myContext.apple);
    return(
        <div>
             <h1 class = "Header">User Settings</h1>
             <div class="subHeader">Notifications</div>
             <div class="Break"></div>
             <div class="center">
             <Button fullwidth variant="contained" type="submit" onClick={() => (cls2 === "on" ? alert("All lots have opened") : alert("Favorite lots have opened"))} color="primary">Notification Test</Button>
            </div>
            <div class="Break"></div>
             <div class="subHeader-left">Your Favorite Lots:&nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" onClick={() => setCls((cls) => (cls === "on" ? "off" : "on"))} color="primary">{cls}</Button></div>
               <div class="subHeader-left">All Parking Lots:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" onClick={() => setCls2((cls2) => (cls2 === "on" ? "off" : "on"))} color="primary">{cls2}</Button></div>
       		 <div class="Break"></div>
       		<div class="subHeader">Navigation</div>
       		<div class="Break"></div>
       		 <div class="subHeader-left">Preferred App:&nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" onClick={() => setApple((apple) => (apple === false ? true : false))} color="primary">{apple ? "Apple Maps" : "Google Maps"}</Button></div>
        	<div class="Break"></div>
        	<div class="subHeader">Units</div>
       		<div class="Break"></div>
        	<div class="subHeader-left">Distance:&nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" onClick={() => setCls4((cls4) => (cls4 === "Miles" ? "Kilometers" : "Miles"))} color="primary">{cls4}</Button></div>
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
function LotsLoader2(){
    return(
        Lots2()
    )
}


export{
    router,
    LotsLoader
}