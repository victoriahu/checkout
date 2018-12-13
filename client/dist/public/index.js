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
        // e.preventDefault();
        console.log("submitting ur account deets");

        const account = {
            name: this.state.name,
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
                    this.submitAccounts();props.gotoF2();
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

const ConfirmationPage = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            null,
            'F1 Data'
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
            { onClick: props.checkout },
            'Check Out'
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjaGVja291dCIsIm9uRjEiLCJvbkYyIiwib25GMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJnb3RvRjEiLCJiaW5kIiwiZ290b0YyIiwiZ290b0YzIiwiZ290b0NvbmZpcm1hdGlvblBhZ2UiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkNoZWNrb3V0IiwiQmxhbmsiLCJPbkYxIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2VOYW1lIiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInN1Ym1pdEFjY291bnRzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9uRjIiLCJPbkYzIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLElBREQ7QUFFVEMsa0JBQU0sS0FGRztBQUdUQyxrQkFBTSxLQUhHO0FBSVRDLGtCQUFNLEtBSkc7QUFLVEMsOEJBQWtCO0FBTFQsU0FBYjtBQU9BLGFBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGFBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGFBQUtFLE1BQUwsR0FBYyxL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QUFBLFNBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTko7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEo7QUFRSTtBQUFBO0FBQUEsY0FBUSxTQUFXQSxNQUFNVSxNQUF6QjtBQUFBO0FBQUE7QUFSSixLQURKO0FBWUgsQ0FiRDs7QUFlQSxNQUFNNkIsT0FBUXZDLEtBQUQsSUFBVztBQUNwQixXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMSjtBQU1JO0FBQUE7QUFBQSxjQUFRLFNBQVdBLE1BQU1XLG9CQUF6QjtBQUFBO0FBQUE7QUFOSixLQURKO0FBVUgsQ0FYRDs7QUFhQSxNQUFNTCxtQkFBb0JOLEtBQUQsSUFBVztBQUNoQyxXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FISjtBQUlJO0FBQUE7QUFBQSxjQUFRLFNBQVdBLE1BQU1FLFFBQXpCO0FBQUE7QUFBQTtBQUpKLEtBREo7QUFRSCxDQVREOztBQVdBc0MsU0FBUzNCLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QjRCLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXQ6IHRydWUsXG4gICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZSwgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb3RvRjEgPSB0aGlzLmdvdG9GMS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9GMiA9IHRoaXMuZ290b0YyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0YzID0gdGhpcy5nb3RvRjMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZSA9IHRoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja291dCA9IHRoaXMuY2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgY2hlY2tvdXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjEoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiB0cnVlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0NvbmZpcm1hdGlvblBhZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLmNoZWNrb3V0KSA/IDxCbGFuayAvPiA6IDwgQ2hlY2tvdXQgZ290b0YxID0ge3RoaXMuZ290b0YxfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMSkgPyA8QmxhbmsgLz4gOiA8IE9uRjEgZ290b0YyID0ge3RoaXMuZ290b0YyfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMikgPyA8QmxhbmsgLz4gOiA8IE9uRjIgZ290b0YzID0ge3RoaXMuZ290b0YzfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMykgPyA8QmxhbmsgLz4gOiA8IE9uRjMgZ290b0NvbmZpcm1hdGlvblBhZ2UgPSB7dGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZX0vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLkNvbmZpcm1hdGlvblBhZ2UpID8gPEJsYW5rIC8+IDogPCBDb25maXJtYXRpb25QYWdlIGNoZWNrb3V0ID0ge3RoaXMuY2hlY2tvdXR9Lz59PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBDaGVja291dCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+Q2hlY2tvdXQ8L2g0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9GMX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEJsYW5rID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBPbkYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZU5hbWUgPSB0aGlzLmhhbmRsZUNoYW5nZU5hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VFbWFpbCA9IHRoaXMuaGFuZGxlQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZCA9IHRoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXRBY2NvdW50cyA9IHRoaXMuc3VibWl0QWNjb3VudHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdWJtaXRBY2NvdW50cyhlKSB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nIHVyIGFjY291bnQgZGVldHNcIik7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnQgZGF0YVwiLCBhY2NvdW50KTtcblxuICAgICAgICBmZXRjaCgnL2FjY291bnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0ID0gdXRmLTgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjY291bnQpLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VOYW1lKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQYXNzd29yZChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0geygpPT4ge3RoaXMuc3VibWl0QWNjb3VudHMoKTsgcHJvcHMuZ290b0YyKCk7fX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTmFtZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFbWFpbDogXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVtYWlsfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZH0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBPbkYyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgICAgIDxkaXY+TGluZSAxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxpbmUgMjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DaXR5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlN0YXRlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlppcCBDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlBob25lIE51bWJlcjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9GM30+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE9uRjMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNyZWRpdCBDYXJkPC9oND5cbiAgICAgICAgICAgIDxkaXY+Q0MgIzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DVlY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QmlsbGluZyBaaXAgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9Db25maXJtYXRpb25QYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQ29uZmlybWF0aW9uUGFnZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkYxIERhdGE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RjIgRGF0YTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5GMyBEYXRhPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuY2hlY2tvdXR9PkNoZWNrIE91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19