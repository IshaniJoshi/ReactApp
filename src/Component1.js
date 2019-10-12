import React, { Component } from "react";

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, show: true };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecrementItem = this.DecrementItem.bind(this);
    this.ToggleClick = this.ToggleClick.bind(this);
  }

  IncrementItem() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecrementItem() {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  ToggleClick() {
    this.setState({ show: this.state.show ? false : true });
  }

  render() {
    return (
      <body>
        <section className="s1">
          <h2>Hello {this.props.name}. Welcome to your counter</h2>
        </section>

        <div className="buttons">
          <button onClick={this.IncrementItem}>+</button>
          <button>{this.state.clicks}</button>
          <button onClick={this.DecrementItem}>-</button>
        </div>
      </body>
    );
  }
}
export default Component1;
