import React from "react";
import { FacebookButton, TwitterButton, LinkedInButton } from "react-social";
import Card1 from "./badges2";

export default function App() {
  let url = "www.connectourkids.org";

  return (
    <LinkedInButton url={url}>
      {" Share " + url}
      {<Card1 />}
    </LinkedInButton>
  );
}
