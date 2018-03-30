import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import { Button, withStyles } from 'material-ui';
import { TextBoxRRF } from './Controls';

class StreamForm extends Component {
    handleSubmit = (data) => {
        console.log(data);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.SteramContainer}>
                <h4>Stream Settings</h4>
                <Form onSubmit={this.handleSubmit} model={"streamForm"}>
                    <TextBoxRRF labelName="Frequency" model={"streamForm.frequency"} />
                    <Button type="submit" classes={{ root: classes.ButtonListen }}>Save Settings</Button>
                </Form>
                <h4>Stream Server</h4>
                <div>Status : Offline</div>
                <div>Users Playing : 0</div>
                <div className={classes.ButtonContainer}>
                    <Button classes={{ root: classes.ButtonListen }}>Start</Button>
                    <Button classes={{ root: classes.ButtonListen }}>Stop</Button>
                </div>
                <h4>Stream Play</h4>
                <div>Status:Offline</div>

                <div className={classes.ButtonContainer}>
                    <Button classes={{ root: classes.ButtonListen }}>Start</Button>
                    <Button classes={{ root: classes.ButtonListen }}>Stop</Button>
                </div>

            </div>
        );
    }
}

const style = {
    SteramContainer: {
        padding: "1rem",
        "& h4:first-child": {
            paddingTop: "0"
        },
        "& h4": {
            borderBottom: "2px solid #d6d6d6",
            padding: ".4rem 0"
        }
    },
    StreamSetting: {
        display: "table",
        "&>div": {
            display: "table-row",
            "&>div": {
                display: "table-cell",
            },
        }
    },
    ButtonListen: {
        background: "#3d96a5",
        fontWeight: "bold"
    },
    ButtonContainer: {
        padding: "1rem 0",
        "& button:first-child": {
            marginLeft: "0"
        },
        "& button": {
            marginLeft: "1rem"
        }
    }
}

export default withStyles(style)(StreamForm);