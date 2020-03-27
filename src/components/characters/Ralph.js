import React, {Component} from "react";

class Ralph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="ralph-wiggum">
            <div className="head">

                <div className="body head1"></div>
                <div className="no-border body head2"></div>
                <div className="hair hair-left hair1"></div>
                <div className="hair hair-left hair2"></div>
                <div className="hair hair-left hair3"></div>
                <div className="hair hair-left hair4"></div>
                <div className="hair hair-left hair5"></div>
                <div className="hair hair-left hair6"></div>
                <div className="hair hair-left hair7"></div>
                <div className="hair hair-right hair8"></div>
                <div className="hair hair-right hair9"></div>
                <div className="hair hair-right hair10"></div>
                <div className="hair hair-right hair11"></div>
                <div className="hair hair-right hair12"></div>

                <div className="body ear">
                    <div className="inner1"></div>
                    <div className="inner2"></div>
                    <div className="no-border body clip"></div>
                </div>

                <div className="no-border body mouth5"></div>
                <div className="body mouth1"></div>
                <div className="no-border body mouth2"></div>
                <div className="no-border body mouth3"></div>
                <div className="no-border body mouth4"></div>

                <div className="left-eye eye">
                    <div className="no-border pupil"></div>
                </div>

                <div className="right-eye eye">
                    <div className="no-border pupil"></div>
                </div>

                <div className="body nose"></div>
            </div>
        </div>;
    }
}

export default Ralph;