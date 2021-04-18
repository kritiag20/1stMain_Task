import React, { Component } from 'react'
import Main from './Main'



export class Modal extends Component {

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
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {

        return (
            <div>
                <div>
                    <button onClick={this.openModal}>Open Me</button>
                </div>
                {/* {this.state.isOpen && ( */}
                <div class="modal">

                    {/* <div className="backOverlay"></div> */}

                    <div className="content-container">
                        <div className="content">

                            <div className="content-header">
                                <div className="subName">
                                    Customize "BFF veg sub combo(15 cm, 6 Inch)"
                                </div>
                                <span className="closebtn-cont">
                                    <button className="closebtn" onClick={this.closeModal}>Close</button>
                                </span>
                            </div>

                            <div className="content-main">
                                <div className="main-data">
                                    <Main />
                                </div>
                            </div>

                            <div className="content-footer">
                                Total Amount :  &#8377;{this.state.TotalAmt}
                            </div>

                        </div>
                    </div>

                </div>
                {/* )} */}

            </div>
        )
    }
}

export default Modal
