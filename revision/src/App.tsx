import React, { Component } from "react";
import { isPropertySignature } from "typescript";

interface IProps {}
interface IState {}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return <div>App</div>;
  }
}
