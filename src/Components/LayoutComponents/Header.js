import React, { Component } from 'react';
import {
    Icon, AppBar, Typography, Toolbar,
    Grid, Paper, withStyles, IconButton,
    Menu, MenuItem
} from "material-ui";
import { connect } from 'react-redux';
import Wrapper from './../Wrapper';
import { LogoWhite } from "./../../Assets";

class Header extends Component {

    state = {
        anchorEl: null
    }
    static defaultProps = {
        Layout: null
    }

    render() {
        const { classes, Layout, userAuth } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar classes={{ root: classes.AppBar_root }} position="static" color="primary">
                <Wrapper>

                </Wrapper>
            </AppBar>

        );
    }
}

const style = {
    AppBar_root: {
        boxShadow: "none",
        background: "#3d96a5",
        boxShadow: "0 0 6px #4c8f9a",
        borderBottom: "1px solid #2a6c77"
    },
    Toolbar_root: {
        padding: "0px"
    },
    flex: {
        flex: 1,
    },
    Icon_root: {
        fontSize: "100px",
        color: "gray"
    }
};

const mapStateToProps = (state) => {
    const { userAuth } = state;
    return {
        userAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(Header));