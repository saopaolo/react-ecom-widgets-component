import React, { Component } from "react";
import { FacebookProvider, ShareButton } from "react-facebook";
import Card1 from "./badges2";

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider>
        <ShareButton href="http://www.facebook.com" Component={<Card1 />}>
          Share
          {<Card1 />}
        </ShareButton>
      </FacebookProvider>
    );
  }
}
