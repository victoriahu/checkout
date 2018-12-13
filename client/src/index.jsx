// import React from "react";
// import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onF1: false,
            onF2: false,
            onF3: false,
            ConfirmationPage: false
        }
        this.gotoF1 = this.gotoF1.bind(this);
    }
    gotoF1() {
        this.setState(
            {onF1: true}
        )
    }
    render() {
        return (
            <div>
                <h1>{(!this.state.onF1) ? <Checkout /> : < OnF1 />}</h1>
                <h1>{(!this.state.onF2) ? <Checkout /> : < OnF2 />}</h1>
            </div>
        )
    }
}

const Checkout = () => {
    return (
        <div>
            <h4>Checkout</h4>
            <button onClick = {this.gotoF1}>Next</button>
        </div>
    )
}

const OnF1 = () => {
    return (
        <div>
            <div>name</div>
            <div>email</div>
            <div>password</div>
        </div>
    )
}

const OnF2 = () => {
    return (
        <div>
            <h4>Address</h4>
            <div>Line 1</div>
            <div>Line 2</div>
            <div>City</div>
            <div>State</div>
            <div>Zip Code</div>
            <div>Phone Number</div>
        </div>
    )
}

const OnF3 = () => {
    return (
        <div>
            <h4>Credit Card</h4>
            <div>CC #</div>
            <div>Exp date</div>
            <div>CVV</div>
            <div>Billing Zip Code</div>
        </div>
    )
}

const ConfirmationPage = () => {
    return (
        <div>F1 Data</div>
        <div>F2 Data</div>
        <div>F3 Data</div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));