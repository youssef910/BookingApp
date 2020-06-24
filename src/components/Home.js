import React, { Component } from "react";
import { Image, Header } from "semantic-ui-react";
import welcomeImg from "/home/youssef/projects/bookit/src/utils/welcomeImg.jpg";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header as="h1" color="blue">
          Welcome To BookiT
        </Header>
        <Image src={welcomeImg}></Image>
      </div>
    );
  }
}
