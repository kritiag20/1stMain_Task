import React, { Component } from 'react'

const AddOnItem = [
    {
        id: 1,
        name: "VegProtein",
        price: 48,
        isChecked: false
    },
    {
        id: 2,
        name: "CheeseSlice",
        price: 15,
        isChecked: false
    },
    {
        id: 3,
        name: "MozzarellaCheese",
        price: 15,
        isChecked: false
    },
    {
        id: 4,
        name: "Egg",
        price: 39,
        isChecked: false
    },
]

export class PaidAddsOn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // VegProtein: false,
            // CheeseSlice: false,
            // MozzarellaCheese: false,
            // Egg: false,
            TotalAmt: 277,
            // VegProtPrice: 48,
            // CheeseSlicePrice: 15,
            // MozzCheesePrice: 15,
            // EggPrice: 39
        }
        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {
        // const Amt = this.state.TotalAmt
        console.log(e.target.value + " " + e.target.checked.toString());
        // this.setState({ [e.target.value]: e.target.checked })
        let NewAmt = 0
        let AddOn = AddOnItem;

        AddOn.forEach(options => {
            if (options.name === e.target.value) {
                options.isChecked = e.target.checked
            }

            if (options.name === e.target.value && e.target.checked === true) {
                NewAmt = this.state.TotalAmt + options.price
                this.setState({ TotalAmt: NewAmt })
                console.log(NewAmt);
            }
            else if (options.name === e.target.value && e.target.checked === false) {
                NewAmt = this.state.TotalAmt - options.price
                this.setState({ TotalAmt: NewAmt })
                console.log(this.state.TotalAmt);
            }
        })
        this.setState({ AddOnItem: AddOn })
        console.log("After" + this.state.TotalAmt);

    }


    render() {

        let AddOnOption = []

        for (let [key, value] of Object.entries(AddOnItem)) {
            AddOnOption.push(
                <div className="Option">
                    <input className="checkmark" type="checkbox"
                        key={key} name="addOn"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)} />
                    <span className="btnText">
                        {value.name}
                        <sub>&#8377;{value.price}</sub>
                    </span>
                </div>

            )
        }

        return (
            <div className="group-cont">
                <div className="group-heading">
                    <label htmlFor="AddOn">Adds On (optional)</label>
                </div>
                <div>
                    {AddOnOption}
                </div>
               
            </div>
        )
    }
}

export default PaidAddsOn
