var initialState = {
  cars: [],
  bookings: [],
  car: {},
  selectedCar: "",
};
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        cars: action.payload,
      };
    case "GET_BOOKINGS":
      return {
        ...state,
        bookings: action.payload,
      };
    case "NEW_BOOKING": {
      const temp = state.cars.map((car) => {
        if (car.id === action.payload.carId) car.booked = true;
      });
      return {
        ...state,
        cars: temp,
        bookings: state.bookings.push(action.payload),
      };
    }

    case "CAR_DETAIL": {
      let car = {};
      for (let index = 0; index < state.cars.length; index++) {
        if (state.cars[index].id === action.payload) car = state.cars[index];
      }
      return {
        ...state,
        car: car,
      };
    }

    case "CAR_SELECTED":
      return {
        ...state,
        selectedCar: action.payload,
      };
    default:
      return state;
  }
};
export default carsReducer;
