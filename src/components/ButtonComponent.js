import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const buttonStyle = isSmallScreen ? {
    height: "60px",
    width: "150px",
    fontSize: "24px",
  } : {
    height: '66px',
    width: '200px',
    fontSize: '18px'
  };

  return (
    <div className="button-container">
      <Button className={classes.button} variant="outlined" color="error" sx={buttonStyle}>
        View All
      </Button>
    </div>
  );
};

export default ButtonComponent;
