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
    // submit = (e) => {
    //     e.preventDefault()
    //     console.log(this.state.bread);
    // }

    render() {
        let Breads = []

        for (let [key, value] of Object.entries(Bread)) {
            Breads.push(
                <div>
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


{/* <div>
    <input type="radio" id="MultigrainBread" name="bread"
        onChange={this.handleChange} value="Multigrain Bread"
        checked={this.state.bread === "Multigrain Bread"} />
    <label htmlFor="MultigrainBread">Multigrain Bread</label>
</div>
<div>
    <input type="radio" id="MultigrainHoneyOatsBread" name="bread"
        onChange={this.handleChange} value="Multigrain Honey Oats Bread"
        checked={this.state.bread === "Multigrain Honey Oats Bread"} />
    <label htmlFor="MultigrainHoneyOatsBread">Multigrain Honey Oats Bread</label>
</div>
<div>
    <input type="radio" id="ItalianBread" name="bread"
        onChange={this.handleChange} value="Italian Bread"
        checked={this.state.bread === "Italian Bread"} />
    <label htmlFor="ItalianBread">Italian Bread</label>
</div>
<div>
    <input type="radio" id="RoastedGarlicBread" name="bread"
        onChange={this.handleChange} value="Roasted Garlic Bread"
        checked={this.state.bread === "Roasted Garlic Bread"} />
    <label htmlFor="RoastedGarlicBread">Roasted Garlic Bread</label>
</div>
<div>
    <input type="radio" id="ParmesanOreganoBread" name="bread"
        onChange={this.handleChange} value="Parmesan Oregano Bread"
        checked={this.state.bread === "Parmesan Oregano Bread"} />
    <label htmlFor="ParmesanOreganoBread">Parmesan Oregano Bread</label>
</div> */}

{/* <p>Bread: {this.state.bread}</p>
                            <button onClick={this.submit}>Submit</button> */}


