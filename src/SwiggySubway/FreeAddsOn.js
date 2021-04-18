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
        // this.setState({ BreadPreparation: event.target.value })
        console.log(event.target.value);
    }

    render() {

        let Preparation = []

        for (let [key, value] of Object.entries(BreadPreparation)) {
            Preparation.push(
                <div>
                    <input className="radiobtn" type="radio"
                        id={key}
                        name="bread"
                        onChange={(e) => this.handleChange(e)}
                        value={value.value}
                    // checked={this.state.BreadPrep === value.value}
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

{/* <div>
    <input type="radio" id="PlainBread" name="bread"
        onChange={this.handleChange} value="Plain Bread"
        checked={this.state.bread} />
    <label htmlFor="PlainBread">Plain Bread</label>
</div>
<div>
    <input type="radio" id="PlainBreadwithCheeseSlice" name="bread"
        onChange={this.handleChange} value="Plain Bread with Cheese Slice"
        checked={this.state.bread} />
    <label htmlFor="PlainBreadwithCheeseSlice">Plain Bread with Cheese Slice</label>
</div>
<div>
    <input type="radio" id="ToastedBread" name="bread"
        onChange={this.handleChange} value="Toasted Bread"
        checked={this.state.bread} />
    <label htmlFor="ToastedBread">Toasted Bread</label>
</div>
<div>
    <input type="radio" id="ToastedBreadWithCheeseSlice" name="bread"
        onChange={this.handleChange} value="Toasted Bread With Cheese Slice"
        checked={this.state.bread} />
    <label htmlFor="ToastedBreadWithCheeseSlice">Toasted Bread With Cheese Slice</label>
</div>
<div>
    <input type="radio" id="ToastedWithMozzarellaCheese" name="bread"
        onChange={this.handleChange} value="Toasted With Mozzarella Cheese"
        checked={this.state.bread} />
    <label htmlFor="ToastedWithMozzarellaCheese">Toasted With Mozzarella Cheese</label>
</div>
</div> */}
{/* <p>Bread For Preparation: {this.state.BreadPreparation}</p> */ }
{/* <button onClick={this.submit}>Submit</button> */ }
