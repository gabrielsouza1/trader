import React from 'react';
import './Style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
}));

function App() {
    const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.color}>
        <Toolbar variant="dense" >  
          <Typography variant="h6" color="inherit" className={classes.title}>
            TRADER
          </Typography>
          <Button color="inherit">Entrar</Button>
          <Button color="inherit">Cadastre-se</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default App;
