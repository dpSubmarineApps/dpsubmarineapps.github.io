import React, {Component} from "react";

class Maggie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="maggie">
            <div className="head">

                <div className="no-border body head-main"></div>

                <div className="body hair hair2"></div>
                <div className="body hair hair1"></div>
                <div className="body hair hair3"></div>
                <div className="body hair hair4"></div>
                <div className="body hair hair5"></div>
                <div className="body hair hair6"></div>
                <div className="body hair hair7"></div>
                <div className="body hair hair8"></div>

                <div className="bow bow1"></div>
                <div className="circle bow bow2"></div>
                <div className="bow bow3"></div>

                <div className="no-border body neck"></div>

                <div className="circle body ear">
                    <div className="no-border circle inner1"></div>
                    <div className="no-border circle inner2"></div>
                    <div className="no-border body clip"></div>
                </div>

                <div className="circle body cheek"></div>

                <div className="no-border eyelash1 eyelash"></div>
                <div className="no-border eyelash2 eyelash"></div>
                <div className="no-border eyelash3 eyelash"></div>
                <div className="no-border eyelash4 eyelash"></div>
                <div className="no-border eyelash5 eyelash"></div>
                <div className="no-border eyelash6 eyelash"></div>
                <div className="no-border eyelash7 eyelash"></div>
                <div className="no-border eyelash8 eyelash"></div>

                <div className="circle eye right-eye">
                    <div className="no-border circle pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="body nose-tip"></div>

                <div className="circle eye left-eye">
                    <div className="no-border circle pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="circle body mouth"></div>

                <div className="circle dummy dummy1"></div>
                <div className="dummy dummy2">
                    <div className="dummy dummy3"></div>
                </div>
            </div>
        </div>;
    }
}

export default Maggie;