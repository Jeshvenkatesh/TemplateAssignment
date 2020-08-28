import React from 'react';
import { AppBar, Container, Tabs, Tab, Box, Toolbar, Button } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../companyLogo.png";
import HelpIcon from '@material-ui/icons/Help';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles((theme) => ({
    tab:{
        minWidth: 10
    },
    toolbarMargin: {
        // ...theme.mixins.toolbar
        marginTop:"80px"
    },
    tabContainer:{
        marginLeft:"auto",
        marginRight:"auto"
    },
    tabWrapper:{
        marginLeft:"auto"
    },
    logoContainer:{
        width:"25%"
    },
    subBar:{
        width:"100%",
        height:"fit-content",
        background: 'lightblue'
    },
    prevBtn:{
        float:"right"
    }
}))


const Topbar = (props) => {

    const classes = useStyles();

    const ElevationScroll = (props) => {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }
    const handleEditLogo = () => {
       props.handleImgSlider(true)
    }
    const handleEditBanner = () => {
      props.handleBannerImgSlider()
    }
    const handleBtnOne = () => {
    props.handleBtnOneSlider(true);
    }
    const handleBtnTwo = () => {
     props.handleBtnTwoSlider(true);
    }
    const handleBtnThree = () => {
        props.handleBtnThreeSlider(true);
    }
 
        return (
            <React.Fragment>
                <ElevationScroll>
                    <AppBar position="fixed" color="#fff">
                        <Toolbar>
                            <Box className={classes.logoContainer}> 
                                <Container>
                                    <img src={Logo} alt="Teachedision" />
                                </Container>
                            </Box>
                            <Box className={classes.tabContainer}>
                                <Container>
                                    <Tabs
                                        // indicatorColor="primary"
                                        textColor="primary"
                                        variant="scrollable"
                                    >
                                        <Tab className={classes.tab} onClick={handleEditLogo}  label="Edit Logo" icon={<PhotoSizeSelectSmallIcon />} />
                                        <Tab className={classes.tab} onClick={handleEditBanner} label="Edit Banner" icon={<AspectRatioOutlinedIcon />} />
                                        <Tab  className={classes.tab} onClick={handleBtnOne} label="Button 1" icon={<RadioButtonUncheckedIcon />} />
                                        <Tab className={classes.tab} onClick={handleBtnTwo} label="Button 2" icon={<RadioButtonUncheckedIcon />} />
                                        <Tab className={classes.tab} onClick={handleBtnThree} label="Button 3" icon={<RadioButtonUncheckedIcon />} />
                                    </Tabs>
                                </Container>
                            </Box>
                            <Box>
                                <Container>
                                    <Tabs variant="scrollable">
                                        <Tab className={classes.tab}  label="Upgrade" />
                                        <Tab className={classes.tab}  icon={<AddSharpIcon />} />
                                        <Tab className={classes.tab}  icon={<HelpIcon />} />
                                        <Tab className={classes.tab}  icon={<NotificationsSharpIcon />} />
                                        <Tab className={classes.tab}  icon={<AccountCircleSharpIcon />} />
                                    </Tabs>
                                </Container>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Box className={classes.toolbarMargin} />
                <Box className={classes.subBar}>
                    <Container>
                    <Button>New Page</Button>
                    <Button color="primary" className={classes.prevBtn}><VisibilityIcon/>Preview page</Button>
                    </Container>
                </Box>
            </React.Fragment>
        )

}

export default Topbar;