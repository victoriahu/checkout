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

const OnF2 = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            null,
            'Address'
        ),
        React.createElement(
            'div',
            null,
            'Line 1'
        ),
        React.createElement(
            'div',
            null,
            'Line 2'
        ),
        React.createElement(
            'div',
            null,
            'City'
        ),
        React.createElement(
            'div',
            null,
            'State'
        ),
        React.createElement(
            'div',
            null,
            'Zip Code'
        ),
        React.createElement(
            'div',
            null,
            'Phone Number'
        ),
        React.createElement(
            'button',
            { onClick: props.gotoF3 },
            'Next'
        )
    );
};

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
            email: ''
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
                email: eml
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
                'div',
                null,
                'F2 Data'
            ),
            React.createElement(
                'div',
                null,
                'F3 Data'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjaGVja291dCIsIm9uRjEiLCJvbkYyIiwib25GMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJnb3RvRjEiLCJiaW5kIiwiZ290b0YyIiwiZ290b0YzIiwiZ290b0NvbmZpcm1hdGlvblBhZ2UiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkNoZWNrb3V0IiwiQmxhbmsiLCJPbkYxIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInN1Ym1pdEFjY291bnRzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50IiwidXNlcm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiT25GMiIsIk9uRjMiLCJjb21wb25lbnREaWRNb3VudCIsIkhlYWRlcnMiLCJtb2RlIiwiY2FjaGUiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXNybm1lIiwiU3RyaW5nIiwibGVuZ3RoIiwiZW1sIiwiZXJyb3IiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVUsSUFERDtBQUVUQyxrQkFBTSxLQUZHO0FBR1RDLGtCQUFNLEtBSEc7QUFJVEMsa0JBQU0sS0FKRztBQUtUQyw4QkFBa0I7QUFMVCxTQUFiO0FBT0EsYUFBS0MsTUFBTCxHQUFjLEtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQUlDLFNBQVNDLE9BQU9GLE9BQU9BLE9BQU9HLE1BQVAsR0FBZSxDQUF0QixFQUF5QnRCLFFBQWhDLENBQWI7QUFDQSxnQkFBSXVCLE1BQU1GLE9BQU9GLE9BQU9BLE9BQU9HLE1BQVAsR0FBZSxDQUF0QixFQUF5QmhDLEtBQWhDLENBQVY7QUFDQSxpQkFBS04sUUFBTCxDQUFjO0FBQ1ZnQiwwQkFBVW9CLE1BREE7QUFFVjlCLHVCQUFPaUM7QUFGRyxhQUFkO0FBSUgsU0FwQkwsRUFxQktDLEtBQUQsSUFBVztBQUNQLGlCQUFLeEMsUUFBTCxDQUFjO0FBQ1ZnQiwwQkFBVSxPQURBO0FBRVZWLHVCQUFPO0FBRkcsYUFBZDtBQUlILFNBMUJMO0FBNEJIOztBQUVETCxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyxxQkFBS1osS0FBTCxDQUFXMkI7QUFBaEIsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFLLHFCQUFLM0IsS0FBTCxDQUFXaUI7QUFBaEIsYUFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQU9JO0FBQUE7QUFBQSxrQkFBUSxTQUFXLEtBQUtsQixLQUFMLENBQVdFLFFBQTlCO0FBQUE7QUFBQTtBQVBKLFNBREo7QUFXSDtBQW5EMEM7O0FBc0QvQ21ELFNBQVN4QyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJ5QyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrb3V0OiB0cnVlLFxuICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2UsIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ290b0YxID0gdGhpcy5nb3RvRjEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvRjIgPSB0aGlzLmdvdG9GMi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9GMyA9IHRoaXMuZ290b0YzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2UgPSB0aGlzLmdvdG9Db25maXJtYXRpb25QYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tvdXQgPSB0aGlzLmNoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIGNoZWNrb3V0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YxKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGdvdG9GMygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGdvdG9Db25maXJtYXRpb25QYWdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5jaGVja291dCkgPyA8QmxhbmsgLz4gOiA8IENoZWNrb3V0IGdvdG9GMSA9IHt0aGlzLmdvdG9GMX0vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLm9uRjEpID8gPEJsYW5rIC8+IDogPCBPbkYxIGdvdG9GMiA9IHt0aGlzLmdvdG9GMn0vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLm9uRjIpID8gPEJsYW5rIC8+IDogPCBPbkYyIGdvdG9GMyA9IHt0aGlzLmdvdG9GM30vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLm9uRjMpID8gPEJsYW5rIC8+IDogPCBPbkYzIGdvdG9Db25maXJtYXRpb25QYWdlID0ge3RoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2V9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5Db25maXJtYXRpb25QYWdlKSA/IDxCbGFuayAvPiA6IDwgQ29uZmlybWF0aW9uUGFnZSBjaGVja291dCA9IHt0aGlzLmNoZWNrb3V0fS8+fTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNoZWNrb3V0PC9oND5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvRjF9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBCbGFuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgT25GMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VOYW1lID0gdGhpcy5oYW5kbGVDaGFuZ2VOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRW1haWwgPSB0aGlzLmhhbmRsZUNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLmhhbmRsZUNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0QWNjb3VudHMgPSB0aGlzLnN1Ym1pdEFjY291bnRzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3VibWl0QWNjb3VudHMoZSkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRpbmcgdXIgYWNjb3VudCBkZWV0c1wiKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnQgZGF0YVwiLCBhY2NvdW50KTtcblxuICAgICAgICBmZXRjaCgnL2FjY291bnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0ID0gdXRmLTgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjY291bnQpLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZU5hbWUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlRW1haWwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVBhc3N3b3JkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7KCk9PiB7dGhpcy5zdWJtaXRBY2NvdW50cygpOyB0aGlzLnByb3BzLmdvdG9GMigpfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTmFtZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFbWFpbDogXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVtYWlsfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZH0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBPbkYyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgICAgIDxkaXY+TGluZSAxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxpbmUgMjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DaXR5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlN0YXRlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlppcCBDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlBob25lIE51bWJlcjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9GM30+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE9uRjMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNyZWRpdCBDYXJkPC9oND5cbiAgICAgICAgICAgIDxkaXY+Q0MgIzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DVlY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QmlsbGluZyBaaXAgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9Db25maXJtYXRpb25QYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQ29uZmlybWF0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaChcIi9jb25maXJtYXRpb25cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCksXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgICAgIH0pXG4gICAgICAgIC8vbWFrZSBzdXJlIG9mIGZvcm1hdCBiZWluZyBzZW50IGJhY2tcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZldGNoIHJlcXVlc3QgbWFkZVwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInR5cGVvZiByZXN1bHRcIiwgdHlwZW9mIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJuYW1lXCIsIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0xXS51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHVzcm5tZSA9IFN0cmluZyhyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtMV0udXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBlbWwgPSBTdHJpbmcocmVzdWx0W3Jlc3VsdC5sZW5ndGggLTFdLmVtYWlsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzcm5tZSwgXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnZXJyb3InXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+VXNlcm5hbWU6PC9oMz5cbiAgICAgICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUudXNlcm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICA8aDM+RW1haWw6PC9oMz5cbiAgICAgICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuZW1haWx9PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2PkYyIERhdGE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkYzIERhdGE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5jaGVja291dH0+Q2hlY2sgT3V0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0gXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19