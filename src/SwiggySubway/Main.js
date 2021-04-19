import React, { Component } from 'react'
import Sub3 from '../Image/Sub3.jpeg'
import Modal from './Modal'

const menuItem = [
    {
        id: 1,
        name: "BFF veg sub combo (15 cm, 6 Inch)",
        price: 352,
        offer: "buy any two 6inch veg sub & get 2 cookie free",
        image: Sub3
    }
]

export class ModalHeader extends Component {

    constructor(props) {
        super(props)

    }


    render() {
        let menuItems = []

        for (let [key, value] of Object.entries(menuItem)) {
            menuItems.push(
                <div>
                    <div key={key} className="menu-item">
                        <div className="menu-item-detail">
                            <span className="vegSymb">
                                <div className="vegIconsqu">
                                    <div className="vegIconCircle"></div>
                                </div>
                            </span>
                            <div className="subway-name">
                                {value.name}
                            </div>
                            <span className="price">
                                &#8377;{value.price}
                            </span>
                            <div className="subway-offer">
                                {value.offer}
                            </div>
                        </div>
                        <div className="menu-item-image">
                            <diV>
                                <img className="sub-images" src={value.image} alt="" />
                            </diV>
                            <div className="modalBtn">
                                <Modal name={value.name} price={value.price} />
                            </div>
                        </div>

                    </div>
                    <hr className="hr" />
                </div>
            )
        }

        return (
            <div>
                <div className="subway-wrap">
                    <div className="container">
                        <div className="subway">
                            <div className="subwayHeading">Subway</div>
                            <div className="tagline">fast food, healthy food, salads, snacks,desserts, beverages</div>
                            <div className="tagline">East street, camp</div>
                        </div>
                    </div>
                    <div className="subway-menu">
                        <div className="menu-heading">recommended</div>
                        <div>
                            {menuItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalHeader
