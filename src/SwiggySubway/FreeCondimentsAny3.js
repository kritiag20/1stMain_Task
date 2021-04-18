import React, { Component } from 'react'

const sauce = [
    {
        id: 1,
        name: "Mayonnaise",
        isChecked: false
    },
    {
        id: 2,
        name: "MintMayonnaise",
        isChecked: false
    },
    {
        id: 3,
        name: "ChipotleSouthwest",
        isChecked: false
    },
    {
        id: 4,
        name: "RedChilli",
        isChecked: false
    },
    {
        id: 5,
        name: "Barbeque",
        isChecked: false
    },
    {
        id: 6,
        name: "TandooriMayo",
        isChecked: false
    },
    {
        id: 7,
        name: "SweetOnion",
        isChecked: false
    }
]
export class FreeCondimentsAny3 extends Component {

    constructor(props) {
        super(props)

        this.state = {

        //     Mayonnaise: false,
        //     MintMayonnaise: false,
        //     ChipotleSouthwest: false,
        //     RedChilli: false,
        //     Barbeque: false,
        //     TandooriMayo: false,
        //     SweetOnion: false,
        //     count: 0,
            errMsg: '',

        //     Sauce: ["Mayonnaise", "MintMayonnaise", "ChipotleSouthwest", "RedChilli", "Barbeque", "TandooriMayo", "SweetOnion"]
        }
        this.checkChange = this.checkChange.bind(this)
    }

    checkChange = (e) => {

        // console.log(sauce.length);
        console.log(e.target.value);
        let count = 0;
        let allSauce = sauce;

        allSauce.forEach(sauces => {
            if (sauces.name === e.target.value) {
                sauces.isChecked = e.target.checked
            }
            // console.log(sauces.isChecked);
            if (sauces.isChecked === true) {
                count = count + 1
                console.log("count " + count);
                // console.log("more than 3 selected");
            }
            if (count > 3) {
                sauces.isChecked = !e.target.checked
                this.setState({errMsg: "You can select maximum of 3 choice of Sauce"})
                console.log("more than 3 selected");
            }
        })
        this.setState({ sauce: allSauce })


        // let c = 0;
        // console.log(this.state.Sauce[0]);
        // // console.log(e.target.value + " " + e.target.checked);
        // this.setState({ [e.target.value]: e.target.checked })

        // console.log("count Before " + this.state.count);

        // for (c = 0; c <= 7; c++) {

        //     if (e.target.checked === true) {

        //         this.setState({ count: this.state.count + 1 })
        //         console.log("Count After " + this.state.count);
        //     }
        // }

        // if (this.state.count > 2) {
        //     console.log("more than 3 selected");
        //     this.setState({ errMsg: "You can select maximum 3 choices of Sauce" })
        //     return false
        // }
    }

    render() {

        let sauces = []

        for (let [key, value] of Object.entries(sauce)) {
            sauces.push(
                <div>
                    <input key={key}
                        type="checkbox"
                        value={value.name}
                        checked={value.isChecked}
                        onChange={(e) => this.checkChange(e)}
                    />
                    {value.name}
                </div>
            )
        }

        return (
            <div>
                <label htmlFor="Sauce">Choices of Sauce Any (3)</label>
                <div>
                    {sauces}
                </div>
                <div>
                    {this.state.errMsg}
                </div>
                {/* <div>
                        <input type="checkbox" name="selectSauce" value={this.state.Sauce[0]}
                            checked={this.state.Mayonnaise} onChange={() => this.checkChange()} /> Mayonnaise
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="MintMayonnaise"
                            checked={this.state.MintMayonnaise} onChange={this.checkChange} /> Mint Mayonnaise
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="ChipotleSouthwest"
                            checked={this.state.ChipotleSouthwest} onChange={this.checkChange} /> Chipotle South west
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="RedChilli"
                            checked={this.state.RedChilli} onChange={this.checkChange} /> Red Chilli
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="Barbeque"
                            checked={this.state.Barbeque} onChange={this.checkChange} /> Barbeque
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="TandooriMayo"
                            checked={this.state.TandooriMayo} onChange={this.checkChange} /> Tandoori Mayo
                    </div>
                    <div>
                        <input type="checkbox" name="selectSauce" value="SweetOnion"
                            checked={this.state.SweetOnion} onChange={this.checkChange} /> Sweet Onion
                    </div> */}

                {/* <div>
                    Mayonnaise : {this.state.Mayonnaise.toString()}<br></br>
                    MintMayonnaise: {this.state.MintMayonnaise.toString()}<br />
                    ChipotleSouthwest: {this.state.ChipotleSouthwest.toString()}<br />
                    RedChilli: {this.state.RedChilli.toString()}<br />
                    Barbeque: {this.state.Barbeque.toString()}<br />
                    TandooriMayo: {this.state.TandooriMayo.toString()}<br />
                    SweetOnion: {this.state.SweetOnion.toString()}<br />
                    Count = {this.state.count}<br />
                    Err Msg : {this.state.errMsg}
                </div> */}
            </div>
        )
    }
}

export default FreeCondimentsAny3