import React from 'react';
import Draggable from 'react-draggable';
import { Box, Container,makeStyles } from "@material-ui/core";


const Banner = (props) => {
    const useStyles = makeStyles((theme) => ({
        mainDiv:{
            textAlign:"center",
            marginTop:"30px",
            marginBottom:"30px"
        },
        imgWrapper:{
            width:`${props.bannerImgSize}%`
        }
    
    }));
    const handleBannerImg=()=>{
        props.handleBannerImgSlider()
    }

    const classes = useStyles();

    return (
        <Draggable>
            <Box className={classes.mainDiv} onDoubleClick={handleBannerImg}>
                <Container>
                    <img className={classes.imgWrapper} src={props.bannerImg}  alt="banner" />
                </Container>
            </Box>
        </Draggable>
    )
}

export default Banner;