import React, { Component } from 'react'
import FreeCondimentsAny3 from './FreeCondimentsAny3';
import NoUpperLimit from './NoUpperLimit';
import PaidAddsOn from './PaidAddsOn';
import SelectBread from './SelectBread';
import FreeAddsOn from './FreeAddsOn'

export class Main extends Component {
    render() {
        return (
            <div>
                <SelectBread />
                <FreeCondimentsAny3 />
                <PaidAddsOn />
                <NoUpperLimit />
                <FreeAddsOn />
            </div>
        )
    }
}

export default Main
