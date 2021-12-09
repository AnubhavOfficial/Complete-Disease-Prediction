import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, Typography } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

const useStyles = makeStyles({
  main: {
    color: "white",
    background: "#100041",
    marginTop: "5rem",
    paddingBottom: "3rem",
  },
  tableMain: {
    width: "90%",
    border: "0.1rem white solid",
    borderBottom: "none",
    height: "100vh",
    margin: "5%",
    textAlign: "center",
  },
  tableRow: {
    height: "20%",
    display: "flex",
  },
  tableColumn1: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "0.1rem white solid",
    borderBottom: "0.1rem white solid",
  },
  tableColumn2: {
    width: "70%",
    overflow: "auto",
    padding: "1rem",
    borderBottom: "0.1rem white solid",
  },
  btn: {
    fontSize: "1.6rem",
    fontFamily: "Times New Roman",
    color: "black",
    border: "0.15rem solid grey",
    background: "white",
    width: "18rem",
    height: "3rem",
    borderRadius: "0.6rem",
    // marginRight: "3rem",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
});
const Disease = (disease) => {
  const [response, setResponse] = useState({
    treatment: "No Data",
    name: "No Data",
    prevention: "No Data",
    transmission: "No Data",
    facts: ["No Data", "No Data", "No Data"],
  });
  const dis = disease.data;
  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(
        `https://disease-info-api.herokuapp.com/diseases/${dis}.json`
      );
      setResponse(res.data.disease);
    };
    dis && apiCall();
  }, [dis]);
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "white",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const classes = useStyles();

  const Search = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <>
      {dis && (
        <div className={classes.main}>
          <div className={classes.tableMain}>
            <div className={classes.tableRow}>
              <div className={classes.tableColumn1}>
                <Typography variant="h4">Name</Typography>
              </div>
              <div className={classes.tableColumn2}>
                <Scrollbars
                  renderThumbVertical={renderThumb}
                  className={classes.scrollbar}
                >
                  <Typography className={classes.typo} variant="h6">
                    {response.name}
                  </Typography>
                </Scrollbars>
              </div>
            </div>
            <div className={classes.tableRow}>
              <div className={classes.tableColumn1}>
                <Typography variant="h4">Treatment</Typography>
              </div>
              <div className={classes.tableColumn2}>
                <Scrollbars renderThumbVertical={renderThumb}>
                  <Typography variant="h6">{response.treatment}</Typography>
                </Scrollbars>
              </div>
            </div>
            <div className={classes.tableRow}>
              <div className={classes.tableColumn1}>
                <Typography variant="h4">Prevention</Typography>
              </div>
              <div className={classes.tableColumn2}>
                <Scrollbars renderThumbVertical={renderThumb}>
                  <Typography variant="h6">{response.prevention}</Typography>
                </Scrollbars>
              </div>
            </div>
            <div className={classes.tableRow}>
              <div className={classes.tableColumn1}>
                <Typography variant="h4">Transmission</Typography>
              </div>
              <div className={classes.tableColumn2}>
                <Scrollbars renderThumbVertical={renderThumb}>
                  <Typography variant="h6">{response.transmission}</Typography>
                </Scrollbars>
              </div>
            </div>
            <div className={classes.tableRow}>
              <div className={classes.tableColumn1}>
                <Typography variant="h4">Facts</Typography>
              </div>
              <div className={classes.tableColumn2}>
                <Scrollbars renderThumbVertical={renderThumb}>
                  {response.facts && (
                    <Typography variant="h6">
                      {response.facts[Math.floor(Math.random() * 3)]}
                    </Typography>
                  )}
                </Scrollbars>
              </div>
            </div>
          </div>
          <center>
            <button className={classes.btn} onClick={Search}>
              Search Another Disease
            </button>
          </center>
        </div>
      )}
    </>
  );
};

export default Disease;
