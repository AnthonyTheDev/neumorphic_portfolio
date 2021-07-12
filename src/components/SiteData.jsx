import React from "react";

export const SiteData = ({ alt, img, site, github }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "5vh",
        }}
      >
        <div class="port_out port1">
          <div class="port_in">
            <a href={site}>
              <img src={img} className="po1" alt={alt}></img>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: ".5rem",
            textDecoration: "underline",
          }}
        >
          <a href={site}>
            <p className="site-links"> site</p>
          </a>
          <a href={github}>
            <p className="site-links">github</p>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
