import React, { Component } from 'react';
import Header from './Header';
import HeaderTanggal from './HeaderTanggal';

export class FloatHeader extends Component {
    render() {
        return (
            <div class="floatHeader">
                <Header/>
                <HeaderTanggal/>
            </div>
        )
    }
}

export default FloatHeader
