import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Anthony <mark>Clinton</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Front-End Developer",
            "Graphic Designer",
            "Video Game Enthusiast",
          ]}
          speed={100}
          eraseDelay={900}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
