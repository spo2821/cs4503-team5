import './App.css';
import * as React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@mui/material/ButtonBase';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import AppContext from './AppContext';
//import { Page, Navbar, List, ListButton } from 'framework7-react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Lots() {
	const [cls, setCls] = useState("red-heart");
	const [cls2, setCls2] = useState("white-heart");
	const [cls4, setCls4] = useState("white-heart");
	const [apple, setApple] = useState(true);
	const myContext = useContext(AppContext);
  return (
        <div className="Lots">
        	<h1 class="Header">Good morning, Alexander</h1>
        	<div class="subHeader" onclick={() => setApple(true)}>There are <span class="green" onclick={() => setApple(true)}>10</span> open spaces nearby.</div>
        	<div class="center">
        	{apple 
        	? <a href="http://maps.apple.com/?daddr=3135E+E+5th+Pl,+Tulsa,+OK+74104&dirflg=d&t=m" target="_blank">
        	 <Button fullwidth variant="contained" type="submit" color="primary">Quick Navigate To Nearest Open Spot</Button>
        	 </a> 
        	 : <a href="https://maps.google.com/maps/dir//3135+E+5th+Pl+Parking+3135E+E+5th+Pl+Tulsa,+OK+74104/@36.1528946,-95.9435708,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x87b6ecfdccc61cc7:0x3a295c0fb23c2dcc" target="_blank">
        	 <Button fullwidth variant="contained" type="submit" color="primary">Quick Navigate To Nearest Open Spot</Button>
        	 </a>}
        	
        	
            </div>
            <header className="Lots-header" alignItems="centered">
                <br></br>
                <h1 class="Header">Favorite Parking Lots</h1>
               
                <div class="wrapper">
                    <Grid container
                        spacing={3}
                    >
                    	<Grid item xs={12}>
                            <a href="/map"><Item>
                            <div class="grid1">
                            <span class="bold grid1">Student Union Parking</span><br></br>Distance: 0.03 mi.<br></br>
                            <div className={cls}  onClick={() => setCls((cls) => (cls === "red-heart" ? "white-heart" : "red-heart"))}>&#10084;</div>
                            Open Spots: <span class="green">8</span>
                          
                            </div>
                            </Item></a>
                        </Grid>
                        
                       
                    </Grid>
                </div>
                <h1 class="Header">Nearby Parking Lots</h1>
                 <div class="subHeader">Sort By: &nbsp;<Button fullwidth variant="contained" type="submit" color="primary">Distance</Button> &nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" color="primary">Open Spots</Button></div>
                <br></br>
				<div class="wrapper">
                    <Grid container
                        spacing={3}
                    >
                        <Grid item xs={12}>
                           <a href="/map2" class="lotLink"><Item>
                           <div class="grid2">
                           <span class="bold">Commuter Parking Lot</span><br></br>Distance: 0.08 mi.<br></br>
                            <div className={cls2}  onClick={() => setCls2((cls2) => (cls2 === "red-heart" ? "white-heart" : "red-heart"))}>&#10084;</div>
                           Open Spots: <span class="red">0</span>
                           </div>
                           </Item></a>
                        </Grid>
                        <Grid item xs={12}>
                        	  <a href="/map4" class="lotLink"><Item>
                        	<div class="grid4">
                            <span class="bold">Keplinger-Law Lot</span><br></br>Distance: 0.18 mi.<br></br>
                             <div className={cls4}  onClick={() => setCls4((cls4) => (cls4 === "red-heart" ? "white-heart" : "red-heart"))}>&#10084;</div>
                            Open Spots: <span class="yellow">2</span>
                            </div>
                            </Item>
                       		</a>
                       		
                        </Grid>
                         <Grid item xs={12}>
                            <Item><span class="bold">4th and Harvard Lot</span><br></br>Distance: 0.46 mi.<br></br>Open Spots: <span class="red">0</span></Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item><span class="bold">Reynolds Center Parking</span><br></br>Distance: 1.06 mi.<br></br>Open Spots: <span class="green">18</span></Item>
                        </Grid>
                       
                    </Grid >
                </div>
            </header>
        </div>
<<<<<<< HEAD
        
    );
=======
    );    
>>>>>>> dd6b7f24c211e8f8fdb46e4505d6c4cf11bce540
}

//export Lots;