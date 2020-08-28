import React from 'react';
import './App.css';
import MainHeading from "./MainHeading";
import MultiCards from "./MultiCards";
import ToolbarWrapper from "./Toolbar";
import LogoImg from "./Practise";
import ButtonWrapper from "./ButtonWrapper";
import Banner from './Banner';
import Topbar from "./Topbar";
import Footer from "./Footer";
import TemplateFooter from "./TemplateFooter";

class App extends React.Component {

  state = {
    imgUrl: "https://images.template.net/wp-content/uploads/2017/04/Logo-Design1.jpg",
    imgWidth: 10,
    IsShowToolbar: false,
    IsShowImgSlider: false,
    IsShowBtnOneSlider: false,
    IsShowBtnTwoSlider: false,
    IsShowBtnThreeSlider: false,
    IsShowBannerImgSlider : false,
    IsShowBannerImgInputVal : true,
    selectedSectionImg : null,
    btnOneWidth: 10,
    btnTwoWidth: 10,
    btnThreeWidth: 10,
    bannerImg : "https://i.vimeocdn.com/video/600595198_390x220.webp",
    bannerImgSize : 70,

  }
  
  handleBtnOneSize = (value) => {
    this.setState({ btnOneWidth: value });
  }
  handleBtnThreeSize = (value) => {
    this.setState({ btnThreeWidth: value })
  }
  handleBtnTwoSize = (value) => {
    this.setState({ btnTwoWidth: value })
  }
  handleCloseToolbar=()=>{
    this.setState({IsShowToolbar:false})
  }
  handleImgSlider = (value) => {
    this.setState({
      IsShowToolbar: value, IsShowImgSlider: value,
      IsShowBtnOneSlider: false, IsShowBtnTwoSlider: false,
      IsShowBtnThreeSlider: false, IsShowBannerImgSlider: false,
      selectedSectionImg: 'logo'
    })
  }
  handleBannerImgSlider = () =>{
    this.setState({
      IsShowToolbar: true, IsShowImgSlider: false,
      IsShowBtnOneSlider: false, IsShowBtnTwoSlider: false,
      IsShowBtnThreeSlider: false, IsShowBannerImgSlider: true,
      selectedSectionImg: 'banner'
    })
  }
  handleBannerImg=(url)=>{
    this.setState({bannerImg:url})
  }
  handleBtnOneSlider = (value) => {
    this.setState({
      IsShowToolbar: value, IsShowImgSlider: false,
      IsShowBtnOneSlider: true, IsShowBtnTwoSlider: false,
      IsShowBtnThreeSlider: false, IsShowBannerImgSlider: false,
      selectedSectionImg:null

    })
  }
  handleBtnTwoSlider = (value) => {
    this.setState({
      IsShowToolbar: value, IsShowImgSlider: false,
      IsShowBtnOneSlider: false, IsShowBtnTwoSlider: value,
      IsShowBtnThreeSlider: false, IsShowBannerImgSlider: false,
      selectedSectionImg:null

    })
  }
  handleBtnThreeSlider = (value) => {
    this.setState({
      IsShowToolbar: value, IsShowImgSlider: false,
      IsShowBtnOneSlider: false, IsShowBtnTwoSlider: false,
      IsShowBtnThreeSlider: value, IsShowBannerImgSlider: false,
      selectedSectionImg:null

    })
  }
  handleImgChange = (currentImg) => {
    this.setState({ imgUrl: currentImg })
  }
  handleImgWidth = (currentWidth) => {
    this.setState({ imgWidth: currentWidth })
  }
  handleBannerImgSize = (val) =>{
      this.setState({bannerImgSize:val})
  }
  render() {
    return (
      <div>
        <Topbar handleImgSlider={this.handleImgSlider} handleBannerImgSlider={this.handleBannerImgSlider} handleBtnOneSlider={this.handleBtnOneSlider} handleBtnTwoSlider={this.handleBtnTwoSlider} handleBtnThreeSlider={this.handleBtnThreeSlider} />
        <ToolbarWrapper handleCloseToolbar={this.handleCloseToolbar} selectedSectionImg={this.state.selectedSectionImg} bannerImgSize={this.bannerImgSize} handleBannerImgSize={this.handleBannerImgSize} handleBannerImg={this.handleBannerImg} IsShowBannerImgSlider={this.state.IsShowBannerImgSlider} handleBtnOneSize={this.handleBtnOneSize} handleBtnThreeSize={this.handleBtnThreeSize} handleBtnTwoSize={this.handleBtnTwoSize} handleImgChange={this.handleImgChange} IsShowBtnThreeSlider={this.state.IsShowBtnThreeSlider} IsShowBtnTwoSlider={this.state.IsShowBtnTwoSlider} IsShowBtnOneSlider={this.state.IsShowBtnOneSlider} handleImgWidth={this.handleImgWidth} IsShowImgSlider={this.state.IsShowImgSlider} IsShowToolbar={this.state.IsShowToolbar} />
        <div className="templateWrapper">
        <LogoImg imgUrl={this.state.imgUrl} imgWidth={this.state.imgWidth} handleImgChange={this.handleImgChange} handleImgSlider={this.handleImgSlider} />
        <MainHeading />
        <Banner bannerImg={this.state.bannerImg} bannerImgSize={this.state.bannerImgSize} handleBannerImgSlider={this.handleBannerImgSlider}/>
        <ButtonWrapper btnOneWidth={this.state.btnOneWidth} btnTwoWidth={this.state.btnTwoWidth} handleBtnTwoSlider={this.handleBtnTwoSlider} handleBtnThreeSlider={this.handleBtnThreeSlider} handleBtnOneSlider={this.handleBtnOneSlider} btnThreeWidth={this.state.btnThreeWidth} />
        <MultiCards  handleBannerImg={this.handleBannerImg} />
        <TemplateFooter/>
        </div>
        <Footer/>
      </div>
    );
  }

}
export default App;
