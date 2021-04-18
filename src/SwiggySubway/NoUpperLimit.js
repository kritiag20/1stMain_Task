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
        name: "SaltAndPepper",
        isChecked: false
    }
]

export class NoUpperLimit extends Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     "Lettuce": false,
        //     "Tomato": false,
        //     "Cucumber": false,
        //     "Capsicum": false,
        //     "Olives": false,
        //     "Onions": false,
        //     "Pickle": false,
        //     "Jalapenos": false,
        //     "SaltAndPepper": false

        // }
        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {
        console.log(e.target.value + " " + e.target.checked);
        // this.setState({ [e.target.value]: e.target.checked })
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
                <div>
                    <input type="checkbox"
                        key={key}
                        name="veges"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)} /> {value.name}
                </div>
            )
        }

        return (
            <div>
                <label htmlFor="Vegetable">Choices of Vegetables <sub>(optional)</sub></label>
                <div>
                    {Vege}
                    {/* {this.state.vegetable.map((veg) => ( */}
                    {/* <div>
                            <input type="checkbox" value="Lettuce"
                                checked={this.state.Lettuce} onChange={this.checkChange} /> Lettuce
                        </div>
                        <div>
                            <input type="checkbox" value="Tomato"
                                checked={this.state.Tomato} onChange={this.checkChange} /> Tomato
                        </div>
                        <div>
                            <input type="checkbox" value="Cucumber"
                                checked={this.state.Cucumber} onChange={this.checkChange} /> Cucumber
                        </div>
                        <div>
                            <input type="checkbox" value="Capsicum"
                                checked={this.state.Capsicum} onChange={this.checkChange} /> Capsicum
                        </div>
                        <div>
                            <input type="checkbox" value="Olives"
                                checked={this.state.Olives} onChange={this.checkChange} /> Olives
                        </div>
                        <div>
                            <input type="checkbox" value="Onions"
                                checked={this.state.Onions} onChange={this.checkChange} /> Onions
                        </div>
                        <div>
                            <input type="checkbox" value="Pickle"
                                checked={this.state.Pickle} onChange={this.checkChange} /> Pickle
                        </div>
                        <div>
                            <input type="checkbox" value="Jalapenos"
                                checked={this.state.Jalapenos} onChange={this.checkChange} /> Jalapenos
                        </div>
                        <div>
                            <input type="checkbox" value="SaltAndPepper"
                                checked={this.state.SaltAndPepper} onChange={this.checkChange} /> Salt And Pepper
                        </div> */}
                    {/* ))} */}

                </div>
                {/* <div>
                    {this.state.Lettuce.toString()}
                </div> */}
            </div>
        )
    }
}

export default NoUpperLimit
