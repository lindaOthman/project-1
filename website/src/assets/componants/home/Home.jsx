import React from "react";
import { Link } from "react-router-dom";
import RecentReport from '../recentReport/recent.jsx';
import "./home.css";
import howTo from './imges/howto.jpg'
import Report from '../report/Report.jsx'
import SignUp from "../signup/Signup.jsx"; 

export default function home() {
  return (
    <div>
            {/* main home section1*/}
      <section className="bg-black headerBackground text-capitalize d-flex align-items-center">
        <div className="container">
          <header className="">
            <div className="w-70">
              <div className="title">
                <h1 className="">
                  <span className="goldColor">Street</span> Voices,
                  <br />
                  <span className="lightGreen">Community</span> Choices
                </h1>
              </div>
              <p className="fs-3">
                Welcome To Our Road-Aware Community, We're Passionate About
                Making Your Journey Safer And Smoother.ReviveRoad Is Dedicated
                To Quick, Real-Time Reporting Of Road Issues. Let's
                Revolutionize The Road Experience Together!
              </p>
              <button
                type="button"
                class="btn bttn btn-gold text-capitalize fs-4 text-white"
              >
                <Link to={'/Report'} className="text-white">Report an issue</Link>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* section 2 */}
        <section className="my-5 py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img className="how-to opacity-50" src={howTo} alt="" width={'400px'} height={'500px'} />
              </div>
             
              <div className="col-md-7 d-flex ">
                <div className="HowToReport">
                <h2 className="mb-4">How to use?</h2>
                <ol className="text-white ">
                  <li className="pb-2 pt-1 mb-3">Login into your account. Don't have an account?<Link to={'/SignUp'} href="#"> Register </Link></li>
                  <li className="pb-2 pt-1 mb-3">Click on report an issue</li>
                  <li className="pb-2 pt-1 mb-3">Enter the address where the issue exists</li>
                  <li className="pb-2 pt-1 mb-3">Describe the issue</li>
                  <li className="pb-2 pt-1 mb-3">We will deliver your report to the concerned authorities</li>
                </ol>

                </div>
                
              </div>
            </div>
          </div>

        </section>
      {/* section 3 */}
      <section className=" section2 mb-5">
        <div className="container">
            <div className="d-flex justify-content-center">
                <h2 className="text-white fs-3 w-50 text-center ">
                <span className="goldColor">Report incidents</span> within Brussels' public space and help make <span className="goldColor">your city
                better</span>!
                </h2>
            </div>
        </div>
      </section>


      {/* section 4 */}
      <section className="my-5 py-5">
        <div className="container">
          <h2 className="goldColor text-center text-capitalize">Recently reported problems</h2>
          <div className="row">

            {/* code without API */}
          <RecentReport title={'one'} description={'this is recent one'}/>
          <RecentReport title={'two'} description={'this is recent two'}/>
          <RecentReport title={'three'} description={'this is recent three'}/>
          <RecentReport title={'four'} description={'this is recent four'}/>

          
          
          
          </div>
        </div>
      </section>


      {/* last section */}
      <section className="last my-4 mt-5 pt-5">
        <div className="container">
          <hr className="goldColor"/>
        <p className="goldColor text-center">© 2023 ReviveRoad. All rights reserved.</p>

        </div>
      </section>
    </div>
  );
}
