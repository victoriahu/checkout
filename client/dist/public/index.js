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
            "div",
            null,
            React.createElement(
                "h1",
                null,
                !this.state.checkout ? React.createElement(Blank, null) : React.createElement(Checkout, { gotoF1: this.gotoF1 })
            ),
            React.createElement(
                "h1",
                null,
                !this.state.onF1 ? React.createElement(Blank, null) : React.createElement(OnF1, { gotoF2: this.gotoF2 })
            ),
            React.createElement(
                "h1",
                null,
                !this.state.onF2 ? React.createElement(Blank, null) : React.createElement(OnF2, { gotoF3: this.gotoF3 })
            ),
            React.createElement(
                "h1",
                null,
                !this.state.onF3 ? React.createElement(Blank, null) : React.createElement(OnF3, { gotoConfirmationPage: this.gotoConfirmationPage })
            ),
            React.createElement(
                "h1",
                null,
                !this.state.ConfirmationPage ? React.createElement(Blank, null) : React.createElement(ConfirmationPage, { checkout: this.checkout })
            )
        );
    }
}

const Checkout = props => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h4",
            null,
            "Checkout"
        ),
        React.createElement(
            "button",
            { onClick: props.gotoF1 },
            "Next"
        )
    );
};

const Blank = () => {
    return React.createElement("div", null);
};

const OnF1 = props => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            "name"
        ),
        React.createElement(
            "div",
            null,
            "email"
        ),
        React.createElement(
            "div",
            null,
            "password"
        ),
        React.createElement(
            "button",
            { onClick: props.gotoF2 },
            "Next"
        )
    );
};

const OnF2 = props => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h4",
            null,
            "Address"
        ),
        React.createElement(
            "div",
            null,
            "Line 1"
        ),
        React.createElement(
            "div",
            null,
            "Line 2"
        ),
        React.createElement(
            "div",
            null,
            "City"
        ),
        React.createElement(
            "div",
            null,
            "State"
        ),
        React.createElement(
            "div",
            null,
            "Zip Code"
        ),
        React.createElement(
            "div",
            null,
            "Phone Number"
        ),
        React.createElement(
            "button",
            { onClick: props.gotoF3 },
            "Next"
        )
    );
};

const OnF3 = props => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h4",
            null,
            "Credit Card"
        ),
        React.createElement(
            "div",
            null,
            "CC #"
        ),
        React.createElement(
            "div",
            null,
            "Exp date"
        ),
        React.createElement(
            "div",
            null,
            "CVV"
        ),
        React.createElement(
            "div",
            null,
            "Billing Zip Code"
        ),
        React.createElement(
            "button",
            { onClick: props.gotoConfirmationPage },
            "Next"
        )
    );
};

const ConfirmationPage = props => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            "F1 Data"
        ),
        React.createElement(
            "div",
            null,
            "F2 Data"
        ),
        React.createElement(
            "div",
            null,
            "F3 Data"
        ),
        React.createElement(
            "button",
            { onClick: props.checkout },
            "Check Out"
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjaGVja291dCIsIm9uRjEiLCJvbkYyIiwib25GMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJnb3RvRjEiLCJiaW5kIiwiZ290b0YyIiwiZ290b0YzIiwiZ290b0NvbmZpcm1hdGlvblBhZ2UiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkNoZWNrb3V0IiwiQmxhbmsiLCJPbkYxIiwiT25GMiIsIk9uRjMiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVUsSUFERDtBQUVUQyxrQkFBTSxLQUZHO0FBR1RDLGtCQUFNLEtBSEc7QUFJVEMsa0JBQU0sS0FKRztBQUtUQyw4QkFBa0I7QUFMVCxTQUFiO0FBT0EsYUFBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsYUFBS0UsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsYUFBS0csb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJILElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsYUFBS04sUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNNLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDSDs7QUFFRE4sZUFBVztBQUNQLGFBQUtVLFFBQUwsQ0FDSTtBQUNJVixzQkFBVSxJQURk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U0FISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMSjtBQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FQSjtBQVFJO0FBQUE7QUFBQSxjQUFRLFNBQVdBLE1BQU1VLE1BQXpCO0FBQUE7QUFBQTtBQVJKLEtBREo7QUFZSCxDQWJEOztBQWVBLE1BQU1RLE9BQVFsQixLQUFELElBQVc7QUFDcEIsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEo7QUFNSTtBQUFBO0FBQUEsY0FBUSxTQUFXQSxNQUFNVyxvQkFBekI7QUFBQTtBQUFBO0FBTkosS0FESjtBQVVILENBWEQ7O0FBYUEsTUFBTUwsbUJBQW9CTixLQUFELElBQVc7QUFDaEMsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEo7QUFJSTtBQUFBO0FBQUEsY0FBUSxTQUFXQSxNQUFNRSxRQUF6QjtBQUFBO0FBQUE7QUFKSixLQURKO0FBUUgsQ0FURDs7QUFXQWlCLFNBQVNOLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5Qk8sU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja291dDogdHJ1ZSxcbiAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb3RvRjEgPSB0aGlzLmdvdG9GMS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9GMiA9IHRoaXMuZ290b0YyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0YzID0gdGhpcy5nb3RvRjMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZSA9IHRoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja291dCA9IHRoaXMuY2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgY2hlY2tvdXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjEoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IHRydWUsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvRjMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IHRydWUsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvQ29uZmlybWF0aW9uUGFnZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUuY2hlY2tvdXQpID8gPEJsYW5rIC8+IDogPCBDaGVja291dCBnb3RvRjEgPSB7dGhpcy5nb3RvRjF9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYxKSA/IDxCbGFuayAvPiA6IDwgT25GMSBnb3RvRjIgPSB7dGhpcy5nb3RvRjJ9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYyKSA/IDxCbGFuayAvPiA6IDwgT25GMiBnb3RvRjMgPSB7dGhpcy5nb3RvRjN9Lz59PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYzKSA/IDxCbGFuayAvPiA6IDwgT25GMyBnb3RvQ29uZmlybWF0aW9uUGFnZSA9IHt0aGlzLmdvdG9Db25maXJtYXRpb25QYWdlfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUuQ29uZmlybWF0aW9uUGFnZSkgPyA8QmxhbmsgLz4gOiA8IENvbmZpcm1hdGlvblBhZ2UgY2hlY2tvdXQgPSB7dGhpcy5jaGVja291dH0vPn08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IENoZWNrb3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5DaGVja291dDwvaDQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuZ290b0YxfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQmxhbmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE9uRjEgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PmVtYWlsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnBhc3N3b3JkPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuZ290b0YyfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgT25GMiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+QWRkcmVzczwvaDQ+XG4gICAgICAgICAgICA8ZGl2PkxpbmUgMTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5MaW5lIDI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q2l0eTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5TdGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5aaXAgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5QaG9uZSBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvRjN9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBPbkYzID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5DcmVkaXQgQ2FyZDwvaDQ+XG4gICAgICAgICAgICA8ZGl2PkNDICM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RXhwIGRhdGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q1ZWPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkJpbGxpbmcgWmlwIENvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvQ29uZmlybWF0aW9uUGFnZX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IENvbmZpcm1hdGlvblBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5GMSBEYXRhPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkYyIERhdGE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RjMgRGF0YTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmNoZWNrb3V0fT5DaGVjayBPdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==