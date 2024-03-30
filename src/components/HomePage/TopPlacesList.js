import React from "react";

const TopPlacesList = () => {
  return (
    <div className="container mt-3">
      <div className="jumbotron " style={{ backgroundColor: "lightgray" }}>
        <div className="container">
          <h1 className="text-center">Top Places</h1>
          <br />
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img
                className="setpic2 img-fluid"
                src={require("../../images/top1.jpeg")}
                alt="topplace1"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img
                className="setpic2 img-fluid"
                src={require("../../images/top2.jpeg")}
                alt="topplace2"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img
                className="setpic2 img-fluid"
                src={require("../../images/top3.jpeg")}
                alt="topplace3"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img
                className="setpic2 img-fluid"
                src={require("../../images/top4.jpeg")}
                alt="topplace4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlacesList;
