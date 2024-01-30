import { Component } from "react";
import Router from "next/router";

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

  componentDidMount(): void {
    console.log("Run after render");
  }

  componentDidUpdate(): void {
    console.log("Run after update");
  }

  componentWillUnmount(): void {
    console.log("Run before delete");
  }

  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>Add counter</button>
        <button onClick={this.onClickMove}>Exit</button>
      </>
    );
  }
}
