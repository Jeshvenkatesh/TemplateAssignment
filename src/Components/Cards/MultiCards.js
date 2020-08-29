import React from "react";
import Carousel from "react-multi-carousel";
import Draggable from 'react-draggable';
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";


class MultiCards extends React.Component {

    state = {
        cardData: [],
        selectedCard: null,
    }
    responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    handleCurrentItem = (item) => {
        this.setState({ selectedCard: item })
        this.props.handleBannerImg(item.thumbnail)
    }
    componentDidMount=()=>{
       Axios.get("https://5e0a2be192b6410014c29fb3.mockapi.io/data")
       .then((response)=>{
           console.log(response.data);
           this.setState({cardData : [...response.data]})
       })
       .catch((err)=>{
           console.log(err)
       })
    }
    generateCardDetails = (item) => {
        // console.log(item);
        if (item !== null) {
            return (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        lorem ipsum dollor lorem ipsum dollor lorem ipsum dollor lorem ipsum dollor lorem ipsum dollor
                        </Typography>
                    </CardContent>
                </Card>
            )
        }
    }
    render() {
        const generateCards = this.state.cardData.map((item) => {
            return (
                <div style={{ cursor: "pointer" }} key={item.id}  >
                    <Card style={{ width: '16rem' }}  onClick={() => this.handleCurrentItem(item)}  >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={item.thumbnail}
                                title={item.title}
                                height="140"
                            />
                        </CardActionArea>
                    </Card>
                </div>
            )
        })

        return (
            <Draggable>
            <Container>
                <Carousel
                //   draggable={true}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={this.responsive}>{generateCards}</Carousel>
                <br />
                {this.generateCardDetails(this.state.selectedCard)}

            </Container>
            </Draggable>
        )
    }
}

export default MultiCards;
