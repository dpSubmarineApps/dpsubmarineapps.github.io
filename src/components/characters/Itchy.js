import React, {Component} from "react";

class Itchy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="itchy">
            <div className="head">
                <div className="body ear ear-right"></div>
                <div className="body ear ear-left"></div>

                <div className="no-border body body-main"></div>
                <div className="no-border body body-main3"></div>
                <div className="body body-main2"></div>
                <div className="no-border body mouth11"></div>
                <div className="no-border mouth-inner"></div>

                <div className="body hair hair1"></div>
                <div className="body hair hair2"></div>
                <div className="body hair hair3"></div>
                <div className="body hair hair4"></div>
                <div className="body hair hair5"></div>
                <div className="body hair hair6"></div>
                <div className="body hair hair7"></div>

                <div className="tooth tooth1"></div>
                <div className="tooth tooth2"></div>

                <div className="mouth8"></div>
                <div className="body mouth1"></div>
                <div className="body mouth2"></div>
                <div className="body mouth3"></div>
                <div className="mouth4"></div>
                <div className="mouth5"></div>
                <div className="no-border body mouth6"></div>
                <div className="mouth7"></div>
                <div className="body mouth9"></div>
                <div className="mouth10"></div>

                <div className="left-eye eye">
                    <div className="no-border pupil"></div>
                </div>

                <div className="right-eye eye">
                    <div className="no-border pupil"></div>
                </div>
                <div className="nose"></div>

                <div className="spike1"></div>
                <div className="spike2"></div>
            </div>
        </div>;
    }
}

export default Itchy;