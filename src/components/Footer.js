import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#dddbd9",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#48a5ad",
    },
    "& .MuiOutlinedInput-input": {
      color: "#dddbd9",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#48a5ad",
    },
    "& .MuiInputLabel-outlined": {
      color: "#dddbd9",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#48a5ad",
    },
  },
  input: {
    color: "#48a5ad",
  },
  inputLabel: {
    color: "#dddbd9",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-inner">
            <div className="footer-logo">
              <Link to="/">
                <img src="/images/FinalDYMS20211.png" alt="logo" width="140" />
              </Link>
              <h1>Dr. Yahya Institute</h1>
            </div>
            <div className="footer-address">
              <h2 className="footer-address-title">
                Dr. Yahya Institute of <br /> Medical Sciences
              </h2>
              <div className="footer-address-loc">
                <MyLocationIcon />
                <p> 31200, Opp. Rivaj Hotel, Layyah</p>
              </div>
              <div className="footer-address-no">
                <PhoneIcon />
                <p>0606-654321</p>
              </div>
              <div className="footer-social-media-icon">
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
              <div className="footer-rights">
                &copy; 2021 Dr. Ali Yahya. All right reserved.
              </div>
            </div>
            <div className="footer-nav">
              <div className="rest-nav">
                <ul className="footer-ul">
                  <li>
                    <Link className="footer-li-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-li-link" to="/program">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-li-link" to="/aid">
                      Admissions & Aid
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-li-link" to="/campus">
                      Campus Life
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-li-link" to="/">
                      Contact the College
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="search-nav">
                <TextField
                  InputLabelProps={{ className: classes.inputLabel }}
                  label="Search"
                  variant="outlined"
                  size="small"
                  color="primary"
                  InputProps={{
                    className: classes.input,
                  }}
                  className={classes.root}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
