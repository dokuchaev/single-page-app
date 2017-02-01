import React from "react";

export class TabMain extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.TabMainData.title}</h2>
                <p>{this.props.TabMainData.text}</p>
            </div>
        )
    }
}
