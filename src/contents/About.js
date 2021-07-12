import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <div>
          <h1 className="subtopic">About Me</h1>
          <div className="hr_line line2">
            <div className="inner2"></div>
          </div>
          <h2 className="abouthead">
            Anthony <mark className="mark2">Clinton</mark>
          </h2>
          <p className="about-frontend">Front-End Developer</p>
          <br></br>
          <p className="p10">
            Art was always a passion of mines. I've grown up on anime and
            cartoons and always admired the art and fight scenes. As i got
            older, it was clear that design was the field i wanted to go into. I
            wasn't a good fine artist, however; I was a pretty good digital
            artist. After highschool, I went to college for graphic design. A
            few years later, I got into programming. And I've been a front-end
            dev since. If you are interested in getting some commission work
            done please contact me by email and we can discuss project details.
          </p>
        </div>
        <div>
          <h3>Education</h3>

          <h4>Wood-Tobe Coburn School</h4>
          <p className="p1">NYC, NY</p>
          <p className="p1">
            <i class="fa fa-calendar i2"></i>May 2011 - 2013
          </p>
        </div>
        <div
          style={{
            marginBottom: "10rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <h3 class="sk_head ">Programming</h3>
            <div className="sk_con">
              <div class="sk s">HTML</div>
              <div class="sk s">CSS</div>
              <div class="sk s">JavaScript</div>
              <div class="sk s">React</div>
              <div class="sk s">Node</div>
              <div class="sk s">Express.Js</div>
              <div class="sk s">Redux.Js</div>
              <div class="sk s">Passort.Js</div>
              <div class="sk s">Mongoose.Js</div>
              <div class="sk s">C++</div>
            </div>
          </div>
          <div>
            <h3 class="sk_head ">Design</h3>
            <div className="sk_con">
              <div class="sk s">Illustrator</div>
              <div class="sk s">PhotoShop</div>
              <div class="sk s">InDesign</div>
              <div class="sk s">After Effects</div>
              <div class="sk s">Premiere Pro</div>
              <div class="sk s">XD</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
