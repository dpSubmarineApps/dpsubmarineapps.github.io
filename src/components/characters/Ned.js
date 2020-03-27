import React, {Component} from "react";

class Ned extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="ned-flanders">
            <div className="head">
                <div className="hair-top hair"></div>
                <div className="hair-side hair"></div>
                <div className="no-border neck-bottom"></div>
                <div className="no-border neck-left"></div>
                <div className="body lip"></div>
                <div className="no-border body head-main"></div>
                <div className="no-border hair-line1 hair-line"></div>
                <div className="no-border hair-line2 hair-line"></div>
                <div className="no-border hair-line3 hair-line"></div>
                <div className="no-border hair-line4 hair-line"></div>
                <div className="no-border hair-line5 hair-line"></div>
                <div className="body head-top"></div>
                <div className="no-border body eye-bulge"></div>
                <div className="no-border body head-top-inner"></div>
                <div className="no-border neck-right"></div>
                <div className="body ear">
                    <div className="no-border inner"></div>
                </div>
                <div className="no-border sideburn hair"></div>
                <div className="no-border body head-side"></div>

                <div className="left-eye eye">
                    <div className="no-border pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="right-eye eye">
                    <div className="no-border pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="no-border glasses"></div>

                <div className="no-border mouth-top"></div>
                <div className="no-border mouth-left"></div>
                <div className="no-border mouth-right"></div>
                <div className="no-border mouth-bottom"></div>
                <div className="no-border mouth-inner"></div>
                <div className="no-border tongue"></div>

                <div className="moustache">
                    <div className="no-border moustache-hair1 hair left"></div>
                    <div className="no-border moustache-hair2 hair left"></div>
                    <div className="no-border moustache-hair3 hair left"></div>
                    <div className="no-border moustache-hair4 hair right"></div>
                    <div className="no-border moustache-hair5 hair right"></div>
                    <div className="no-border moustache-hair6 hair right"></div>
                </div>

                <div className="body nose"></div>
            </div>
        </div>;
    }
}

export default Ned;