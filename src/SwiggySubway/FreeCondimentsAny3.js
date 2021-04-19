import React, { Component } from 'react'

const sauce = [
    {
        id: 1,
        name: "Mayonnaise",
        isChecked: false
    },
    {
        id: 2,
        name: "Mint Mayonnaise",
        isChecked: false
    },
    {
        id: 3,
        name: "Chipotle South west",
        isChecked: false
    },
    {
        id: 4,
        name: "Red Chilli",
        isChecked: false
    },
    {
        id: 5,
        name: "Barbeque",
        isChecked: false
    },
    {
        id: 6,
        name: "Tandoori Mayo",
        isChecked: false
    },
    {
        id: 7,
        name: "Sweet Onion",
        isChecked: false
    }
]
export class FreeCondimentsAny3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            errMsg: ''
        }
        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {
        let count = 0;
        let allSauce = sauce;

        allSauce.forEach(sauces => {
            if (sauces.name === e.target.value) {
                sauces.isChecked = e.target.checked
            }
            if (sauces.isChecked === true) {
                count = count + 1
                console.log("count " + count);
            }
            if (count > 3) {
                sauces.isChecked = !e.target.checked
                this.setState({ errMsg: "You can select maximum of 3 choice of Sauce" })
                console.log("more than 3 selected");
            }
            else {
                this.setState({ errMsg: "" })
            }
        })
        this.setState({ sauce: allSauce })
    }

    render() {

        let sauces = []

        for (let [key, value] of Object.entries(sauce)) {
            sauces.push(
                <div className="Option">
                    <span className="vegSymbol">
                        <div className="vegIconsqu">
                            <div className="vegIconCircle"></div>
                        </div>
                    </span>
                    <input className="checkmark" key={key}
                        type="checkbox"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)}
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
                        <label>Choice of Sauce Any (3)</label>

                    </div>
                    <div className="Options">
                        {sauces}
                    </div>
                    <div className="errMsg">
                        {this.state.errMsg}
                    </div>
                </div>
            </div>
        )
    }
}

export default FreeCondimentsAny3