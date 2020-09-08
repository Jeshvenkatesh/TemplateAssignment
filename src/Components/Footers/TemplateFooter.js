import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from "@material-ui/core";
import Draggable from 'react-draggable';



const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        width: "100%",
        height: 'fit-content',
        background: "seashell",
        paddingTop:"10px",
        paddingBottom:"10px",
        marginTop:"30px"
        
    },
    textWrapper : {
        textAlign:"center"
    }

}));
const TemplateFooter = () => {

    const classes = useStyles();

    return (
        <Draggable>
        <Box className={classes.footerWrapper}>
            <Container >
                <p className={classes.textWrapper}>lorem ipsun dolor lorem ipsun dolor lorem ipsun dolor lorem ipsun dolor lorem ipsun dolorlorem ipsun dolorlorem ipsun dolor lorem ipsun dolorlorem ipsun dolor  </p>
            </Container>
        </Box>
        </Draggable>
    )
}

export default TemplateFooter;