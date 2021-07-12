import React from "react";

export const ArtData = ({ img, title, alt }) => {
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
            <img src={img} className="po1" alt={alt}></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: ".5rem",
          }}
        >
          <p>{title}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
