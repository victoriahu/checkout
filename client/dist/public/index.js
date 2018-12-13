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
    }

    changeComponent() {
        var components = [onF1, onF2, onF3, ConfirmationPage];

        i++;
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
                !this.state.ConfirmationPage ? React.createElement(Blank, null) : React.createElement(ConfirmationPage, null)
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
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjaGVja291dCIsIm9uRjEiLCJvbkYyIiwib25GMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJnb3RvRjEiLCJiaW5kIiwiZ290b0YyIiwiZ290b0YzIiwiZ290b0NvbmZpcm1hdGlvblBhZ2UiLCJjaGFuZ2VDb21wb25lbnQiLCJjb21wb25lbnRzIiwiaSIsInNldFN0YXRlIiwicmVuZGVyIiwiQ2hlY2tvdXQiLCJCbGFuayIsIk9uRjEiLCJPbkYyIiwiT25GMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0EsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVSxJQUREO0FBRVRDLGtCQUFNLEtBRkc7QUFHVEMsa0JBQU0sS0FIRztBQUlUQyxrQkFBTSxLQUpHO0FBS1RDLDhCQUFrQjtBQUxULFNBQWI7QUFPQSxhQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxhQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxhQUFLRSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRixJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxhQUFLRyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQkgsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFFSDs7QUFFREksc0JBQWtCO0FBQ2QsWUFBSUMsYUFBYSxDQUFDVixJQUFELEVBQU9DLElBQVAsRUFBYUMsSUFBYixFQUFtQkMsZ0JBQW5C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O0FBQUEsU0FOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FQSjtBQVFJO0FBQUE7QUFBQSxjQUFRLFNBQVdBLE1BQU1VLE1BQXpCO0FBQUE7QUFBQTtBQVJKLEtBREo7QUFZSCxDQWJEOztBQWVBLE1BQU1XLE9BQVFyQixLQUFELElBQVc7QUFDcEIsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEo7QUFNSTtBQUFBO0FBQUEsY0FBUSxTQUFXQSxNQUFNVyxvQkFBekI7QUFBQTtBQUFBO0FBTkosS0FESjtBQVVILENBWEQ7O0FBYUEsTUFBTUwsbUJBQW9CTixLQUFELElBQVc7QUFDaEMsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEosS0FESjtBQU9ILENBUkQ7O0FBVUFzQixTQUFTTixNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJPLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXQ6IHRydWUsXG4gICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgb25GMzogZmFsc2UsXG4gICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ290b0YxID0gdGhpcy5nb3RvRjEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvRjIgPSB0aGlzLmdvdG9GMi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9GMyA9IHRoaXMuZ290b0YzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2UgPSB0aGlzLmdvdG9Db25maXJtYXRpb25QYWdlLmJpbmQodGhpcyk7XG5cbiAgICB9XG4gICAgXG4gICAgY2hhbmdlQ29tcG9uZW50KCkge1xuICAgICAgICB2YXIgY29tcG9uZW50cyA9IFtvbkYxLCBvbkYyLCBvbkYzLCBDb25maXJtYXRpb25QYWdlXTtcbiAgICAgICAgXG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgZ290b0YxKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiB0cnVlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0NvbmZpcm1hdGlvblBhZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLmNoZWNrb3V0KSA/IDxCbGFuayAvPiA6IDwgQ2hlY2tvdXQgZ290b0YxID0ge3RoaXMuZ290b0YxfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMSkgPyA8QmxhbmsgLz4gOiA8IE9uRjEgZ290b0YyID0ge3RoaXMuZ290b0YyfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMikgPyA8QmxhbmsgLz4gOiA8IE9uRjIgZ290b0YzID0ge3RoaXMuZ290b0YzfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMykgPyA8QmxhbmsgLz4gOiA8IE9uRjMgZ290b0NvbmZpcm1hdGlvblBhZ2UgPSB7dGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZX0vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLkNvbmZpcm1hdGlvblBhZ2UpID8gPEJsYW5rIC8+IDogPCBDb25maXJtYXRpb25QYWdlIC8+fTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNoZWNrb3V0PC9oND5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvRjF9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBCbGFuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgT25GMSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+ZW1haWw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+cGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvRjJ9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBPbkYyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgICAgIDxkaXY+TGluZSAxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkxpbmUgMjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DaXR5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlN0YXRlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlppcCBDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlBob25lIE51bWJlcjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9GM30+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE9uRjMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNyZWRpdCBDYXJkPC9oND5cbiAgICAgICAgICAgIDxkaXY+Q0MgIzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DVlY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QmlsbGluZyBaaXAgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9Db25maXJtYXRpb25QYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQ29uZmlybWF0aW9uUGFnZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkYxIERhdGE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RjIgRGF0YTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5GMyBEYXRhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiXX0=