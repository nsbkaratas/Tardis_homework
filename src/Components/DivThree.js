import React, { Component } from 'react';

class DivThree extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.lastOne.name}</h3>
            </div>
        );
    }
}

export default DivThree;