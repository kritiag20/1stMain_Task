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
                NewAmt =  this.state.TotalAmt + options.price
                this.setState({ TotalAmt: NewAmt })
                console.log(NewAmt);
            }
            else if (options.name === e.target.value && e.target.checked === false) {
                NewAmt =  this.state.TotalAmt - options.price
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
                <div>
                    <input type="checkbox"
                        key={key} name="addOn"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)} /> {value.name}

                    <sub>&#8377;{value.price}</sub>
                </div>

            )
        }

        return (
            <div>
                <label htmlFor="AddOn">Adds On (optional)</label>
                <div>
                    {AddOnOption}
                    {/* <div>
                        <input type="checkbox" name="sauce" value="VegProtein"
                            checked={this.state.VegProtein} onChange={this.checkChange} /> VegProtein

                        <sub>&#8377;{this.state.VegProtPrice}</sub>
                    </div>
                    <div>
                        <input type="checkbox" name="sauce" value="CheeseSlice"
                            checked={this.state.CheeseSlice} onChange={this.checkChange} /> Cheese Slice

                        <sub>&#8377;{this.state.CheeseSlicePrice}</sub>
                    </div>
                    <div>
                        <input type="checkbox" name="sauce" value="MozzarellaCheese"
                            checked={this.state.MozzarellaCheese} onChange={this.checkChange} /> Mozzarella Cheese

                        <sub>&#8377;{this.state.MozzCheesePrice}</sub>
                    </div>
                    <div>
                        <input type="checkbox" name="sauce" value="Egg"
                            checked={this.state.Egg} onChange={this.checkChange} /> Egg

                        <sub>&#8377;{this.state.EggPrice}</sub>
                    </div> */}

                </div>
                <div>
                    Total Amount :  &#8377;{this.state.TotalAmt}
                </div>
            </div>
        )
    }
}

export default PaidAddsOn
