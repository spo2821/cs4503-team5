import React from 'react';
import {router} from "./router";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function App(){
    return(
        router()
    )
    

}
export default App;