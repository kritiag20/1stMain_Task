import React, { Component } from 'react'

const Bread = [
    {
        id: 1,
        name: "Multigrain Bread",
        isChecked: false
    },
    {
        id: 2,
        name: "Multigrain Honey Oats Bread",
        isChecked: false
    },
    {
        id: 3,
        name: "Italian Bread",
        isChecked: false
    },
    {
        id: 4,
        name: "Roasted Garlic Bread",
        isChecked: false
    },
    {
        id: 5,
        name: "Parmesan Oregano Bread",
        isChecked: false
    }
]

export class SelectBread extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        // this.submit = this.submit.bind(this)
    }

    handleChange = (e) => {
        // this.setState({ bread: e.target.value })
        console.log(e.target.value);
        let allBread = Bread;

        allBread.forEach(bread => {
            if (bread.name === e.target.value) {
                bread.isChecked = e.target.checked
            }
        })
    }

    render() {
        let Breads = []

        for (let [key, value] of Object.entries(Bread)) {
            Breads.push(
                <div className="Option">
                    <span className="vegSymbol">
                        <div className="vegIconsqu">
                            <div className="vegIconCircle"></div>
                        </div>
                    </span>

                    <input className="radiobtn" type="radio"
                        key={key}
                        name="bread"
                        onChange={(e) => this.handleChange(e)}
                        value={value.name}
                    />
                    <span className="btnText">
                        {value.name}

                    </span>
                </div>
            )
        }

        return (
            <div>
                <div className="group-cont">

                    <div className="group-heading">
                        <label>Choice of  Bread</label>
                    </div>

                    <div className="Option">
                        {Breads}
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectBread

