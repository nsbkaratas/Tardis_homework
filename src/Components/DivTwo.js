import React, { Component } from 'react';
import DivThree from './DivThree';




class DivTwo extends Component {
    render() {
        return (
            <div>
                <DivThree lastOne={this.props.tardis}/>
               
            </div>
        );
    }
}

export default DivTwo;