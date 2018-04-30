import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    _handleOnClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        let { someProp } = this.props;
        let { count } = this.state;

        return (
            <div className="someClass">
               <span> {`${someProp} ${count} times`} </span>
                <button onClick={this._handleOnClick}>Click me!</button>
            </div>
        );
    }
}

App.propTypes = {
    someProp: PropTypes.string
};

App.defaultProps = {
    someProp: 'You clicked the button'
};