import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link className="link-img" to="/">
            <img
              src="/images/FinalDYMS20211.png"
              className="img-tag"
              alt="logo"
              width="100"
            />
          </Link>
        </div>
        <div className="navList">
          <ul className="ul-wrapper">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>

              <ul className="ul-subItem">
                <li>
                  <Link className="link-sub" to="/about/intro">
                    Intro of College
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/about/why">
                    Why DYIMS?
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/about/qah">
                    Qadir Ali Hospital
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/about/society">
                    Dr. Yahya Welfare Society
                  </Link>
                </li>

                <li>
                  <Link className="link-sub" to="/about/objectives">
                    Objectives
                  </Link>
                  <ul className="ul-sub-subItem">
                    <li>
                      <Link
                        className="link-sub-sub"
                        to="/about/objectives/statement"
                      >
                        Mission Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link-sub-sub"
                        to="/about/objectives/values"
                      >
                        Core Values
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link-sub-sub"
                        to="/about/objectives/vision"
                      >
                        Vision
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="link-sub" to="/about/chairmsg">
                    Chairmain's Message
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/about/princimsg">
                    Principal's Message
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/about/bogs">
                    BoGs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="link" to="/facilities">
                Facilities
              </Link>
            </li>
            <li>
              <Link className="link" to="/programs">
                Programs
              </Link>
              <ul className="ul-subItem">
                <li>
                  <Link className="link-sub" to="/programs/nutrition">
                    Human Nutrition and Dietetics
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/programs/physiotheraphy">
                    Doctor of Physiotherapy (DPT)
                  </Link>
                </li>
                <li>
                  <Link className="link-sub">Radiograpy and Imaging Tech</Link>
                </li>
                <li>
                  <Link className="link-sub">
                    Medical Laboratory Technology
                  </Link>
                </li>
                <li>
                  <Link className="link-sub">Operation Theater Technology</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="link" to="/student">
                Student
              </Link>
            </li>
            <li>
              <Link className="link" to="/webmail">
                Web-Mail
              </Link>
            </li>
            <li>
              <Link className="link" to="/apply">
                How to Apply
              </Link>
              <ul className="ul-subItem">
                <li>
                  <Link className="link-sub" to="/apply/criteria">
                    Eligibilty Criteria
                  </Link>
                </li>

                <li>
                  <Link className="link-sub" to="/apply/schedule">
                    Admission Schedule
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/apply/procedure">
                    Procedure
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/apply/fee">
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <Link className="link-sub" to="/apply/prospectus">
                    Prospectus
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
