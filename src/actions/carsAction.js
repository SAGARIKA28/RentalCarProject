import carlist from "../data/cars";
import bookinglist from "../data/bookingdetails";

export const fetchCars = () => (dispatch) => {
  dispatch({
    type: "GET_CARS",
    payload: carlist,
  });
};
export const fetchBookings = () => (dispatch) => {
  dispatch({
    type: "GET_BOOKINGS",
    payload: bookinglist,
  });
};

export const newBooking = (data) => {
  return {
    type: "NEW_BOOKING",
    payload: data,
  };
};

export const carDetail = (id) => (dispatch) => {
  dispatch({
    type: "CAR_DETAIL",
    payload: id,
  });
};

export const selectCar = (carId) => {
  return {
    type: "CAR_SELECTED",
    payload: carId,
  };
};
