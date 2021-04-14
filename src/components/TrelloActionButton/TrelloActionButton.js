import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions';


class TrelloActionButton extends Component {

    state = {
        formOpen: false,
        text: ''
    };

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    textareaInputChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "rgba(0,0,0,.15)" : "inherit";
        const buttonTextBackground = list ? "white" : "inherit";


        return (
            <div onClick={this.openForm}
                style={{
                    ...styles.listViewGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextBackground,
                    backgroundColor: buttonTextColor
                }}>
                <Icon >add</Icon>
                <p>{buttonText}</p>
            </div>

        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter list title" : "Enter title for card"
        const buttonTitle = list ? "Add list" : "Add card"
        

        return (
            <div>
                <Card style={styles.cardView}>
                    <Textarea
                        style={styles.cardEditView}
                        placeholder={placeholder}
                        onBlur={this.closeForm}
                        autoFocus
                        value={this.state.text}
                        onChange={this.textareaInputChange} />
                </Card>
                <div style={styles.addCardBtnWrap}>
                    <Button                        
                        onMouseDown={ list ? this.addList : this.addCard}
                        variant="contained"
                        style={styles.addCardListBtn}>
                        {buttonTitle}{" "}
                    </Button>
                    <Icon style={styles.iconClose}>close</Icon>
                </div>
            </div>
        )
    };

    addList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text:''
            })
            dispatch(addList(text));
        }

        return;
    }

    addCard = () => {
        const { dispatch, listId} = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text:''
            })
            dispatch(addCard(text, listId));
        }

        return;
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
}

const styles = {
    listViewGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 4,
        height: 35,
        width: 280
    },
    cardEditView: {
        width: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        color: "#999",
        fontSize: "14px",
        overflow: "hidden"
    },
    cardView: {
        minHeight: 100,
        minWidth: 270,
        overflow: "hidden",
        padding: "10px"
    },
    addCardListBtn: {
        backgroundColor: "#5aac44",
        color: "#fff"
    },
    iconClose: {
        cursor: "pointer"
    },

    addCardBtnWrap: {
        display: "flex",
        alignItems: "center",
        marginTop: 10,

    }
}

export default connect()(TrelloActionButton);