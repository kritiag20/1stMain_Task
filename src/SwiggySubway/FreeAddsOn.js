import React, { Component } from 'react'

const BreadPreparation = [
    {
        id: 1,
        value: "Plain Bread",
        isChecked: false
    },
    {
        id: 2,
        value: "Plain Bread with Cheese Slice",
        isChecked: false
    },
    {
        id: 3,
        value: "Toasted Bread",
        isChecked: false
    },
    {
        id: 4,
        value: "Toasted Bread With Cheese Slice",
        isChecked: false
    },
    {
        id: 5,
        value: "Toasted With Mozzarella Cheese",
        isChecked: false
    },
]

export class FreeAddsOn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            BreadPrep: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        console.log(event.target.value);
    }

    render() {

        let Preparation = []

        for (let [key, value] of Object.entries(BreadPreparation)) {
            Preparation.push(
                <div className="Option">
                    <span className="vegSymbol">
                        <div className="vegIconsqu">
                            <div className="vegIconCircle"></div>
                        </div>
                    </span>
                    <input className="radiobtn" type="radio"
                        id={key}
                        name="bread"
                        onChange={(e) => this.handleChange(e)}
                        value={value.value}
                    />
                    <span className="btnText">
                        <label htmlFor={value.value}>{value.value}</label>

                    </span>
                </div>
            )
        }

        return (
            <div>
                <div className="group-cont">
                    <div className="group-heading">
                        <label htmlFor="bread">Choice of  Preparation</label>
                    </div>
                    <div className="Option">
                        {Preparation}
                    </div>

                </div>
            </div>
        )
    }
}

export default FreeAddsOn