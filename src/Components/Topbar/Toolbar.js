import React from 'react';
import { Toolbar, Button, TextField, Box,Container, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import classes from "./Toolbar.module.css";
import CloseIcon from '@material-ui/icons/Close';


class ToolbarWrapper extends React.Component {

    state= {
        value: 10,
        BtnOneWidth : 10,
        BtnTwoWidth : 10,
        BtnThreeWidth : 10,
        BannerImgSize: 70
        
    }
   handleChange = (event, newValue) => {
       this.setState({value : newValue });
        this.props.handleImgWidth(newValue);
    };
   
     handleSubmit=(e)=>{
        e.preventDefault();
        const currentImg = e.target.inputVal.value;
        const val = this.props.selectedSectionImg;
        if(currentImg && val === 'logo'){
           this.props.handleImgChange(currentImg);
        }else if (currentImg && val === 'banner' ){
            this.props.handleBannerImg(currentImg);
        }
        e.target.reset();
    };
    handleBtnOneWidth=(event, btnOneWidth)=>{
        this.setState({BtnOneWidth:btnOneWidth})
        this.props.handleBtnOneSize(btnOneWidth);
    };
    handleBtnTwoWidth=(event,btnTwoWidth)=>{
      this.setState({BtnTwoWidth: btnTwoWidth})
      this.props.handleBtnTwoSize(btnTwoWidth)
    }
    handleBtnThreeWidth=(event,btnThreeWidth)=>{
       this.setState({BtnThreeWidth:btnThreeWidth})
       this.props.handleBtnThreeSize(btnThreeWidth)
    };
    handleBannerImgChange=(event,bannerSize)=>{
        this.setState({BannerImgSize:bannerSize})
        this.props.handleBannerImgSize(bannerSize)
    }
    handleCloseToolbar = () => {
        this.props.handleCloseToolbar()
    }
  render(){
    return (
        <div className={classes.mainWrapper}>
        {
        this.props.IsShowToolbar === true ?
        <Box className={classes.toolbarWrapper}>
       <form onSubmit={this.handleSubmit}>
        <Toolbar>
            <Box>
                <Container>
                <Button type="Submit">Change Image</Button>
                </Container>
            </Box>
            {
            this.props.IsShowImgSlider === true ?
            <Box className={classes.slider}>
            <Typography>Size</Typography>
                <Container>
                <Slider
                    value={this.state.value}
                    min={0}
                    max={100}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                />
                </Container>
            </Box>
            :
            null
             }
              {
            this.props.IsShowBannerImgSlider === true ?
            <Box className={classes.slider}>
            <Typography>Size</Typography>
                <Container>
                <Slider
                    value={this.state.BannerImgSize}
                    min={0}
                    max={100}
                    onChange={this.handleBannerImgChange}
                    valueLabelDisplay="auto"
                />
                </Container>
            </Box>
            :
            null
             }
               {
            this.props.IsShowBtnOneSlider === true ?
            <Box className={classes.slider}>
            <Typography>Size</Typography>
                <Container>
                <Slider
                    value={this.state.BtnOneWidth}
                    min={0}
                    max={100}
                    onChange={this.handleBtnOneWidth}
                    valueLabelDisplay="auto"
                />
                </Container>
            </Box>
            :
            null
             }
               {
            this.props.IsShowBtnTwoSlider === true ?
            <Box className={classes.slider}>
            <Typography>Size</Typography>
                <Container>
                <Slider
                    value={this.state.BtnTwoWidth}
                    min={0}
                    max={100}
                    onChange={this.handleBtnTwoWidth}
                    valueLabelDisplay="auto"
                />
                </Container>
            </Box>
            :
            null
             }
               {
            this.props.IsShowBtnThreeSlider === true ?
            <Box className={classes.slider}>
            <Typography>Size</Typography>
                <Container>
                <Slider
                    value={this.state.BtnThreeWidth}
                    min={0}
                    max={100}
                    onChange={this.handleBtnThreeWidth}
                    valueLabelDisplay="auto"
                />
                </Container>
            </Box>
            :
            null
             }
            
            <Box className={classes.textFieldWrapper}>
                <Typography>Link URL</Typography>
                <TextField type="text" label="Type here" name="inputVal" style = {{width: "88%"}} variant="outlined"/>
            </Box>
            <Box className={classes.closeBtn} onClick={this.handleCloseToolbar}>
                <CloseIcon/>
            </Box>
        </Toolbar>
        </form>
        </Box>
        :
        null
    }
    </div>
    )
}
}

export default ToolbarWrapper;
