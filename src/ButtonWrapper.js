import React from 'react';
import Draggable from 'react-draggable';
import { Box, Button, makeStyles, Container } from "@material-ui/core";

const ButtonWrapper = (props) => {

    const useStyles = makeStyles((theme) => ({
        BtnOne: {
          margin: theme.spacing(1),
          width: `${props.btnOneWidth}%`
        },
        BtnTwo:{
            margin: theme.spacing(1),
            width: `${props.btnTwoWidth}%`
        },
        BtnThree:{
            margin: theme.spacing(1),
            width: `${props.btnThreeWidth}%`
        },
        BtnWrapper:{
            textAlign:"center",
            marginBottom:"30px"
        }
      }));

      const handleBtnOneSlider = ()=>{
           props.handleBtnOneSlider(true)
      };
      const handleBtnTwoSlider = () => {
          props.handleBtnTwoSlider(true)
      };
      const handleBtnThreeSlider =()=>{
          props.handleBtnThreeSlider(true)
      }


      const classes = useStyles();

    return (
        <Draggable>
        <Box className={classes.BtnWrapper}>
            <Container>
            <Button onDoubleClick={handleBtnOneSlider}  className= {classes.BtnOne} variant="contained"  size="small" color="primary">
                Button 1
            </Button>
            <Button onDoubleClick={handleBtnTwoSlider} className= {classes.BtnTwo} variant="contained" size="small" color="secondary">
                Button 2
            </Button>
            <Button onDoubleClick={handleBtnThreeSlider} className= {classes.BtnThree}  variant="contained" size="small" >Button 3</Button>
            </Container>
        </Box>
        </Draggable>
    )
}

export default ButtonWrapper;