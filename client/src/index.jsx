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
            username: this.state.name,
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

class OnF2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineOne: '',
            lineTwo: '',
            city: '',
            state: '',
            zip: '',
            phonenumber: ''
        }
        this.LineOneOnChange = this.LineOneOnChange.bind(this);
        this.lineTwoOnChange = this.lineTwoOnChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeZip = this.changeZip.bind(this);
        this.changePN = this.changePN.bind(this);
    }
    LineOneOnChange(e) {
        this.setState({
            lineOne: e.target.value
        })
        console.log(this.state);
    }
    lineTwoOnChange(e) {
        this.setState({
            lineTwo: e.target.value
        })
        console.log(this.state);
    }
    
    changeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    changeState(e) {
        this.setState({
            state: e.target.value
        })
    }
    
    changeZip(e) {
        this.setState({
            zip: e.target.value
        })
    }
    changePN(e) {
        this.setState({
            phonenumber: e.target.value
        })
    }

    submitForm(e) {
        var data = {
            lineOne: this.state.lineOne,
            lineTwo: this.state.lineTwo,
            city: this.state.city,
            zip: this.state.zip,
            state: this.state.state,
            phonenumber: this.state.phonenumber
       };
       console.log("submit form is working. data", data);

        fetch('/address', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success: ', JSON.stringify(response)))
        .catch(error => console.log('Error: ', error));
    }
    render() {
        return (
            <form onSubmit = {() => {this.submitForm(); this.props.gotoF3(); }}>
                <h4>Address</h4>
                <label> Line One: 
                <input type = "text" onChange = {this.LineOneOnChange} value= {this.state.lineOne}/>
                </label>
                <br></br>
                <label> Line Two:
                    <input type="text" value = {this.state.lineTwo} onChange = {this.lineTwoOnChange} />
                </label>
                <br></br>
                <label> City
                    <input type = "text" value = {this.state.city} onChange = {this.changeCity} />
                </label>
                <label> State
                    <input type = "text" value = {this.state.state} onChange = {this.changeState}></input>
                </label>
                <label> Zip Code
                    <input type = "text" value = {this.state.zip} onChange = {this.changeZip}></input>
                </label>
                <label> Phone Number
                    <input type = "text" value = {this.state.phonenumber} onChange = {this.changePN}></input>
                </label>
                <button type="submit">Next</button>
            </form>
        )
    }
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

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            lineOne: '',
            lineTwo: '',
            city: '',
            state: '',
            zip: '',
            pn: ''
        }
    }
    componentDidMount() {
        fetch("/confirmation", {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        })
        //make sure of format being sent back
            .then(res => res.json())
            .then(result => {
                // console.log("fetch request made");
                // console.log("typeof result", typeof result);
                // console.log(result);
                // console.log("username", result[result.length -1].username);
                // console.log(this.state);
                var usrnme = String(result[result.length -1].username);
                var eml = String(result[result.length -1].email);
                
                this.setState({
                    username: usrnme, 
                    email: eml, 
                    lineOne: String(result[result.length -1].lineOne),
                    lineTwo: String(result[result.length -1].lineTwo),
                    city: String(result[result.length -1].city),
                    state: String(result[result.length -1].addressState),
                    zip: String(result[result.length -1].zip),
                    pn: String(result[result.length -1].phone_number)
                });
            },
            (error) => {
                this.setState({
                    username: 'error',
                    email: 'error'
                });
            }
        )
    }
    
    render() {
        return (
            <div>
                <h3>Username:</h3>
                <h4>{this.state.username}</h4>
                <h3>Email:</h3>
                <h4>{this.state.email}</h4>
                <h3>Line One:</h3>
                <div>{this.state.lineOne}</div>
                <h3>Line Two:</h3>
                <div>{this.state.lineTwo}</div>
                <h3>City:</h3>
                <div>{this.state.city}</div>
                <h3>State:</h3>
                <div>{this.state.state}</div>
                <h3>Zip:</h3>
                <div>{this.state.zip}</div>
                <h3>Phone Number:</h3>
                <div>{this.state.pn}</div>
                <button onClick = {this.props.checkout}>Check Out</button>
            </div>
        )
    }
} 

ReactDOM.render(<App />, document.getElementById("app"));