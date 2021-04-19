import React, { Component } from 'react'
import FreeCondimentsAny3 from './FreeCondimentsAny3';
import NoUpperLimit from './NoUpperLimit';
import PaidAddsOn from './PaidAddsOn';
import SelectBread from './SelectBread';
import FreeAddsOn from './FreeAddsOn'


export class Modal extends Component {

    constructor(props) {
        super(props)
        // const product = this.props.name
        this.state = {
            prodName :this.props.name,
            isOpen: false,
            TotalAmt: this.props.price
        }
        this.closeModal = this.closeModal.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
    }

    handleAmount = (amount) => {
        this.setState({ TotalAmt: amount })
        console.log("hello " + amount);
    }

    // openModal() {
    //     this.setState({ isOpen: true })
    // }
    closeModal = () => {
        this.props.closeModal()
    }

    render() {

        return (
            <div>
                {/* <div>
                    <button className="addBtn" onClick={this.openModal}>ADD + </button>
                </div> */}

                {/* {this.state.isOpen && ( */}

                    <div class="modal">
                        <div className="content-container">
                            <div className="content">

                                <div className="content-header">
                                    <div className="topHeading">

                                        <div className="subName-heading">
                                            <span className="vegSymb">
                                                <div className="vegIconsqu">
                                                    <div className="vegIconCircle"></div>
                                                </div>
                                            </span>
                                            <div className="subName">
                                                {`customize ${this.state.prodName}`}
                                            </div>

                                            <span className="closebtn-cont">
                                                <div className="closebtn" onClick={this.closeModal}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" class="closeBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="amt">
                                            &#8377;{this.state.TotalAmt}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="heading-group">
                                        <div className="subheading">Choice of Bread</div> <sup className="dot">.</sup>
                                        <div className="subheading"> Choice of Preparaton</div> <sup className="dot">.</sup>
                                        <div className="subheading">Choice of Vegetables</div> <sup className="dot">.</sup>
                                        <div className="subheading">Adds On</div> <sup className="dot">.</sup>
                                        <div className="subheading">Choice of Sauce Any (3)</div>
                                    </div>
                                </div>

                                <div className="content-main">
                                    <div className="main-data">
                                        <SelectBread />
                                        <FreeAddsOn />
                                        <NoUpperLimit />
                                        <PaidAddsOn amount={this.handleAmount} price={this.state.TotalAmt} />
                                        <FreeCondimentsAny3 />
                                    </div>
                                </div>

                                <div className="content-footer">
                                    <div className="amount">
                                        <div className="totalAmt">
                                            Total &#8377;{`${this.state.TotalAmt}.00`}
                                        </div>
                                        <div className="addItem">
                                            ADD ITEM
                                        </div>
                                    </div>
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
