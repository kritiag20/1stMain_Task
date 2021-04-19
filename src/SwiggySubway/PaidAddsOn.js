import React, { Component } from 'react'

const AddOnItem = [
    {
        id: 1,
        name: "Veg Protein",
        price: 48,
        isChecked: false
    },
    {
        id: 2,
        name: "Cheese Slice",
        price: 15,
        isChecked: false
    },
    {
        id: 3,
        name: "Mozzarella Cheese",
        price: 15,
        isChecked: false
    }
]

export class PaidAddsOn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            TotalAmt: this.props.price
        }
        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {
        console.log((JSON.stringify(this.props)));
        console.log(e.target.value + " " + e.target.checked.toString());

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
        this.props.amount(NewAmt)
        
    }


    render() {

        let AddOnOption = []

        for (let [key, value] of Object.entries(AddOnItem)) {
            AddOnOption.push(
                <div className="Option">
                    <span className="vegSymbol">
                        <div className="vegIconsqu">
                            <div className="vegIconCircle"></div>
                        </div>
                    </span>
                    <input className="checkmark" type="checkbox"
                        key={key} name="addOn"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)} />
                    <span className="btnText">
                        {value.name}
                        <span className="optional">&#8377;{value.price}</span>
                    </span>
                </div>

            )
        }

        return (
            <div className="group-cont">
                <div className="group-heading">
                    <label htmlFor="AddOn">Adds On <span className="optional">(optional)</span></label>
                </div>
                <div>
                    {AddOnOption}
                </div>
            </div>
        )
    }
}

export default PaidAddsOn
