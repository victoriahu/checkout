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
            ConfirmationPage: false
        };
        this.gotoF1 = this.gotoF1.bind(this);
        this.gotoF2 = this.gotoF2.bind(this);
        this.gotoF3 = this.gotoF3.bind(this);
        this.gotoConfirmationPage = this.gotoConfirmationPage.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    checkout() {
        this.setState({
            checkout: true,
            onF1: false,
            onF2: false,
            onF3: false,
            ConfirmationPage: false
        });
    }
    gotoF1() {
        this.setState({
            checkout: false,
            onF1: true,
            onF2: false,
            onF3: false,
            ConfirmationPage: false
        });
    }
    gotoF2() {

        this.setState({
            checkout: false,
            onF1: false,
            onF2: true,
            onF3: false,
            ConfirmationPage: false
        });
    }
    gotoF3() {
        this.setState({
            checkout: false,
            onF1: false,
            onF2: false,
            onF3: true,
            ConfirmationPage: false
        });
    }
    gotoConfirmationPage() {
        this.setState({
            checkout: false,
            onF1: false,
            onF2: false,
            onF3: false,
            ConfirmationPage: true
        });
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                !this.state.checkout ? React.createElement(Blank, null) : React.createElement(Checkout, { gotoF1: this.gotoF1 })
            ),
            React.createElement(
                'h1',
                null,
                !this.state.onF1 ? React.createElement(Blank, null) : React.createElement(OnF1, { gotoF2: this.gotoF2 })
            ),
            React.createElement(
                'h1',
                null,
                !this.state.onF2 ? React.createElement(Blank, null) : React.createElement(OnF2, { gotoF3: this.gotoF3 })
            ),
            React.createElement(
                'h1',
                null,
                !this.state.onF3 ? React.createElement(Blank, null) : React.createElement(OnF3, { gotoConfirmationPage: this.gotoConfirmationPage })
            ),
            React.createElement(
                'h1',
                null,
                !this.state.ConfirmationPage ? React.createElement(Blank, null) : React.createElement(ConfirmationPage, { checkout: this.checkout })
            )
        );
    }
}

const Checkout = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            null,
            'Checkout'
        ),
        React.createElement(
            'button',
            { onClick: props.gotoF1 },
            'Next'
        )
    );
};

const Blank = () => {
    return React.createElement('div', null);
};

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
        };
        console.log("account data", account);

        fetch('/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset = utf-8'
            },
            body: JSON.stringify(account)
        }).then(() => {
            this.setState({
                name: '',
                email: '',
                password: ''
            });
        });
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
        return React.createElement(
            'form',
            { onSubmit: () => {
                    this.submitAccounts();this.props.gotoF2();
                } },
            React.createElement(
                'label',
                null,
                'Name:',
                React.createElement('input', { type: 'text', name: 'name', value: this.state.name, onChange: this.handleChangeName })
            ),
            React.createElement(
                'label',
                null,
                ' Email:',
                React.createElement('input', { type: 'text', name: 'email', value: this.state.email, onChange: this.handleChangeEmail })
            ),
            React.createElement(
                'label',
                null,
                ' Password:',
                React.createElement('input', { type: 'text', name: 'password', value: this.state.password, onChange: this.handleChangePassword })
            ),
            React.createElement(
                'button',
                { type: 'submit' },
                'Next'
            )
        );
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
        };
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
        });
        console.log(this.state);
    }
    lineTwoOnChange(e) {
        this.setState({
            lineTwo: e.target.value
        });
        console.log(this.state);
    }

    changeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    changeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    changeZip(e) {
        this.setState({
            zip: e.target.value
        });
    }
    changePN(e) {
        this.setState({
            phonenumber: e.target.value
        });
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
        }).then(res => res.json()).then(response => console.log('Success: ', JSON.stringify(response))).catch(error => console.log('Error: ', error));
    }
    render() {
        return React.createElement(
            'form',
            { onSubmit: () => {
                    this.submitForm();this.props.gotoF3();
                } },
            React.createElement(
                'h4',
                null,
                'Address'
            ),
            React.createElement(
                'label',
                null,
                ' Line One:',
                React.createElement('input', { type: 'text', onChange: this.LineOneOnChange, value: this.state.lineOne })
            ),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                ' Line Two:',
                React.createElement('input', { type: 'text', value: this.state.lineTwo, onChange: this.lineTwoOnChange })
            ),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                ' City',
                React.createElement('input', { type: 'text', value: this.state.city, onChange: this.changeCity })
            ),
            React.createElement(
                'label',
                null,
                ' State',
                React.createElement('input', { type: 'text', value: this.state.state, onChange: this.changeState })
            ),
            React.createElement(
                'label',
                null,
                ' Zip Code',
                React.createElement('input', { type: 'text', value: this.state.zip, onChange: this.changeZip })
            ),
            React.createElement(
                'label',
                null,
                ' Phone Number',
                React.createElement('input', { type: 'text', value: this.state.phonenumber, onChange: this.changePN })
            ),
            React.createElement(
                'button',
                { type: 'submit' },
                'Next'
            )
        );
    }
}

