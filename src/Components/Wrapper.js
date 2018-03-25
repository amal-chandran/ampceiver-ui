import React, { Component } from "react";
import { Grid } from "material-ui";

export default (props) => {
    return (
        <Grid container spacing={24}>
            <Grid item xs>
            </Grid>
            <Grid item xs={8}>
                {props.children}
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    );
}