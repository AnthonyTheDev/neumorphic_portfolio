import { Component } from "react";
import Social from "../components/Social";
import resume from "../img/resume/DesignResume1.21.21.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <div>
          <h1 className="subtopic">Contact Me</h1>
          <div className="hr_line line2">
            <div className="inner2 inner3"></div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "35vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a href={resume} style={{ margin: "0rem .5rem" }} target="blank">
              <div className="back3">Download Resume</div>
            </a>
            <a
              style={{ margin: "0rem .5rem" }}
              href="mailto:acgd.artist@gmail.com"
            >
              <div className="back3 back4">Contact Me</div>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <div className="hr_line">
              <div className="inner3"></div>
            </div>
            <Social />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
