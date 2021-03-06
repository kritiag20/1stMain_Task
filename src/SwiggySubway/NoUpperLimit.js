import React, { Component } from 'react'

const Vegetable = [
    {
        id: 1,
        name: "Lettuce",
        isChecked: false
    },
    {
        id: 2,
        name: "Tomato",
        isChecked: false
    },
    {
        id: 3,
        name: "Cucumber",
        isChecked: false
    },
    {
        id: 4,
        name: "Capsicum",
        isChecked: false
    },
    {
        id: 5,
        name: "Olives",
        isChecked: false
    },
    {
        id: 6,
        name: "Onions",
        isChecked: false
    },
    {
        id: 7,
        name: "Pickle",
        isChecked: false
    },
    {
        id: 8,
        name: "Jalapenos",
        isChecked: false
    },
    {
        id: 9,
        name: "Salt AndPepper",
        isChecked: false
    }
]

export class NoUpperLimit extends Component {

    constructor(props) {
        super(props)

        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {
        let veg = Vegetable;

        veg.forEach(veges => {
            if (veges.name === e.target.value) {
                veges.isChecked = e.target.checked
            }
        })
        this.setState({ Vegetable: veg })
    }


    render() {
        let Vege = []

        for (let [key, value] of Object.entries(Vegetable)) {
            Vege.push(
                <div className="Option">
                    <span className="vegSymbol">
                        <div className="vegIconsqu">
                            <div className="vegIconCircle"></div>
                        </div>
                    </span>
                    <input className="checkmark" type="checkbox"
                        key={key}
                        name="veges"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)} />
                    <span className="btnText">
                        {value.name}
                    </span>

                </div>
            )
        }

        return (
            <div className="group-cont">
                <div className="group-heading">
                    <label htmlFor="Vegetable">Choice of Vegetables <span className="optional">(optional)</span></label>
                </div>
                <div>
                    {Vege}
                </div>
            </div>
        )
    }
}

export default NoUpperLimit
