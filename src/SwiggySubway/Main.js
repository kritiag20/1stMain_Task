import React, { Component } from 'react'
import sub1 from './Images/sub1'

export class ModalHeader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            price: "352"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="subway">
                        <div className="subwayHeading">Subway</div>
                        <div className="tagline">fast food, healthy food, salads, snacks,desserts, beverages</div>
                        <div className="tagline">East street, camp</div>
                    </div>
                </div>
                <div className="subway-menu">
                    <div className="menu-heading">recommended</div>
                    <div className="menu-item">
                        <div className="menu-item-detail">
                        <span className="vegSymb">
                                    <div className="vegIconsqu">
                                        <div className="vegIconCircle"></div>
                                    </div>
                                </span>
                            <div className="subway-name">
                                
                                BFF veg sub combo (15 cm, 6 Inch)
                            </div>
                            <span className="price">
                                &#8377;{this.state.price}
                            </span>
                            <div className="subway-offer">
                                buy any two 6" veg sub & get 2 cookie free
                            </div>
                        </div>
                        <div className="menu-item-image">
                            {sub1}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalHeader
