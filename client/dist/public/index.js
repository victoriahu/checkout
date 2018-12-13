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
            onF1: true,
            onF2: false,
            onF3: false,
            ConfirmationPage: false
        });
    }
    gotoF2() {
        this.setState({
            onF1: false,
            onF2: true,
            onF3: false,
            ConfirmationPage: false
        });
    }
    gotoF3() {
        this.setState({
            onF1: false,
            onF2: false,
            onF3: true,
            ConfirmationPage: false
        });
    }
    gotoConfirmationPage() {
        this.setState({
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
                !this.state.onF1 ? React.createElement(Checkout, { gotoF1: this.gotoF1 }) : React.createElement(OnF1, { gotoF2: this.gotoF2 })
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
    return React.createElement(
        "div",
        null,
        "asdasdas"
    );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJvbkYxIiwib25GMiIsIm9uRjMiLCJDb25maXJtYXRpb25QYWdlIiwiZ290b0YxIiwiYmluZCIsImdvdG9GMiIsImdvdG9GMyIsImdvdG9Db25maXJtYXRpb25QYWdlIiwiY2hhbmdlQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImkiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkNoZWNrb3V0IiwiQmxhbmsiLCJPbkYxIiwiT25GMiIsIk9uRjMiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU0sS0FERztBQUVUQyxrQkFBTSxLQUZHO0FBR1RDLGtCQUFNLEtBSEc7QUFJVEMsOEJBQWtCO0FBSlQsU0FBYjtBQU1BLGFBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGFBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGFBQUtFLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLGFBQUtHLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCSCxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUVIOztBQUVESSxzQkFBa0I7QUFDZCxZQUFJQyxhQUFhLENBQUNWLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxJQUFiLEVBQW1CQyxnQkFBbkIsQ0FBakI7O0FBRUFRO0FBQ0g7QUFDRFAsYUFB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QUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxKO0FBTUk7QUFBQTtBQUFBLGNBQVEsU0FBV0EsTUFBTVUsb0JBQXpCO0FBQUE7QUFBQTtBQU5KLEtBREo7QUFVSCxDQVhEOztBQWFBLE1BQU1MLG1CQUFvQkwsS0FBRCxJQUFXO0FBQ2hDLFdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLEtBREo7QUFPSCxDQVJEOztBQVVBcUIsU0FBU04sTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCTyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgb25GMjogZmFsc2UsXG4gICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb3RvRjEgPSB0aGlzLmdvdG9GMS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvdG9GMiA9IHRoaXMuZ290b0YyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ290b0YzID0gdGhpcy5nb3RvRjMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZSA9IHRoaXMuZ290b0NvbmZpcm1hdGlvblBhZ2UuYmluZCh0aGlzKTtcblxuICAgIH1cbiAgICBcbiAgICBjaGFuZ2VDb21wb25lbnQoKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gW29uRjEsIG9uRjIsIG9uRjMsIENvbmZpcm1hdGlvblBhZ2VdO1xuICAgICAgICBcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBnb3RvRjEoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25GMTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIGdvdG9GMigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uRjM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hdGlvblBhZ2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgZ290b0YzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uRjM6IHRydWUsXG4gICAgICAgICAgICAgICAgQ29uZmlybWF0aW9uUGFnZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBnb3RvQ29uZmlybWF0aW9uUGFnZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkYxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkYzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBDb25maXJtYXRpb25QYWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYxKSA/IDxDaGVja291dCBnb3RvRjEgPSB7dGhpcy5nb3RvRjF9Lz4gOiA8IE9uRjEgZ290b0YyID0ge3RoaXMuZ290b0YyfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMikgPyA8QmxhbmsgLz4gOiA8IE9uRjIgZ290b0YzID0ge3RoaXMuZ290b0YzfS8+fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnsoIXRoaXMuc3RhdGUub25GMykgPyA8QmxhbmsgLz4gOiA8IE9uRjMgZ290b0NvbmZpcm1hdGlvblBhZ2UgPSB7dGhpcy5nb3RvQ29uZmlybWF0aW9uUGFnZX0vPn08L2gxPlxuICAgICAgICAgICAgICAgIDxoMT57KCF0aGlzLnN0YXRlLkNvbmZpcm1hdGlvblBhZ2UpID8gPEJsYW5rIC8+IDogPCBDb25maXJtYXRpb25QYWdlIC8+fTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkNoZWNrb3V0PC9oND5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtwcm9wcy5nb3RvRjF9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBCbGFuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PmFzZGFzZGFzPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBPbkYxID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5lbWFpbDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5wYXNzd29yZDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3Byb3BzLmdvdG9GMn0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IE9uRjIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkFkZHJlc3M8L2g0PlxuICAgICAgICAgICAgPGRpdj5MaW5lIDE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TGluZSAyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkNpdHk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+U3RhdGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+WmlwIENvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+UGhvbmUgTnVtYmVyPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuZ290b0YzfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgT25GMyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+Q3JlZGl0IENhcmQ8L2g0PlxuICAgICAgICAgICAgPGRpdj5DQyAjPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkV4cCBkYXRlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkNWVjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5CaWxsaW5nIFppcCBDb2RlPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cHJvcHMuZ290b0NvbmZpcm1hdGlvblBhZ2V9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBDb25maXJtYXRpb25QYWdlID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+RjEgRGF0YTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5GMiBEYXRhPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkYzIERhdGE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyJdfQ==