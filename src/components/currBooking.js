import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBookings } from "../actions/carsAction";

class CurrBooking extends Component {
  componentDidMount() {
    this.props.fetchBookings();
  }
  render() {
    let custDetail = {};
    for (let index = 0; index < this.props.bookings.length; index++) {
      if (this.props.bookings[index].carId === this.props.carId)
        custDetail = this.props.bookings[index];
    }
    if (custDetail !== {}) {
      return (
        <div>
          <h5>Current Booking</h5>
          <br />
          <hr />
          <br />
          <div class="row">
            <div class="col s3">NAME</div>
            <div class="col s3">PHONE NUMBER</div>
            <div class="col s3">ISSUE DATE</div>
            <div class="col s3">RETURN DATE</div>
          </div>
          <br />
          <div class="row">
            <div class="col s3">{custDetail.name}</div>
            <div class="col s3">{custDetail.contact}</div>
            <div class="col s3">{custDetail.DOI}</div>
            <div class="col s3">{custDetail.DOR}</div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
CurrBooking.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
  bookings: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  bookings: state.data.bookings,
});
export default connect(mapStateToProps, { fetchBookings })(CurrBooking);
