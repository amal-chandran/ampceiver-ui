import React, { Component } from 'react';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';
import { create } from 'jss';
import jssExtend from 'jss-extend';
import jssCamelCase from "jss-camel-case";
import jssNested from "jss-nested";
import jssCompose from "jss-compose";
import JssProvider from 'react-jss/lib/JssProvider';

const jss = create({ plugins: [...jssPreset().plugins, jssExtend(), jssNested(), jssCamelCase(), jssCompose()] });
const generateClassName = createGenerateClassName();

export default class JSSWrapper extends Component {
    render() {
        const { children } = this.props;
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                {children}
            </JssProvider>
        );
    }
}