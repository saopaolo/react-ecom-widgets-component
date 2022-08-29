import React, { Component } from "react";
import axios from "axios";

class PDF extends Component {
  viewHandler = async () => {
    axios(`https://6f4uv.sse.codesandbox.io:4000/pdf`, {
      method: "GET",
      responseType: "blob"
      //Force to receive data in a Blob Format
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.viewHandler}> View Pdf </button>{" "}
      </div>
    );
  }
}
export default PDF;
