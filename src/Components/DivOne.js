import React, { Component } from 'react';
import DivTwo from './DivTwo';

class DivOne extends Component {
    render() {
        return (
            <div>
                <DivTwo tardis={this.props.newName}/>
            </div>
        );
    }
}

export default DivOne;