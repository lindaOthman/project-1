import React from "react";
import "./ver.css";
import { Link } from "react-router-dom";
import SignUp from "../signup/Signup.jsx";
import Navbar from "../navbar/Navbar.jsx";

export default function Login() {
  return (
    <div className="backgroung ">
      <div className="d-flex m-auto align-items-center justify-content-center h-100  pt-5">
        <div
          className="card cardColor mt-5  navbarColor "
          style={{ width: "25rem" }}
        >
          <div className="card-body ">
            <div className="img d-flex  justify-content-center">
              <img
                src="revive.png"
                width="120px"
                className="text-center"
                alt=""
              />
            </div>
            <h5 className="card-title text-capitalize text-center py-1 text-white">
              Please enter the 4-digit verification code we sent via email:
            </h5>
            <p className="text-center text-capitalize grayColor ">
              (we want to make sure it's you before we contact our movers).
            </p>
            <div className=" col-md-12">
              

              <div id="form">
                <input className="nnn"
                  type="text"
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="[0-9]{1}"
                />
                <input className="nnn"
                  type="text"
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="[0-9]{1}"
                />
                <input className="nnn"
                  type="text"
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="[0-9]{1}"
                />
                <input className="nnn"
                  type="text"
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="[0-9]{1}"
                />
              </div>
              <button
                type="button"
                class="btn btn-success text-capitalize fs-5 w-100 my-4"
              >
                Verify
              </button>
            </div>

            <div className="anotherLogIn my-4">
              <div className="position-relative">
                <div className="text-white">
                  Didn't receive the code?
                  <br />
                  <a href="#">Send code again</a>
                  <br />
                  <a href="#">Change phone number</a>
                </div>
              </div>

              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
