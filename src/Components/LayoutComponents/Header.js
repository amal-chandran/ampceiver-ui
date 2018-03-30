import React, { Component } from 'react';
import {
    Icon, AppBar, Typography, Toolbar,
    Grid, Paper, withStyles, IconButton,
    Menu, MenuItem
} from "material-ui";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
                    <Toolbar classes={{ root: classes.Toolbar_root }}>
                        <Grid container alignItems="center">
                            <Grid item xs={6}>
                                <img style={{ width: "3rem" }} src={LogoWhite} alt="Logo" />
                                <div style={{ display: "inline-flex", verticalAlign: "top", flexDirection: "column", marginLeft: "14px" }}>
                                    <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Ampceiver</div>

                                    <div style={{
                                        lineHeight: "9px",
                                        fontSize: ".88rem",
                                        color: "#403131"
                                    }}>An realtime radio streaming app</div>
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>

                                <ul style={{ display: "flex" }}>
                                    {[
                                        { name: "Explore", url: "/home" },
                                        { name: "Your Streams", url: "/yourstreams" }
                                    ].map((data) => (
                                        <li>
                                            <NavLink className={classes.navLink} to={data.url}>{data.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>

                                {Layout === "UserLayout" && userAuth.authLogin ?
                                    <div>
                                        {/* <IconButton>
                                    <Icon>cloud_upload</Icon>
                                </IconButton> */}
                                        <IconButton
                                            aria-owns={open ? 'menu-appbar' : null}
                                            aria-haspopup="true"
                                            onClick={this.handleMenu}
                                            color="inherit"
                                        >
                                            <Icon>account_circle</Icon>
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={this.handleClose}
                                        >
                                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={(e) => {
                                                this.props.actions.push("/");
                                                this.handleClose(e);
                                            }}>Logout</MenuItem>
                                        </Menu>
                                    </div>
                                    : ""}
                            </Grid>
                        </Grid>
                    </Toolbar>
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
    },
    navLink: {
        fontSize: "1.2rem",
        marginRight: "1rem",
        color: "#fff",
        textDecoration: "none",
        "&.active": {
            color: "#3a3a3a",
            fontWeight: "bold"
        }
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