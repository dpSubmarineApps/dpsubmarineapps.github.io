import React, {Component} from "react";

class Apu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="apu">
            <div className="head">
                <div className="hair hair1"></div>
                <div className="hair hair2"></div>
                <div className="body head-main1"></div>
                <div className="circle body ear">
                    <div className="no-border circle inner1"></div>
                    <div className="no-border circle inner2"></div>
                </div>

                <div className="no-border body neck1"></div>

                <div className="hair sideburn">
                    <div className="no-border hair clip"></div>
                </div>

                <div className="circle body eyebrow"></div>
                <div className="circle body eyebag1"></div>

                <div className="circle left-eye eye">
                    <div className="no-border circle pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="circle right-eye eye">
                    <div className="no-border circle pupil"></div>
                    <div className="no-border body eyelid-top"></div>
                    <div className="no-border body eyelid-bottom"></div>
                </div>

                <div className="circle body mouth2"></div>

                <div className="body tooth tooth1"></div>
                <div className="body tooth tooth2"></div>
                <div className="body tooth tooth3"></div>
                <div className="body tooth tooth4"></div>

                <div className="circle body mouth1"></div>
                <div className="no-border circle eyebag2"></div>
                <div className="no-border circle body mouth3"></div>

                <div className="no-border body neck2"></div>

                <div className="body nose-tip"></div>
                <div className="no-border body nose"></div>

                <div className="no-border moustache moustache-left"></div>
                <div className="no-border moustache moustache-right"></div>
            </div>
        </div>;
    }
}

export default Apu;