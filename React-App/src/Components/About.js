import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    background: "#100041",
    height: "50vh",
    paddingTop: "10vh",
  },
  heading: {},
  about: {
    background: "#000010",
    height: "46vh",
    paddingTop: "4vh",
  },
  text: {
    width: "44%",
    margin: "2%",
  },
  textDiv: {
    display: "flex",
    margin: "0 5%",
    flexDirection: "row",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.about}>
        <center>
          <Typography variant="h4" className={classes.heading}>
            DISEASE DETECTOR
          </Typography>
        </center>
        <div>
          <div className={classes.textDiv}>
            <div className={classes.text}>
              <Typography variant="h6">
                Disease Detector is an online site which tells you about the
                disease you may suffer, according to the symptoms you choose.
                The more symptoms you provide, the more accurate the results
                will be. After the result is being predicted a button can be
                seen which will tell various things like prevention, treatment,
                facts etc. about the predicted disease!
              </Typography>
            </div>
            <div className={classes.text}>
              <Typography variant="h6">
                We use Machine Learning for the prediction of the diseases and
                our accuracy is near 100% for only 41 diseases as of now, which
                is our only limitation. We are working hard to add more diseases
                and making some improvements which can be seen in our future
                updates. Stay tuned!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
