import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Popup from "./popUp";
import { carDetail } from "../actions/carsAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import car1 from "../images/car1.jpg";

class BookingForm extends React.Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
    this.props.carDetail(this.props.match.params.id);
  }
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: "+91",
      DOI: new Date(),
      DOR: new Date(),
      showPopUp: false,
      errors: "NAME NOT PROVIDED",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  handleChange(event) {
    //this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
    let n = event.target.name;
    let v = event.target.value;
    if (n === "name") {
      if (v === "") {
        this.setState({ errors: "NAME NOT PROVIDED" });
      } else {
        this.setState({
          errors:
            "EITHER THE PHONE NUMBER IS NOT VALID OR THE COUNTRY CODE IS WRONG",
        });
      }
    }
    if (n === "contact") {
      if (v === "") {
        this.setState({
          errors:
            "EITHER THE PHONE NUMBER IS NOT VALID OR THE COUNTRY CODE IS WRONG",
        });
      } else {
        this.setState({
          errors: "ENTER DATE OF ISSUE",
        });
      }
    }
    if (n === "DOI") {
      if (v <= new Date().getDate()) {
        this.setState({
          errors: "NOT A VALID ISSUE DATE",
        });
      } else {
        this.setState({
          errors: "ENTER DATE OF RETURN",
        });
      }
    }
    if (n === "DOR") {
      if (v <= this.state.DOI) {
        this.setState({
          errors: "NOT A VALID RETURN DATE",
        });
      } else {
        this.setState({
          errors: "",
        });
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <section id="contact">
          <div class="container">
            <div class="row">
              <div class="col s12 m6">
                <div class="card-panel teal white-text center">
                  <i class="material-icons medium">drive_eta</i>
                  <h5>OUR POLICY</h5>
                  <p>
                    This privacy policy sets out how RentVroom uses and protects
                    any information that you give RentVroom when you use this
                    website. RentVroom is committed to ensuring that your
                    privacy is protected. Should we ask you to provide certain
                    information by which you can be identified when using this
                    website, then you can be assured that it will only be used
                    in accordance with this privacy statement. RentVroom may
                    change this policy from time to time by updating this page.
                    You should check this page from time to time to ensure that
                    you are happy with any changes. This policy is effective
                    from 31st July 2006.
                  </p>
                </div>
              </div>
              <form>
                <div class="col s12 m6">
                  <div class="card-panel grey lighten-3">
                    <h5>Booking details</h5>
                    {this.state.errors === "" ? null : (
                      <p class="#d50000 red accent-4 text">
                        {this.state.errors}
                      </p>
                    )}

                    <br />
                    <div class="input-field">
                      <label>
                        <h6>
                          <b>Name:</b>
                        </h6>
                      </label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Doe"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="input-field">
                      <label>
                        <h6>
                          <b>Contact Number:</b>
                        </h6>
                      </label>
                      <br />
                      <input
                        type="tel"
                        name="contact"
                        value={this.state.contact}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div class="input-field">
                      <label>
                        <h6>
                          <b>Issue Date:</b>
                        </h6>
                      </label>
                      <br /> <br />
                      <input
                        type="date"
                        name="DOI"
                        value={this.state.DOI}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="input-field">
                      <label>
                        <h6>
                          <b>Return Date:</b>
                        </h6>
                      </label>
                      <br />
                      <br />
                      <input
                        type="date"
                        name="DOR"
                        value={this.state.DOR}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col s6 ">
                        <button className="btn teal white-text center">
                          <Link
                            to={`/`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            BACK
                          </Link>
                        </button>
                      </div>
                      <div className="col s6 ">
                        <button
                          onClick={this.handleSubmit}
                          data-target="modal1"
                          class={
                            this.state.errors !== ""
                              ? "btn disabled modal-trigger"
                              : "btn modal-trigger"
                          }
                        >
                          SUBMIT
                        </button>
                        <div
                          id="modal1"
                          class="modal"
                          ref={(Modal) => {
                            this.Modal = Modal;
                          }}
                        >
                          <div class="modal-content">
                            <h4>BOOKING CONFIRMED !</h4>
                            <p>
                              <h5>You have booked: </h5>
                              <h6>
                                <b>{this.props.car.name}</b>
                              </h6>
                              <br />
                              <h5> Duration: </h5>
                              <h6>
                                <b>
                                  {this.state.DOI.toString()} -{" "}
                                  {this.state.DOR.toString()}{" "}
                                </b>
                              </h6>
                            </p>
                          </div>
                          <div class="modal-footer">
                            <Link
                              to="/"
                              class="modal-close waves-effect waves-green btn-flat"
                            >
                              <b>Continue</b>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
BookingForm.propTypes = {
  carDetail: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  car: state.data.car,
});
export default connect(mapStateToProps, { carDetail })(BookingForm);
