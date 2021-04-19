import React, { Component } from 'react'
import Sub3 from '../Image/Sub3.jpeg'
import Sub1 from '../Image/Sub1.jpeg'
import Modal from './Modal'

const menuItem = [
    {
        id: 1,
        name: "BFF veg sub combo (15 cm, 6 Inch)",
        price: 352,
        offer: "buy any two 6inch veg sub & get 2 cookie free",
        image: Sub3
    }
    // {
    //     id: 2,
    //     name: "veggie delite sub ( 15 cm, 6 Inch)",
    //     price: 143,
    //     offer: "Delicious combination of garden fresh lettuce, tomatoes, green peppers, onions, olives and pickles. Served on freshly baked bread. 97% Fat Free.",
    //     image: Sub1
    // }
]

export class ModalHeader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    closeModal() {
        this.setState({ isOpen: false })
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
                                <button className="addBtn" onClick={this.openModal}>ADD + </button>
                                {
                                    this.state.isOpen && <Modal name={value.name} price={value.price} closeModal={this.closeModal} />
                                }
                            </div>
                        </div>

                    </div>
                    <hr className="hr" />
                </div>
            )
        }

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
                    <div>
                        {menuItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalHeader
