import React, { Component } from "react";
import M from "materialize-css";
import CarItem from "./carItem";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCars } from "../actions/carsAction";

class CarList extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  render() {
    //console.log(this.props.cars);
    const list = this.props.cars.map((car) => {
      return <CarItem car={car} />;
    });

    return (
      <div className="container">
        <div>
          <h3 className="rent">Cars for rent</h3>
          <br />
          <hr />
          <br />
        </div>
        <div className="row row-det container">
          <div className="col s6 center-align">
            <h6>
              <b>Car Details</b>
            </h6>
          </div>
          <div className="col s6 left-align">
            <h6>
              <b>Rent Per Day</b>
            </h6>
          </div>
        </div>
        <div>{list}</div>
      </div>
    );
  }
}
CarList.propTypes = {
  fetchCars: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  cars: state.data.cars,
});
export default connect(mapStateToProps, { fetchCars })(CarList);
