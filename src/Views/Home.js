import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Wrapper, Uploader } from "./../Components";
import config from "./../Config/config.json";
import { authHelper } from "./../Helper";
import { authActions, notifiActions } from "./../Actions";
import { push } from 'react-router-redux';
import { UserLayout } from './../Layouts';

class Home extends Component {

    render() {
        const headers = authHelper.getHeader(false);
        this.props.children
        return (
            <UserLayout>
                <Wrapper>

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

export default connect(() => { return {}; }, mapDispatchToProps)(Home);