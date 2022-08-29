import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import { StickyShareButtons } from "sharethis-reactjs";
import Card1 from "./badges2";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html, body {
            margin: 0;
            padding: 0;
            text-align: center;
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
          }
          hr {
            margin-bottom: 40px;
            margin-top: 40px;
            width: 50%;
          }
        `
          }}
        />

        <h1>Inline Share Buttons</h1>
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            labels: "cta", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "linkedin",
              "facebook",
              "twitter"
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: "https://www.sharethis.com", // (defaults to current url)
            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "custom title", // (defaults to og:title or twitter:title)
            message: "custom email text", // (only for email sharing)
            subject: "custom email subject", // (only for email sharing)
            username: "custom twitter handle" // (only for twitter sharing)
          }}
        />
        <hr />
        <StickyShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            hide_desktop: false, // hide buttons on desktop (true, false)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "linkedin",
              "facebook",
              "twitter",
              "email"
            ],
            padding: 13, // padding within buttons (INTEGER)
            radius: 10, // the corner radius on each button (INTEGER)
            show_mobile: true, // show/hide the buttons on mobile (true, false)
            show_toggle: true, // show/hide the toggle buttons (true, false)
            size: 25, // the size of each button (INTEGER)
            top: 160, // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            url: "https://www.sharethis.com", // (defaults to current url)
            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "custom title", // (defaults to og:title or twitter:title)
            message: "custom email text", // (only for email sharing)
            subject: "custom email subject", // (only for email sharing)
            username: "custom twitter handle" // (only for twitter sharing)
          }}
        />
      </div>
    );
  }
}

// export
export default Buttons;
