import { Component } from "react";

import drinkdoctorlogo from "../img/graphicDesign/drinkdoctorlogo-background.png";
import drinkdoctorsite from "../img/sitesImages/drinkdoctorsite.jpg";
import evilgenius from "../img/graphicDesign/evil-genius.png";
import nailart from "../img/graphicDesign/naillogo.png";
import anipal from "../img/graphicDesign/aniPAL-logo-01.png";
import littlesteps from "../img/graphicDesign/Little-Steps-logo.png";
import venice from "../img/graphicDesign/venice_icecream.png";
import feelagain from "../img/graphicDesign/Feel_Again_Cover.png";
import lovedangeous from "../img/graphicDesign/Love Dangerous Cover_small.jpg";
import { SiteData } from "../components/SiteData.jsx";
import { ArtData } from "../components/ArtData.jsx";
import fullportfolio from "../img/sitesImages/12antstudio.jpg";

class Portfolio extends Component {
  constructor() {
    super();

    this.state = { content: "applications" };
  }

  render() {
    const activeStyle = {
      textDecoration: "underline",

      color: "#966f00",
    };

    const graphics = () => {
      return (
        <div className="condiv">
          <div>
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2">
              <div className="inner3"></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h2
              onClick={() => {
                this.setState({ content: "applications" });
              }}
              className="port-select"
            >
              Applications
            </h2>
            <h2
              onClick={() => {
                this.setState({ content: "graphics" });
              }}
              className="port-select"
              style={activeStyle}
            >
              Graphics
            </h2>
          </div>
          <div className="site-con">
            <ArtData
              img={drinkdoctorlogo}
              alt="drinkdoctorlogo"
              title="Drink Doctor"
            />
            <ArtData img={evilgenius} alt="evilgenius" title="Evil-Genius" />
            <ArtData
              img={venice}
              alt="Venice Ice Cream"
              title="Venice Ice Cream"
            />
            <ArtData
              img={lovedangeous}
              alt="Love Dangerous"
              title="Love Dangerous"
            />
            <ArtData img={anipal} alt="anipal" title="anipal" />
            <ArtData img={feelagain} alt="Feel-Again" title="Feel-Again" />
            <ArtData img={nailart} alt="nailart" title="Nailart" />
            <ArtData img={littlesteps} alt="littlesteps" title="Little Steps" />
          </div>
        </div>
      );
    };
    const application = () => {
      return (
        <div className="condiv">
          <div>
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2">
              <div className="inner3"></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h2
              onClick={() => {
                this.setState({ content: "applications" });
              }}
              className="port-select"
              style={activeStyle}
            >
              Applications
            </h2>
            <h2
              onClick={() => {
                this.setState({ content: "graphics" });
              }}
              className="port-select"
            >
              Graphics
            </h2>
          </div>
          <div className="site-con">
            <SiteData
              img={drinkdoctorsite}
              alt="drinkdoctorsite"
              linkRef="https://drinkdoctor-dev.herokuapp.com/"
              site="https://drinkdoctor-dev.herokuapp.com/"
              github="github"
            />
            <SiteData
              img={fullportfolio}
              alt="12antand Studio portfolio"
              linkRef="https://www.12antstudio.design/"
              site="https://www.12antstudio.design/"
              github="github"
            />
          </div>
        </div>
      );
    };

    return this.state.content === "applications" ? application() : graphics();
  }
}

export default Portfolio;
