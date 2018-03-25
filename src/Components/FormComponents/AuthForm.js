import React, { Component } from "react";
import { Control, Form } from 'react-redux-form';
import { Button, withStyles } from 'material-ui';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Auth } from "./../../Resource";
import { TextBoxRRF, SubmitButton } from './Controls';

class AuthForm extends Component {

    onSubmit = (data) => {
        const { actions, page } = this.props;

        if (page === "login")
            actions.loginAuth(data);
        else if (page === "signup")
            actions.signupAuth(data);

    }

    render() {
        const { page } = this.props;
        return (
            <Form model={"authForm"}
                onSubmit={this.onSubmit}
            >
                <div className="textfield-group">

                    <TextBoxRRF type="text" labelName="Username" model="authForm.username" id="authForm.username" />
                    <TextBoxRRF type="password" labelName="Password" model="authForm.password" id="authForm.password" />
                    {page === "signup" ?
                        [
                            <TextBoxRRF type="text" labelName="Re-Password" model="authForm.repassword" id="authForm.repassword" />,
                        ]
                        : ""}
                </div>
                <SubmitButton disabled={this.props.isFetchingItem || this.props.isCreating}>
                    {page === "signup" ? "Sign Up" : "Login"}
                </SubmitButton>
            </Form>
        );
    }
}



const mapStateToProps = (state) => {
    const { auth, userAuth } = state;
    return {
        page: userAuth.page,
        isFetchingItem: auth.isFetchingItem,
        isCreating: auth.isCreating
    };
};

const mapDispatchToProps = (dispatch) => {

    const { loginAuth, signupAuth } = Auth;
    return {
        actions: bindActionCreators({
            loginAuth, signupAuth
        }, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

