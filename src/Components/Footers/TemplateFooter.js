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
                <p className={classes.textWrapper}>Note: 1) We can edit or resize the elements not only from the topbar but also through particular element by double click on it.
                2) The cards are dynamically generated from backend through mock API. 3) Whenever card is clicked, The card image will be displayed as a banner image and card details will be displayed at bottom of the cards section.
                4) To change banner image by simple double click on it and paste new image url in the url field from toolbar and press enter.
                5) We can resize buttons in two ways first : double click on particular button and second : select the particular button from the topbar. </p>
            </Container>
        </Box>
        </Draggable>
    )
}

export default TemplateFooter;