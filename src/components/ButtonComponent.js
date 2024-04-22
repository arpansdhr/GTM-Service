import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import './ButtonComponent.css';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundImage: "linear-gradient(to right, transparent 50%, #F13E1E 50%)",
      backgroundSize: "200% 100%",
      backgroundPosition: "right",
      color: "white",
      transition: "background-position 1s ease",
    },
    '&:not(:hover)': {
      backgroundImage: "linear-gradient(to right, transparent 50%, #F13E1E 50%)",
      backgroundSize: "200% 100%",
      backgroundPosition: "left",
      color: "error",
      transition: "background-position 1s ease",
    }
  },
}));

const ButtonComponent = () => {
  const classes = useStyles();

  return (
    <div className="button-container">
      <Button className={classes.button} variant="outlined" color="error" sx={{width: '200px', height: '60px', fontSize: '18px'}}>
        View All
      </Button>
    </div>
  );
};

export default ButtonComponent;
