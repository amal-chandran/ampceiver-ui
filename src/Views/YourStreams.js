import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from 'react-router-redux';
import {
    Grid, Icon, ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    withStyles, List, ListItem, ListItemIcon,
    ListItemText, Divider, Paper
} from 'material-ui';


import { Wrapper, Uploader } from "./../Components";
import config from "./../Config/config.json";
import { authHelper } from "./../Helper";
import { authActions, notifiActions } from "./../Actions";
import { UserLayout } from './../Layouts';

class Home extends Component {
    render() {
        const headers = authHelper.getHeader(false);
        const { classes } = this.props;
        return (
            <UserLayout>
                <Wrapper>
                    <Grid container>
                        <Grid item xs={3}>
                            <Paper>
                                <List component="nav">
                                    {[
                                        { primary: "Streaming", secondary: "Active streaming devices" },
                                        { primary: "Devices", secondary: "Connected devices" }
                                    ].map((data) => (
                                        <ListItem className={classes.ListItemRoot} button>
                                            {/* <ListItemIcon className={classes.ListIconRoot}>
                                            <Icon>inbox</Icon>
                                        </ListItemIcon> */}
                                            <ListItemText classes={{ primary: classes.ListItemPrimaryText }} primary={data.primary} secondary={data.secondary} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>

                        </Grid>
                        <Grid item xs>
                            <div style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                color: "#5a5a5a"
                            }}>
                                Explore List
                            </div>
                            {
                                [0, 1, 2, 3, 4].map((data) => (
                                    <ExpansionPanel defaultExpanded={true}>
                                        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>

                                            <Grid container spacing={0}
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                {/* <Grid item xs={1}>
                                                    <div><Icon style={{ fontSize: "3rem" }}>play_circle_outline</Icon></div>
                                                </Grid> */}
                                                <Grid item xs>
                                                    <div style={{
                                                        fontSize: "1.2rem",
                                                        fontWeight: "bold"
                                                    }}>FM 93.0</div>
                                                </Grid>
                                                <Grid item xs>
                                                    <div>128 Mhz</div>
                                                </Grid>
                                                <Grid item xs>
                                                    <div><a href="#">@apple</a></div>
                                                </Grid>

                                                <Grid item xs className={classes.TagIcon}>
                                                    <a href="#">FM</a>
                                                    <a href="#" className={"blue"}>FM Tunner</a>
                                                </Grid>
                                            </Grid>

                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                            maximus est, id dignissim quam.
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    // <Grid container spacing={0} style={{
                                    //     display: "flex", width: "100%",
                                    //     padding: "14px",
                                    //     margin: "10px 0px",
                                    //     borderBottom: "2px solid #80808030",
                                    //     paddingBottom: "8px",

                                    // }}
                                    //     justifyContent="center"
                                    //     alignItems="center"
                                    // >
                                    //     <Grid item xs={1}>
                                    //         <div><Icon style={{ fontSize: "3rem" }}>play_circle_outline</Icon></div>
                                    //     </Grid>
                                    //     <Grid item xs>
                                    //         <div style={{
                                    //             fontSize: "1.2rem",
                                    //             fontWeight: "bold"
                                    //         }}>FM 93.0</div>
                                    //         <div><a href="#">@apple</a></div>
                                    //     </Grid>
                                    //     <Grid item xs>
                                    //         <a href="#">#FM</a>
                                    //         <a href="#">#FM Tunner</a>
                                    //     </Grid>
                                    //     <Grid item xs={1}>
                                    //         <div><Icon>expand_more</Icon></div>
                                    //     </Grid>
                                    // </Grid>
                                ))
                            }

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
    TagIcon: {
        // background: "gray",
        "& a": {
            marginRight: "1rem",
            fontSize: "15px",
            background: "#5eb311",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "0px 7px"
        },
        "& a.blue": {
            background: "#77e0a6",
        }
    },
    ListIconRoot: {
        marginRight: "0px"
    },
    ListItemRoot: {
        paddingLeft: "16px"
    },
    ListItemPrimaryText: {
        fontWeight: "bold"
    }
};

export default withStyles(style)(connect(() => { return {}; }, mapDispatchToProps)(Home));