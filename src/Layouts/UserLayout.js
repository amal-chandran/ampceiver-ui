import React, { Component } from 'react';
import { Header } from './../Components';


export default ({ children }) => {

    return (
        <div>
            <Header Layout={"UserLayout"} />
            <div style={{ paddingTop: "14px" }}>
                {children}
            </div>
        </div>
    );

};