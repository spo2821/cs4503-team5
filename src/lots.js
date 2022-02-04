import './App.css';
import * as React from 'react';
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
//import { Page, Navbar, List, ListButton } from 'framework7-react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Lots() {
  return (
        <div className="Lots">
            <header className="Lots-header" alignItems="centered">
                <br></br>
                <h1 class="Header">Nearby Parking Lots</h1>
                <br></br>
                <br></br>
                <div class="subHeader">Sort By: &nbsp;<Button fullwidth variant="contained" type="submit" color="primary">Distance</Button> &nbsp;&nbsp;<Button fullwidth variant="contained" type="submit" color="primary">Open Spots</Button></div>
                <br></br>
                <div class="wrapper">
                    <Grid container
                        spacing={3}
                    >
                    	<Grid item xs={12}>
                            <Item><span class="bold">Commuter Parking Lot</span><br></br>Distance: 0.03 mi.<br></br>Open Spots: <span class="red">0</span></Item>
                        </Grid>
                        <Grid item xs={12}>
                           <a href="/map" class="lotLink"><Item><span class="bold">Student Union Parking</span><br></br>Distance: 0.08 mi.<br></br>Open Spots: <span class="green">8</span></Item></a>
                        </Grid>
                        <Grid item xs={12}>
                            <Item><span class="bold">Keplinger-Law Lot</span><br></br>Distance: 0.18 mi.<br></br>Open Spots: <span class="yellow">2</span></Item>
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
    );
}

//export Lots;