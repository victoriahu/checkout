// import React from "react";
// import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onF1: false
        };
        this.onNext = this.onNext.bind(this);
    }
    onNext() {
        this.setState({ onF1: true });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                !this.state.onF1 ? React.createElement(Checkout, null) : React.createElement(OnF1, null)
            ),
            React.createElement(
                "button",
                { onClick: this.onNext },
                "Next"
            )
        );
    }
}

const Checkout = () => {
    return React.createElement(
        "h4",
        null,
        "Checkout"
    );
};

const OnF1 = () => {
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
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJvbkYxIiwib25OZXh0IiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyIiwiQ2hlY2tvdXQiLCJPbkYxIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjtBQUdBLGFBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNIO0FBQ0RELGFBQVM7QUFDTCxhQUFLRSxRQUFMLENBQ0ksRUFBQ0gsTUFBTSxJQUFQLEVBREo7QUFHSDtBQUNESSxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBTSxpQkFBQyxLQUFLTCxLQUFMLENBQVdDLElBQWIsR0FBcUIsb0JBQUMsUUFBRCxPQUFyQixHQUFvQyxvQkFBRSxJQUFGO0FBQXpDLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQVEsU0FBVyxLQUFLQyxNQUF4QjtBQUFBO0FBQUE7QUFGSixTQURKO0FBTUg7QUFwQjZCOztBQXVCbEMsTUFBTUksV0FBVyxNQUFNO0FBQ25CLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBR0gsQ0FKRDs7QUFNQSxNQUFNQyxPQUFPLE1BQU07QUFDZixXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISixLQURKO0FBT0gsQ0FSRDs7QUFXQUMsU0FBU0gsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCSSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9uRjE6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25OZXh0ID0gdGhpcy5vbk5leHQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgb25OZXh0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge29uRjE6IHRydWV9XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+eyghdGhpcy5zdGF0ZS5vbkYxKSA/IDxDaGVja291dCAvPiA6IDwgT25GMSAvPn08L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLm9uTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IENoZWNrb3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoND5DaGVja291dDwvaDQ+XG4gICAgKVxufVxuXG5jb25zdCBPbkYxID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+ZW1haWw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+cGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19