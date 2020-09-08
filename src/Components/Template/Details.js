import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Box, Button } from "@material-ui/core";
import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';



class Details extends React.Component {

    state = {
        isShowText: true,
        isShowTextEmail: true,
        client: "Venkatesh",
        email: "venkateswara.kolli@gmail.com",
        open: false,
        tempateData: []
    }
    handleInputVal = (e) => {
        this.setState({ client: e.target.value });

    }
    handleEmailInputVal = (e) => {
        this.setState({ email: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const client = e.target.client.value;
        if (client) {
            this.setState({ client: e.target.client.value, isShowText: true })
            localStorage.setItem("client", client);

        }
        this.setState({ isShowText: true })
        e.target.reset();
    }
    handleemailSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            this.setState({ email: e.target.email.value, isShowTextEmail: true })
            localStorage.setItem("email", email);
        }
        this.setState({ isShowTextEmail: true })
        e.target.reset();
    }
    handleClose=()=>{
        this.setState({open:false})
    }
    handleEditor = () => {
        this.setState({ isShowText: false })
    }
    handleEmailEditor = () => {
        this.setState({ isShowTextEmail: false })
    }
    GetTemplateDetails = () => {
        Axios.get("https://5e0a2be192b6410014c29fb3.mockapi.io/userdata")
            .then((response) => {
                console.log(response.data);
                this.setState({ tempateData: [...response.data], open: true })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const generateDetails = this.state.tempateData.map((item) => {
            return (
                <Box key={item.id}>
                    <DialogTitle>Client : {item.client}</DialogTitle>
                    <DialogContent>
                     <DialogContentText>Heading Text : {item.HeadingText}</DialogContentText>
                     <DialogContentText>Header Para : {item.inputParaValue}</DialogContentText>
                     <DialogContentText>Banner Img : {item.bannerImg}</DialogContentText>
                     <DialogContentText>Logo Img : {item.LogoimgUrl}</DialogContentText>
                     <DialogContentText>BannerImgSize : {item.bannerImgSize}</DialogContentText>
                     <DialogContentText>LogoImgSize : {item.LogoimgWidth}</DialogContentText>
                     <DialogContentText>BtnOneWidth : {item.btnOneWidth}</DialogContentText>
                     <DialogContentText>BtnTwoWidth : {item.btnTwoWidth}</DialogContentText>
                     <DialogContentText>BtnThreeWidth : {item.btnThreeWidth}</DialogContentText>
                    </DialogContent>
                </Box>
            )
        })
        return (
            <Container>
                <div>
                    {
                        this.state.isShowText ?
                            <div>
                                <div onDoubleClick={this.handleEditor}>
                                    <p>Client : {this.state.client}</p>
                                </div>
                            </div>
                            :
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <TextField fullWidth type="text" name="client" label="Client Name" variant="outlined" value={this.state.client} onChange={this.handleInputVal} />
                                </form>
                            </div>
                    }
                </div>
                <div>
                    {
                        this.state.isShowTextEmail ?
                            <div>
                                <div onDoubleClick={this.handleEmailEditor}>
                                    <p>Email : {this.state.email}</p>
                                </div>
                            </div>
                            :
                            <div>
                                <form onSubmit={this.handleemailSubmit}>
                                    <TextField fullWidth type="email" name="email" label="Client Email" variant="outlined" value={this.state.email} onChange={this.handleEmailInputVal} />
                                </form>
                            </div>
                    }
                </div><br />
                <Box>
                    <Button variant="contained" onClick={this.GetTemplateDetails} >Template Details</Button>
                </Box>
                <Dialog open={this.state.open}>
                    <DialogTitle>Template Details</DialogTitle>
                    {generateDetails}
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        )
    }
}
export default Details;