import React, { Component } from 'react';

class StreamCreator extends Component {

    constructor(props) {
        super(props);

        this.connection = null;
    }
    componentDidMount = () => {
        this.connection = new window.RTCMultiConnection();
        this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

        this.connection.session = {
            audio: true,
            video: false,
            oneway: true
        };
        // this.connection.mediaConstraints = {
        //     audio: true,
        //     video: false
        // };
        this.connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
        };

        this.connection.openOrJoin('888888888881011');
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default StreamCreator;