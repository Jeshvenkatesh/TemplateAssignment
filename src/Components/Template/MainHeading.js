import React from 'react';
import classes from './MainHeading.module.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Draggable from 'react-draggable';


class MainHeading extends React.Component {

    state = {
        inputValue: "Template",
        isShowText: true,
        inputParaValue: " Features: Dragable components, Resizable images and buttons, Add Move and Delete images, Inline text editors. Happy to Use by simple double click on elements",
        isShowParaText: true
    }
    handleInputVal = (e) => {
        const text = e.target.value;
        this.setState({ inputValue: text })
    }
    handleEditor = () => {
        this.setState({ isShowText: false })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.mainText.value;
        localStorage.setItem("HeadingText", text);
        if (text) {
            this.setState({ inputValue: text, isShowText: true });
        }
        this.setState({ isShowText: true })
    }
    handleParaEditor = () => {
        this.setState({ isShowParaText: false })
    }
    handleParaInputVal = (e) => {
        const text = e.target.value;
        this.setState({ inputParaValue: text });

    }
    handleParaSubmit = (e) => {
        e.preventDefault();
        const text = e.target.paraText.value;
        localStorage.setItem("inputParaValue", text);
        if (text) {
            this.setState({ inputParaValue: text, isShowParaText: true })
        }
        this.setState({ isShowParaText: true })
    }
    render() {
        return (
            <div>
                <Draggable>
                    <Container>
                        <div className={classes.textEditor}>
                            {
                                this.state.isShowText ?
                                    <div onDoubleClick={this.handleEditor}>
                                        <h1>{this.state.inputValue}</h1>
                                    </div>
                                    :
                                    <form onSubmit={this.handleSubmit}>
                                        <TextField fullWidth type="text" name="mainText" label="Edit Text" variant="outlined" value={this.state.inputValue} onChange={this.handleInputVal} />
                                    </form>
                            }
                        </div>
                    </Container>
                </Draggable>
                <Draggable>
                    <Container>
                        <div className={classes.paraTextWrapper}>
                            {
                                this.state.isShowParaText ?
                                    <div onDoubleClick={this.handleParaEditor}>
                                        <p>{this.state.inputParaValue}</p>
                                    </div>
                                    :
                                    <form onSubmit={this.handleParaSubmit}>
                                        <TextField fullWidth type="text" name="paraText" label="Edit Text" variant="outlined" value={this.state.inputParaValue} onChange={this.handleParaInputVal} />
                                    </form>
                            }
                        </div>
                    </Container>
                </Draggable>
            </div>
        );
    }
}

export default MainHeading;