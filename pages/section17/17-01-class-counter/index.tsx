import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>Add counter</button>
      </>
    );
  }
}
