import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Draggable from 'react-draggable';
import { Tooltip, Box } from '@material-ui/core';
import classes from './LogoImageSection.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Details from "./Details";
 

const useStyles = makeStyles((theme)=>({
      mainWrapper:{
        width:"100%",
        height:"fit-content",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        // background:"red",
        paddingLeft:"20px",
        paddingRight:"20px",
        paddingTop:"5px",
        boxSizing:"border-box",
        marginBottom:"30px"
      },
      subWrapper:{
        // width:"35%",
        // height:"fit-content",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
      },
      iconWrapper:{
        marginLeft:"10px",
        marginRight:"10px"
      }
     
}))


const LogoImg = (props) => {

  const styles = useStyles();

  const handleDeleteImg = () => {
    props.handleImgChange(null);
  };
  const handleImgSlidebar = () => {
    props.handleImgSlider(true)
  }

    return (
      
        <Box className={styles.mainWrapper} >
          <Draggable>
          <Box onDoubleClick={handleImgSlidebar} className={classes.ImgWrapper} style={{ width: `${props.imgWidth}%` }}>
            <Tooltip title="Image" placement="top-start">
              <img src={props.imgUrl} alt="logo" />
            </Tooltip>
            <Box className={classes.deleteIcon} onDoubleClick={handleDeleteImg}> <DeleteIcon /></Box>
          </Box>
          </Draggable>
          <Draggable>
          <Box className={styles.subWrapper}>
            <Box>
              <FacebookIcon color="primary"/>
              <TwitterIcon className={styles.iconWrapper} color="primary"/>
              <InstagramIcon color="primary"/>
            </Box>
            <Box  className={styles.iconWrapper}>
              <Details/>
            </Box>
          </Box>
          </Draggable>
        </Box>
    )

};

export default LogoImg;