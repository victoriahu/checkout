// import React from "react";
// import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: true,
            onF1: false,
            onF2: false,
            onF3: false,
            ConfirmationPage: false, 
        }
        this.gotoF1 = this.gotoF1.bind(this);
        this.gotoF2 = this.gotoF2.bind(this);
        this.gotoF3 = this.gotoF3.bind(this);
        this.gotoConfirmationPage = this.gotoConfirmationPage.bind(this);
        this.checkout = this.checkout.bind(this);
    }
    
    checkout() {
        this.setState(
            {
                checkout: true,
                onF1: false,
                onF2: false,
                onF3: false,
                ConfirmationPage: false
            }
        )
    }
    gotoF1() {
        this.setState(
            {
                checkout: false,
                onF1: true,
                onF2: false,
                onF3: false,
                ConfirmationPage: false
            }
        )
    }
    gotoF2() {
        
        this.setState(
            {
                checkout: false,
                onF1: false,
                onF2: true,
                onF3: false,
                ConfirmationPage: false
            }
        )
    }
    gotoF3() {
        this.setState(
            {
                checkout: false,
                onF1: false,
                onF2: false,
                onF3: true,
                ConfirmationPage: false
            }
        )
    }
    gotoConfirmationPage() {
        this.setState(
            {
                checkout: false,
                onF1: false,
                onF2: false,
                onF3: false,
                ConfirmationPage: true
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{(!this.state.checkout) ? <Blank /> : < Checkout gotoF1 = {this.gotoF1}/>}</h1>
                <h1>{(!this.state.onF1) ? <Blank /> : < OnF1 gotoF2 = {this.gotoF2}/>}</h1>
                <h1>{(!this.state.onF2) ? <Blank /> : < OnF2 gotoF3 = {this.gotoF3}/>}</h1>
                <h1>{(!this.state.onF3) ? <Blank /> : < OnF3 gotoConfirmationPage = {this.gotoConfirmationPage}/>}</h1>
                <h1>{(!this.state.ConfirmationPage) ? <Blank /> : < ConfirmationPage checkout = {this.checkout}/>}</h1>
            </div>
        )
    }
}

const Checkout = (props) => {
    return (
        <div>
            <h4>Checkout</h4>
            <button onClick = {props.gotoF1}>Next</button>
        </div>
    )
}

const Blank = () => {
    return (
        <div></div>
    )
}

class OnF1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submitAccounts = this.submitAccounts.bind(this);
    }

    submitAccounts(e) {
        // debugger;
        // e.preventDefault();
        console.log("submitting ur account deets");

        const account = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log("account data", account);

        fetch('/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset = utf-8',
            },
            body: JSON.stringify(account),
        }).then(() => {
            this.setState({
                name: '',
                email: '',
                password: ''
            })
        })
        
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    
    render() {
        return (
            <form onSubmit = {()=> {this.submitAccounts(); this.props.gotoF2()}}>
                <label>Name: 
                <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName}/>
                </label>
                <label> Email: 
                <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                </label>
                <label> Password:
                <input type="text" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
                </label>
                <button type="submit">Next</button>
            </form>
        )
    }
    
}

const OnF2 = (props) => {
    return (
        <div>
            <h4>Address</h4>
            <div>Line 1</div>
            <div>Line 2</div>
            <div>City</div>
            <div>State</div>
            <div>Zip Code</div>
            <div>Phone Number</div>
            <button onClick = {props.gotoF3}>Next</button>
        </div>
    )
}

const OnF3 = (props) => {
    return (
        <div>
            <h4>Credit Card</h4>
            <div>CC #</div>
            <div>Exp date</div>
            <div>CVV</div>
            <div>Billing Zip Code</div>
            <button onClick = {props.gotoConfirmationPage}>Next</button>
        </div>
    )
}

const ConfirmationPage = (props) => {
    return (
        <div>
            <div>F1 Data</div>
            <div>F2 Data</div>
            <div>F3 Data</div>
            <button onClick = {props.checkout}>Check Out</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));