import React from "react";
import "./report.css";
import Navbar from "../navbar/Navbar.jsx";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
}

export default function Report() {
  return (
    // <div className="background d-flex align-items-center justify-content-center">

    //   <form className="bg-white">
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         location
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //       />

    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //       Issue Type:
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //       />

    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //       Other Issue Description
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //       />

    //     </div>

    //     {/* <div className="mb-3">
    //       <label htmlFor="exampleInputPassword1" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="exampleInputPassword1"
    //       />
    //     </div> */}
    //     {/* <div className="mb-3 form-check">
    //       <input
    //         type="checkbox"
    //         className="form-check-input"
    //         id="exampleCheck1"
    //       />
    //       <label className="form-check-label" htmlFor="exampleCheck1">
    //         Check me out
    //       </label>
    //     </div> */}
    //     <button type="submit" className="btn btn-primary">
    //       cancel
    //     </button>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>

    <div className="background ">
      <div className="container d-flex align-items-center justify-content-center h-100 text-white ">
        <div className=" report p-5">
          <div className=" p-3">
            <h2 className="pb-5">
              <ion-icon name="construct-outline" /> Report Road Issue
            </h2>
            <form className="p-4">
              <div className="row w-auto ">
                <div className="col-md-6 ">
                  <div className="">
                    <label htmlFor="location" className="text-start w-100 py-2 fs-5">
                      <ion-icon name="location-outline" />* Location:
                    </label>
                      <div className="inpt">
                        <input className="w-100 py-2 fs-5" type="text" id="location" name="location" required />
                      </div>
                  </div>
                  <div className="">
                    <label className="text-start w-100 py-2 fs-5">
                      <ion-icon name="build-outline" /> Issue Type:
                    </label>
                  </div>
                  <div className=" text-start">
                    <select
                      className="issue-type p-2"
                      id="issue-type"
                      name="issue-type"
                      onchange="handleIssueTypeChange()"
                      required
                    >
                      <option value="pothole">Pothole</option>
                      <option value="road-damage">Road Damage</option>
                      <option value="crack">Big Crack</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div
                    className="other-issue"
                    id="other-issue"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="other-issue-description" className="text-start w-100 py-2 fs-5">
                      Other Issue Description:
                    </label>
                    <input
                      type="text"
                      id="other-issue-description"
                      name="other-issue-description"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="description" className="text-start w-100 py-2 fs-5">
                      <ion-icon name="reader-outline" /> Description:
                    </label>
                  </div>
                  <div className="inpt">
                    <textarea
                      className="w-100 fs-5"
                      id="description"
                      rows={2}
                      cols={55}
                      name="description"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="custom-file-input text-start mt-4">
                    <div className="">
                      <label htmlFor="image" className="text-start w-100 p-2 fs-5">
                        <ion-icon name="camera-outline " className="me-2" /> Image:
                        <input className="ms-2 issue-type pointer-event mm p-1" type="file" id="image" accept="image/*" required />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-0 d-flex justify-content-between align-items-center ">
                  <button
                    type="button"
                    onclick="window.location.href='home-loggedin.html'"
                  >
                    Cancel
                  </button>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