const OnF3 = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            null,
            'Credit Card'
        ),
        React.createElement(
            'div',
            null,
            'CC #'
        ),
        React.createElement(
            'div',
            null,
            'Exp date'
        ),
        React.createElement(
            'div',
            null,
            'CVV'
        ),
        React.createElement(
            'div',
            null,
            'Billing Zip Code'
        ),
        React.createElement(
            'button',
            { onClick: props.gotoConfirmationPage },
            'Next'
        )
    );
};

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
        };
    }
    componentDidMount() {
        fetch("/confirmation", {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        })
        //make sure of format being sent back
        .then(res => res.json()).then(result => {
            // console.log("fetch request made");
            // console.log("typeof result", typeof result);
            // console.log(result);
            // console.log("username", result[result.length -1].username);
            // console.log(this.state);
            var usrnme = String(result[result.length - 1].username);
            var eml = String(result[result.length - 1].email);

            this.setState({
                username: usrnme,
                email: eml,
                lineOne: String(result[result.length - 1].lineOne),
                lineTwo: String(result[result.length - 1].lineTwo),
                city: String(result[result.length - 1].city),
                state: String(result[result.length - 1].addressState),
                zip: String(result[result.length - 1].zip),
                pn: String(result[result.length - 1].phone_number)
            });
        }, error => {
            this.setState({
                username: 'error',
                email: 'error'
            });
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'Username:'
            ),
            React.createElement(
                'h4',
                null,
                this.state.username
            ),
            React.createElement(
                'h3',
                null,
                'Email:'
            ),
            React.createElement(
                'h4',
                null,
                this.state.email
            ),
            React.createElement(
                'h3',
                null,
                'Line One:'
            ),
            React.createElement(
                'div',
                null,
                this.state.lineOne
            ),
            React.createElement(
                'h3',
                null,
                'Line Two:'
            ),
            React.createElement(
                'div',
                null,
                this.state.lineTwo
            ),
            React.createElement(
                'h3',
                null,
                'City:'
            ),
            React.createElement(
                'div',
                null,
                this.state.city
            ),
            React.createElement(
                'h3',
                null,
                'State:'
            ),
            React.createElement(
                'div',
                null,
                this.state.state
            ),
            React.createElement(
                'h3',
                null,
                'Zip:'
            ),
            React.createElement(
                'div',
                null,
                this.state.zip
            ),
            React.createElement(
                'h3',
                null,
                'Phone Number:'
            ),
            React.createElement(
                'div',
                null,
                this.state.pn
            ),
            React.createElement(
                'button',
                { onClick: this.props.checkout },
                'Check Out'
            )
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjaGVja291dCIsIm9uRjEiLCJvbkYyIiwib25GMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJnb3RvRjEiLCJiaW5kIiwiZ290b0YyIiwiZ290b0YzIiwiZ290b0NvbmZpcm1hdGlvblBhZ2UiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkNoZWNrb3V0IiwiQmxhbmsiLCJPbkYxIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInN1Ym1pdEFjY291bnRzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50IiwidXNlcm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiT25GMiIsImxpbmVPbmUiLCJsaW5lVHdvIiwiY2l0eSIsInppcCIsInBob25lbnVtYmVyIiwiTGluZU9uZU9uQ2hhbmdlIiwibGluZVR3b09uQ2hhbmdlIiwic3VibWl0Rm9ybSIsImNoYW5nZUNpdHkiLCJjaGFuZ2VTdGF0ZSIsImNoYW5nZVppcCIsImNoYW5nZVBOIiwiZGF0YSIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJPbkYzIiwicG4iLCJjb21wb25lbnREaWRNb3VudCIsIkhlYWRlcnMiLCJtb2RlIiwiY2FjaGUiLCJyZXN1bHQiLCJ1c3JubWUiLCJTdHJpbmciLCJsZW5ndGgiLCJlbWwiLCJhZGRyZXNzU3RhdGUiLCJwaG9uZV9udW1iZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBLE1BQU1B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QUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUsscUJBQUtaLEtBQUwsQ0FBVzJCO0FBQWhCLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSyxxQkFBSzNCLEtBQUwsQ0FBV2lCO0FBQWhCLGFBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFNSTtBQUFBO0FBQUE7QUFBTSxxQkFBS2pCLEtBQUwsQ0FBV3VDO0FBQWpCLGFBTko7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFRSTtBQUFBO0FBQUE7QUFBTSxxQkFBS3ZDLEtBQUwsQ0FBV3dDO0FBQWpCLGFBUko7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFVSTtBQUFBO0FBQUE7QUFBTSxxQkFBS3hDLEtBQUwsQ0FBV3lDO0FBQWpCLGFBVko7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFZSTtBQUFBO0FBQUE7QUFBTSxxQkFBS3pDLEtBQUwsQ0FBV0E7QUFBakIsYUFaSjtBQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQWNJO0FBQUE7QUFBQTtBQUFNLHFCQUFLQSxLQUFMLENBQVcwQztBQUFqQixhQWRKO0FBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBZ0JJO0FBQUE7QUFBQTtBQUFNLHFCQUFLMUMsS0FBTCxDQUFXMEQ7QUFBakIsYUFoQko7QUFpQkk7QUFBQTtBQUFBLGtCQUFRLFNBQVcsS0FBSzNELEtBQUwsQ0FBV0UsUUFBOUI7QUFBQTtBQUFBO0FBakJKLFNBREo7QUFxQkg7QUExRTBDOztBQTZFL0NxRSxTQUFTMUQsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCMkQsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja291dDogdHJ1ZSxcbiAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlLCBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvdG9GMSA9IHRoaXMuZ290b0YxLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0YyID0gdGhpcy5nb3RvRjIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvRjMgPSB0aGlzLmdvdG9GMy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9Db25maXJtYXRpb25QYWdlID0gdGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrb3V0ID0gdGhpcy5jaGVja291dC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBjaGVja291dCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGdvdG9GMSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGdvdG9GMigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IHRydWUsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvQ29uZmlybWF0aW9uUGFnZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUuY2hlY2tvdXQpID8gPEJsYW5rIC8+IDogPCBDaGVja291dCBnb3RvRjEgPSB7dGhpcy5nb3RvRjF9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYxKSA/IDxCbGFuayAvPiA6IDwgT25GMSBnb3RvRjIgPSB7dGhpcy5nb3RvRjJ9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYyKSA/IDxCbGFuayAvPiA6IDwgT25GMiBnb3RvRjMgPSB7dGhpcy5nb3RvRjN9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYzKSA/IDxCbGFuayAvPiA6IDwgT25GMyBnb3RvQ29uZmlybWF0aW9uUGFnZSA9IHt0aGlzLmdvdG9Db25maXJtYXRpb25QYWdlfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUuQ29uZmlybWF0aW9uUGFnZSkgPyA8QmxhbmsgLz4gOiA8IENvbmZpcm1hdGlvblBhZ2UgY2hlY2tvdXQgPSB7dGhpcy5jaGVja291dH0vPn08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IENoZWNrb3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5DaGVja291dDwvaDQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuZ290b0YxfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQmxhbmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIE9uRjEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlTmFtZSA9IHRoaXMuaGFuZGxlQ2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUVtYWlsID0gdGhpcy5oYW5kbGVDaGFuZ2VFbWFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVBhc3N3b3JkID0gdGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEFjY291bnRzID0gdGhpcy5zdWJtaXRBY2NvdW50cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN1Ym1pdEFjY291bnRzKGUpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nIHVyIGFjY291bnQgZGVldHNcIik7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50IGRhdGFcIiwgYWNjb3VudCk7XG5cbiAgICAgICAgZmV0Y2goJy9hY2NvdW50cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldCA9IHV0Zi04JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhY2NvdW50KSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VOYW1lKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQYXNzd29yZChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0geygpPT4ge3RoaXMuc3VibWl0QWNjb3VudHMoKTsgdGhpcy5wcm9wcy5nb3RvRjIoKX19PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lOiBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZU5hbWV9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRW1haWw6IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VFbWFpbH0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmR9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn1cblxuY2xhc3MgT25GMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZU9uZTogJycsXG4gICAgICAgICAgICBsaW5lVHdvOiAnJyxcbiAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgICAgIHBob25lbnVtYmVyOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTGluZU9uZU9uQ2hhbmdlID0gdGhpcy5MaW5lT25lT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saW5lVHdvT25DaGFuZ2UgPSB0aGlzLmxpbmVUd29PbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDaXR5ID0gdGhpcy5jaGFuZ2VDaXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUgPSB0aGlzLmNoYW5nZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlWmlwID0gdGhpcy5jaGFuZ2VaaXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQTiA9IHRoaXMuY2hhbmdlUE4uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgTGluZU9uZU9uQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaW5lT25lOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgbGluZVR3b09uQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaW5lVHdvOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlQ2l0eShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2l0eTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjaGFuZ2VTdGF0ZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhdGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVppcChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgemlwOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjaGFuZ2VQTihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGhvbmVudW1iZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybShlKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgbGluZU9uZTogdGhpcy5zdGF0ZS5saW5lT25lLFxuICAgICAgICAgICAgbGluZVR3bzogdGhpcy5zdGF0ZS5saW5lVHdvLFxuICAgICAgICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgICAgICAgemlwOiB0aGlzLnN0YXRlLnppcCxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLnN0YXRlLFxuICAgICAgICAgICAgcGhvbmVudW1iZXI6IHRoaXMuc3RhdGUucGhvbmVudW1iZXJcbiAgICAgICB9O1xuICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0IGZvcm0gaXMgd29ya2luZy4gZGF0YVwiLCBkYXRhKTtcblxuICAgICAgICBmZXRjaCgnL2FkZHJlc3MnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6ICcsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0geygpID0+IHt0aGlzLnN1Ym1pdEZvcm0oKTsgdGhpcy5wcm9wcy5nb3RvRjMoKTsgfX0+XG4gICAgICAgICAgICAgICAgPGg0PkFkZHJlc3M8L2g0PlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gTGluZSBPbmU6IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7dGhpcy5MaW5lT25lT25DaGFuZ2V9IHZhbHVlPSB7dGhpcy5zdGF0ZS5saW5lT25lfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IExpbmUgVHdvOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmxpbmVUd299IG9uQ2hhbmdlID0ge3RoaXMubGluZVR3b09uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBDaXR5XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZSA9IHt0aGlzLmNoYW5nZUNpdHl9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5zdGF0ZX0gb25DaGFuZ2UgPSB7dGhpcy5jaGFuZ2VTdGF0ZX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gWmlwIENvZGVcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLnppcH0gb25DaGFuZ2UgPSB7dGhpcy5jaGFuZ2VaaXB9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IFBob25lIE51bWJlclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUucGhvbmVudW1iZXJ9IG9uQ2hhbmdlID0ge3RoaXMuY2hhbmdlUE59PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IE9uRjMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNyZWRpdCBDYXJkPC9oND5cbiAgICAgICAgICAgIDxkaXY+Q0MgIzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DVlY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QmlsbGluZyBaaXAgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9Db25maXJtYXRpb25QYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQ29uZmlybWF0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgbGluZU9uZTogJycsXG4gICAgICAgICAgICBsaW5lVHdvOiAnJyxcbiAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgICAgIHBuOiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaChcIi9jb25maXJtYXRpb25cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCksXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgICAgIH0pXG4gICAgICAgIC8vbWFrZSBzdXJlIG9mIGZvcm1hdCBiZWluZyBzZW50IGJhY2tcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZldGNoIHJlcXVlc3QgbWFkZVwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGVvZiByZXN1bHRcIiwgdHlwZW9mIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJuYW1lXCIsIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0xXS51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHVzcm5tZSA9IFN0cmluZyhyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtMV0udXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBlbWwgPSBTdHJpbmcocmVzdWx0W3Jlc3VsdC5sZW5ndGggLTFdLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzcm5tZSwgXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWwsIFxuICAgICAgICAgICAgICAgICAgICBsaW5lT25lOiBTdHJpbmcocmVzdWx0W3Jlc3VsdC5sZW5ndGggLTFdLmxpbmVPbmUpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lVHdvOiBTdHJpbmcocmVzdWx0W3Jlc3VsdC5sZW5ndGggLTFdLmxpbmVUd28pLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBTdHJpbmcocmVzdWx0W3Jlc3VsdC5sZW5ndGggLTFdLmNpdHkpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogU3RyaW5nKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0xXS5hZGRyZXNzU3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICB6aXA6IFN0cmluZyhyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtMV0uemlwKSxcbiAgICAgICAgICAgICAgICAgICAgcG46IFN0cmluZyhyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtMV0ucGhvbmVfbnVtYmVyKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5Vc2VybmFtZTo8L2gzPlxuICAgICAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS51c2VybmFtZX08L2g0PlxuICAgICAgICAgICAgICAgIDxoMz5FbWFpbDo8L2gzPlxuICAgICAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5lbWFpbH08L2g0PlxuICAgICAgICAgICAgICAgIDxoMz5MaW5lIE9uZTo8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubGluZU9uZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+TGluZSBUd286PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmxpbmVUd299PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzPkNpdHk6PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmNpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzPlN0YXRlOjwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5zdGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+WmlwOjwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS56aXB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzPlBob25lIE51bWJlcjo8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUucG59PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMucHJvcHMuY2hlY2tvdXR9PkNoZWNrIE91dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59IFxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==