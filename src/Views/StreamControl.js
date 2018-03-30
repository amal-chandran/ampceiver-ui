import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from 'react-router-redux';
import {
    Grid, Icon, ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    withStyles, List, ListItem, ListItemIcon,
    ListItemText, Divider, Paper,
    Button
} from 'material-ui';


import { Wrapper, Uploader, TagIcon } from "./../Components";
import config from "./../Config/config.json";
import { authHelper } from "./../Helper";
import { authActions, notifiActions } from "./../Actions";
import { UserLayout } from './../Layouts';
import { StreamForm, StreamCreator, StreamReader } from './../Components';

class Home extends Component {
    render() {
        const headers = authHelper.getHeader(false);
        const { classes, match } = this.props;

        return (
            <UserLayout>
                <Wrapper>
                    <Grid container>
                        <Grid item xs={12}>
                            <h1>FM 93.8</h1>
                        </Grid>
                        <Grid item xs className={classes.StreamData}>
                            <div>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                            </div>
                            <h4>
                                Types:
                            </h4>
                            <TagIcon data={[
                                { name: "FM", color: "default" },
                                { name: "FM Tunner", color: "blue" }
                            ]} />
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.SteramContainer}>
                                {/* <StreamForm /> */}
                                <StreamCreator />
                            </Paper>
                        </Grid>
                    </Grid>
                </Wrapper>
            </UserLayout>
        );
    }
};



const mapDispatchToProps = (dispatch) => {
    const addNotifi = notifiActions.addNotifi;
    return {
        actions: bindActionCreators({
            addNotifi, push
        }, dispatch)
    }
};

const style = {
    StreamData: {
        "& h4": {
            margin: "1rem 0px",
            marginBottom: ".5rem"
        }
    }
};

export default withStyles(style)(connect(() => { return {}; }, mapDispatchToProps)(Home));