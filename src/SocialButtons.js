import React, { Component, PropTypes } from "react";
import Card1 from "./badges2";

import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  EmailButton
} from "react-social-buttons";

class TestComponent extends Component {
  isBrowser() {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

  render() {
    let url = "";
    if (this.isBrowser()) {
      url = "https://impact-dashboard.mjherich.now.sh/personal";
    }

    const emailProps = {
      subject: "Test email",
      cc: "test@gmail.com",
      bcc: "test@gmail.com",
      body: "Your test message",
      button: <span>{"Share via Email"}</span>
    };

    return (
      <div id="buttons">
        <FacebookLikeButton url={url} />
        <FacebookShareButton url={url} Component={<Card1 />} />
        <FacebookMessengerButton url={url} />
        <TwitterButton url={url} text={"this page is cool"} />
        <EmailButton {...emailProps} />
      </div>
    );
  }
}

export default TestComponent;
