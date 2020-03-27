import React, {Component} from "react";

class Homer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="homer">
            <div className="head">

                <div className="hair1"></div>
                <div className="hair2"></div>
                <div className="body head-top"></div>
                <div className="no-border body head-main"></div>

                <div className="no-border m1"></div>
                <div className="no-border m2"></div>
                <div className="no-border m3"></div>
                <div className="no-border m4"></div>

                <div className="no-border neck1"></div>
                <div className="body neck2"></div>

                <div className="body ear">
                    <div className="no-border inner1"></div>
                    <div className="no-border inner2"></div>
                    <div className="no-border body clip"></div>
                </div>

                <div className="mouth">
                    <div className="mouth5"></div>
                    <div className="mouth2"></div>
                    <div className="mouth1"></div>
                    <div className="mouth7"></div>
                    <div className="no-border mouth3"></div>
                    <div className="no-border mouth4"></div>
                    <div className="no-border mouth6"></div>
                    <div className="no-border mouth8"></div>
                </div>

                <div className="right-eye">
                    <div className="no-border right-eye-pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="body nose"></div>
                <div className="body nose-tip"></div>

                <div className="left-eye">
                    <div className="no-border left-eye-pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>
            </div>
        </div>;
    }
}

export default Homer;