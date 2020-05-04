import React from "react";
import M from "materialize-css";

export default function footerSec() {
  return (
    <div>
      <footer className="teal white-text center">
        <div>
          <div className="row">
            <div className="col s12">
              <h4>Rent Vroom</h4>
              <p>Rentvroom Pvt. Ltd.</p>
              <p>No: 296,3rd Cross Rd,Jakkasandra,1st Block,Koramangla</p>
              <p>Bengaluru,Karnataka 560034</p>
              <a href="#" className="white-text">
                <i className="fab fa-facebook fa-4x"></i>
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-twitter fa-4x"></i>
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-google-plus fa-4x"></i>
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-pintrest fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
