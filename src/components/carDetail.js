import React from "react";
import CurrentBooking from "./currBooking";
import car1 from "../images/car1.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { carDetail } from "../actions/carsAction";
import { Link } from "react-router-dom";

class CarDetail extends React.Component {
  componentDidMount() {
    this.props.carDetail(this.props.match.params.id);
  }

  render() {
    let v, b;
    if (this.props.car.booked) {
      v = (
        <a class="btn disabled">
          <i class="material-icons right">close</i>Not Available
        </a>
      );
      b = <button className="btn #9e9e9e grey btn disabled">BOOK NOW</button>;
    } else {
      v = (
        <a class="btn">
          <i class="material-icons right">check</i> Available
        </a>
      );
      b = (
        <button className="btn #9e9e9e grey ">
          <Link
            to={`/book/${this.props.car.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            BOOK NOW
          </Link>
        </button>
      );
    }
    return (
      <div>
        <div className="container">
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
                        <b>
                          <h6>
                            <b>{this.props.car.name}</b>
                          </h6>
                        </b>
                      </h6>
                    </div>
                    <div className="col s3">
                      <h6>{this.props.car.Rent}</h6>
                    </div>
                    <div className="col s3">{b}</div>
                  </div>

                  <div className="row">
                    <div className="col s2">
                      <h6 text-color="black">
                        <i class="tiny material-icons">colorize</i>{" "}
                        <h6>{this.props.car.color}</h6>
                      </h6>
                    </div>
                    <div className="col s2">
                      <h6 text-color="black">
                        <i className="tiny material-icons">
                          airline_seat_recline_extra
                        </i>
                        <h6> {this.props.car.seat}</h6>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h5>Car Details</h5>
          <br />
          <hr />
          <br />
          {v}
          <br />
          <h6>
            <b>Vehicle Number: {this.props.car.vechNum}</b>
          </h6>
          <h6>
            <b>{this.props.car.cartype}</b>
          </h6>
          <h6>
            <b>{this.props.car.engine}</b>
          </h6>
          <p>
            <b>{this.props.car.description}</b>
          </p>
          <br />
          <CurrentBooking carId={this.props.car.id} />
        </div>
      </div>
    );
  }
}

CarDetail.propTypes = {
  carDetail: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  car: state.data.car,
});
export default connect(mapStateToProps, { carDetail })(CarDetail);
