import React, { useState } from "react";
import "./newsEvents.css";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
// events imports
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

function NewsEvents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
  }

  return (
    <>
      <div className="news-events-wrapper">
        <div className="center-content">
          <div className="news-inner">
            <div className="news-heading">
              <h1>Sign Up for College Admissions Advice and Updates</h1>
            </div>

            <form
              className="form-area"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="input-one">
                <TextField
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  size="small"
                />
              </div>
              <div className="input-two">
                <TextField
                  color="primary"
                  variant="outlined"
                  type="email"
                  label="Email"
                  placeholder="test@test.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size="small"
                />
              </div>

              <Button
                className="form-btn"
                variant="outlined"
                color="primary"
                type="submit"
                size="small"
                endIcon={<SendIcon />}
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="events-inner">
            <h2>Events</h2>
            <React.Fragment>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="primary">02/07/22</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography color="primary">O' Week</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="primary">19/07/22</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography color="primary">Enroll Day</Typography>
                  </TimelineContent>
                </TimelineItem>
                {/* <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="primary">27/07/22</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography color="primary">Concert</Typography>
                  </TimelineContent>
                </TimelineItem> */}
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="primary">04/07/22</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography color="primary">First Lecture</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </React.Fragment>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsEvents;
