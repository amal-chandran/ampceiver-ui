import React, { Component } from 'react';
import { withStyles } from 'material-ui';

class TagIcon extends Component {
    static defaultProps = {
        data: null
    }
    render() {
        const { classes, color, children, data } = this.props;
        return (
            <div className={classes.TagIcon}>
                {data ? data.map((SingleData, i) => {
                    return (
                        <div key={i} className={SingleData.color}>{SingleData.name}</div>
                    );
                }) : <div className={color}>{children}</div>}
            </div>
        );
    }
}

const style = {
    TagIcon: {
        // background: "gray",
        "& div": {
            marginRight: "1rem",
            fontSize: "15px",
            background: "#5eb311",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "0px 7px",
            display: "inline-block"
        },
        "& div.blue": {
            background: "#77e0a6",
        }
    }
};

export default withStyles(style)(TagIcon);