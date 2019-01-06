import React, {Component} from 'react';

class Myjob extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    toglleState() {
        this.setState({isOpened: !this.state.isOpened});
    }


    render() {

        if (this.state.isOpened) {
            // dropdownText = 'Drop menu';

        }
        return (
            <div onClick={this.toglleState.bind(this)}>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Myjob;