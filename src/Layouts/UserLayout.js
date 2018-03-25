import React, { Component } from 'react';
import { Header } from './../Components';


export default ({ children }) => {

    return (
        <div>
            <Header Layout={"UserLayout"} />
            <div>
                {children}
            </div>
        </div>
    );

};