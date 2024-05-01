import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login.jsx";
import Navbar from "../navbar/Navbar.jsx";

export default function SignUp() {
  return (
    <div className="backgroung ">
      <div className="d-flex m-auto align-items-center justify-content-center h-100  pt-5">
        <div
          className="card cardColor mt-5 navbarColor "
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
              sign up
            </h5>
            <div className=" col-md-12">
              
              <div className="firstName">
              <input
                type="text"
                className="form-control my-2 inputColor"
                id="firstName"
                aria-describedby=""
                placeholder="UserName"
              />
              </div>

              
              <div className="email">
                <input
                  type="email"
                  className="form-control  inputColor"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="your email@email.com"
                />
                <p className="text-danger pt-1 ps-2 text-start w-100">
                  * valid email is required: ***@gmail.com
                </p>
              </div>

              <div className="password">
                <input
                  type="password"
                  className="form-control  inputColor "
                  id="exampleInputPassword"
                  aria-describedby="password"
                  placeholder="password"
                />
                <p className="text-danger pt-1 ps-2 text-start w-100 ">
                  please choose a stronger password. try a mix of letters,
                  numbers, and symbols.
                </p>
              </div>
              <div className="comfirmPassword">
                <input
                  type="password"
                  className="form-control  inputColor "
                  id="exampleInputPassword"
                  aria-describedby="password"
                  placeholder="comfirm password"
                />
                <p className="text-danger pt-1 ps-2 text-start w-100 ">
                The password does not match
                </p>
              </div>

              <button
                type="button"
                class="btn btn-success text-capitalize fs-5 w-100 my-2"
              >
                sgin up
              </button>
            </div>

            <div className="anotherLogIn my-4">
              <div className="position-relative">
                <p className="text-center text-capitalize grayColor text">
                  or sign up with
                </p>
              </div>
              <div className="d-flex justify-content-center column-gap-3">
                <div className="facebook facebookColor py-2 px-3 ">
                  <div className="facebookColor1">
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={25}
                      width={25}
                      viewBox="0 0 320 512 "
                      className="facebookColor1"
                    >
                      
                      <path
                        fill="#fcfcfc"
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                    </a>
                  </div>
                </div>
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1174077171%3A1714473661499224&theme=mn&ddm=0" target="_blank" rel="noopener noreferrer">

                <div className="google py-2 px-3 bg-white">
                  <img
                    src="public/img/logo-google.png"
                    alt=""
                    width={25}
                    height={30}
                  />
                </div>
                </a>
              </div>
            </div>

            <p className="text-capitalize text-center pt-2 grayColor">
              Already a member{" "}
              <Link to={"/Login"} href="" className=" textColor">
                log in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
