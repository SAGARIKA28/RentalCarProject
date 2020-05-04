import React, { Component } from "react";
import car1 from "../images/car1.jpg";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default class CarItem extends Component {
  render() {
    let v, b;
    if (this.props.car.booked) {
      v = <a class="btn disabled">BOOK NOW</a>;
      b = <label>Curently unavailabel !</label>;
    } else {
      v = (
        <button className="btn #9e9e9e grey ">
          <Link
            to={`/book/${this.props.car.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            BOOK NOW
          </Link>
        </button>
      );
      b = "";
    }
    return (
      <div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={car1} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="row">
                  <div className="col s3">
                    <h6>
                      <b>{this.props.car.name}</b>
                    </h6>
                  </div>
                  <div className="col s3">
                    <h6>{this.props.car.Rent}</h6>
                  </div>
                  <div className="col s3">
                    {v}
                    {b}
                  </div>
                  <div className="col s3">
                    <button className="btn grey-text #ffffff white">
                      <Link
                        to={`/car/${this.props.car.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        DETAILS
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col s2">
                    <h6 text-color="black">
                      <i class="tiny material-icons">colorize</i>
                      {this.props.car.color}
                    </h6>
                  </div>
                  <div className="col s2">
                    <h6 text-color="black">
                      <i className="tiny material-icons">
                        airline_seat_recline_extra
                      </i>{" "}
                      {this.props.car.seat}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
