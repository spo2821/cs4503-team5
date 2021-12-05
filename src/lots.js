import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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
                Local Lot list
                <br></br>
                <br></br>
                <br></br>
                <div class="wrapper">
                    <Grid container
                        spacing={3}
                    >
                    	
                        <Grid item xs={12}>
                           <a href="/map"><Item>lot 1 </Item></a>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 2</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 3</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 4</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 5</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 6</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 7</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 8</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 9</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>lot 10</Item>
                        </Grid>
                    </Grid>
                </div>

            </header>
        </div>
    );
}

//export Lots;