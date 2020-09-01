import React from 'react';
import "../../App.css";
import { Box, Button ,makeStyles } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Axios from 'axios';

   
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

const Footer = (props) => {


    const handleCancelOperation=()=> {
        localStorage.clear();
    }
    const handleTemplateDetails= () => {
        const templateData = {
            bannerImgSize: localStorage.getItem("bannerImgSize") === null ? "No" : localStorage.getItem("bannerImgSize"),
            bannerImg: localStorage.getItem("bannerImg")  === null ? "No" : localStorage.getItem("bannerImg") ,
            btnOneWidth: localStorage.getItem("btnOneWidth")  === null ? "No" : localStorage.getItem("btnOneWidth") ,
            btnTwoWidth: localStorage.getItem("btnTwoWidth")  === null ? "No" : localStorage.getItem("btnTwoWidth"),
            btnThreeWidth: localStorage.getItem("btnThreeWidth")  === null ? "No" : localStorage.getItem("btnThreeWidth"),
            LogoimgWidth: localStorage.getItem("LogoimgWidth")  === null ? "No" : localStorage.getItem("LogoimgWidth"),
            LogoimgUrl: localStorage.getItem("LogoimgUrl")  === null ? "No" : localStorage.getItem("LogoimgUrl"),
            HeadingText: localStorage.getItem("HeadingText")  === null ? "No" : localStorage.getItem("HeadingText"),
            inputParaValue: localStorage.getItem("inputParaValue")  === null ? "No" : localStorage.getItem("inputParaValue"),
            client: localStorage.getItem("client")  === null ? "No" : localStorage.getItem("client"),
            email : localStorage.getItem("email")  === null ? "No" : localStorage.getItem("email")
        }
        Axios.post("https://5e0a2be192b6410014c29fb3.mockapi.io/userdata",templateData)
        .then((response)=>{
            console.log(response.data);
            alert('Template Data stored in Database, you can check template details by click on button : "TEMPLATE DETAILS"');
            props.handleCloseToolbar();
            setTimeout(function(){  
                localStorage.clear() }, 3000);
           
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(templateData);
       
    }
    const classes = useStyles();
    return (
        <div className={classes.footerWrapper}>
            <Box  className={classes.BtnWrapper}>
            <Button onClick={handleCancelOperation}  className={classes.btn}>Cancel</Button> 
            <Button onClick={handleTemplateDetails} variant="contained" color="primary" >Save and Next <ArrowForwardIcon /></Button>
            </Box>
        </div>
    )
}

export default Footer;