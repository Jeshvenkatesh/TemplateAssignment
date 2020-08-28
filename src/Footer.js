import React from 'react';
import "./App.css";
import { Box, Button ,makeStyles } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
   
const useStyles = makeStyles((theme)=>({
    BtnWrapper:{
        float:"right",
    },
    btn:{
        marginRight:'4px'
    },
    footerWrapper:{
        width:'100%',
        height:"40px",
        background:"white"

    }
}))

const Footer = () => {

    const classes = useStyles();
    return (
        <div className={classes.footerWrapper}>
            <Box  className={classes.BtnWrapper}>
            <Button className={classes.btn}>Cancel</Button> 
            <Button variant="contained" color="primary" >Save and Next <ArrowForwardIcon /></Button>
            </Box>
        </div>
    )
}

export default Footer;