import React from "react";

export class TabOne extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.tab1.title}</h2>
                <p>{this.props.tab1.text}</p>
            </div>
        )
    }
}
