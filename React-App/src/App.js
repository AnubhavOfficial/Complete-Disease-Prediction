import React, { useState } from "react";
import axios from "axios";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import { FaStethoscope } from "react-icons/fa";
import Home from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SyncLoader from "react-spinners/SyncLoader";
import Disease from "./Components/Disease";
import About from "./Components/About";

const useStyle = makeStyles({
  main: {
    backgroundColor: "#100041",
    width: "100%",
    height: "135vh",
    color: "white",
  },
  appbar: {
    position: "static",
    height: "4rem",
    background: "#000010",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem 4rem 1.5rem 1.5rem",
    boxShadow: "none",

    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  dropMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1rem",
  },
  rest: {
    display: "flex",
    flexDirection: "row",
    width: "22vw",
    justifyContent: "space-around",
  },
  btn: {
    background: "none",
    width: "5rem",
    height: "1.5rem",
    color: "white",
    border: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  dis: {
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingTop: "2rem",
  },
  predict: {
    fontSize: "1.7rem",
    fontFamily: "Times New Roman",
    color: "black",
    border: "0.15rem solid grey",
    background: "white",
    width: "9rem",
    height: "3rem",
    borderRadius: "0.6rem",
    marginRight: "3rem",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  preBtn: {
    textAlign: "center",
    marginTop: "2rem",
  },
  dropItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingTop: "1.2rem",
  },
  symText: {
    width: "15rem",
  },
  description: {
    textAlign: "center",
  },
  result: {
    width: "45%",
    height: "12vh",
    border: "0.1rem solid white",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resultDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2rem",
    justifyContent: "space-around",
    margin: "0 10%",
    paddingBottom: "3rem",
  },
  showBtn: {
    minWidth: "22rem",
    // marginbottom: "3rem",
  },
  select: {
    // width: "15rem",
    height: "2.5rem",
    fontSize: "1.1rem",
    borderRadius: "0.6rem",
    paddingLeft: "0.6rem",
    fontFamily: "times new Roman",
    outline: "none",
  },
});
function App() {
  const classes = useStyle();

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [symptom1, setSymptom1] = useState("none");
  const [symptom2, setSymptom2] = useState("none");
  const [symptom3, setSymptom3] = useState("none");
  const [symptom4, setSymptom4] = useState("none");
  const [symptom5, setSymptom5] = useState("none");

  const Clear = () => {
    setSymptom1("none");
    setSymptom2("none");
    setSymptom3("none");
    setSymptom4("none");
    setSymptom5("none");
    setData("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Predict = () => {
    const func = async () => {
      setLoading(true);
      setTimeout(() => {}, 5000);
      const res = await axios({
        method: "POST",
        url: "https://flask-server-disease.herokuapp.com/result",
        data: {
          sym1: `${symptom1}`,
          sym2: `${symptom2}`,
          sym3: `${symptom3}`,
          sym4: `${symptom4}`,
          sym5: `${symptom5}`,
        },
      });
      setLoading(false);
      setData(res.data);
      setShow(true);
      window.scroll({
        top: 200,
        left: 0,
        behavior: "smooth",
      });
    };

    symptom1 === "none" &&
    symptom2 === "none" &&
    symptom3 === "none" &&
    symptom4 === "none" &&
    symptom5 === "none"
      ? toast.error("Please Select Minimum of 2 Symptoms to proceed!")
      : func();
  };

  const Options = [
    {
      value: "none",
      label: "None",
    },
    {
      value: "abdominal_pain",
      label: "Abdominal Pain",
    },
    {
      value: "abnormal_menstruation",
      label: "Abnormal Menstruation",
    },
    {
      value: "acidity",
      label: "Acidity",
    },
    {
      value: "acute_liver_failure",
      label: "Acute Liver Failure",
    },
    {
      value: "altered_sensorium",
      label: "Altered Sensorium",
    },
    {
      value: "anxiety",
      label: "Anxiety",
    },
    {
      value: "back_pain",
      label: "Back Pain",
    },
    {
      value: "belly_pain",
      label: "Belly Pain",
    },
    {
      value: "blackheads",
      label: "Blackheads",
    },
    {
      value: "bladder_discomfort",
      label: "Bladder Discomfort",
    },
    {
      value: "blister",
      label: "Blister",
    },
    {
      value: "blood_in_sputum",
      label: "Blood In Sputum",
    },
    {
      value: "bloody_stool",
      label: "Bloody Stool",
    },
    {
      value: "blurred_and_distorted_vision",
      label: "Blurred And Distorted Vision",
    },
    {
      value: "breathlessness",
      label: "Breathlessness",
    },
    {
      value: "brittle_nails",
      label: "Brittle Nails",
    },
    {
      value: "bruising",
      label: "Bruising",
    },
    {
      value: "burning_micturition",
      label: "Burning Micturition",
    },
    {
      value: "chest_pain",
      label: "Chest Pain",
    },
    {
      value: "chills",
      label: "Chills",
    },
    {
      value: "cold_hands_and_feets",
      label: "Cold Hands And Feets",
    },
    {
      value: "coma",
      label: "Coma",
    },
    {
      value: "congestion",
      label: "Congestion",
    },
    {
      value: "constipation",
      label: "Constipation",
    },
    {
      value: "continuous_feel_of_urine",
      label: "Continuous Feel Of Urine",
    },
    {
      value: "continuous_sneezing",
      label: "Continuous Sneezing",
    },
    {
      value: "cough",
      label: "Cough",
    },
    {
      value: "cramps",
      label: "Cramps",
    },
    {
      value: "dark_urine",
      label: "Dark Urine",
    },
    {
      value: "dehydration",
      label: "Dehydration",
    },
    {
      value: "depression",
      label: "Depression",
    },
    {
      value: "diarrhoea",
      label: "Diarrhoea",
    },
    {
      value: "dischromic _patches",
      label: "Dischromic Patches",
    },
    {
      value: "distention_of_abdomen",
      label: "Distention Of Abdomen",
    },
    {
      value: "dizziness",
      label: "Dizziness",
    },
    {
      value: "drying_and_tingling_lips",
      label: "Drying And Tingling Lips",
    },
    {
      value: "enlarged_thyroid",
      label: "Enlarged Thyroid",
    },
    {
      value: "excessive_hunger",
      label: "Excessive Hunger",
    },
    {
      value: "extra_marital_contacts",
      label: "Extra Marital Contacts",
    },
    {
      value: "family_history",
      label: "Family History",
    },
    {
      value: "fast_heart_rate",
      label: "Fast Heart Rate",
    },
    {
      value: "fatigue",
      label: "Fatigue",
    },
    {
      value: "fluid_overload",
      label: "Fluid Overload",
    },
    {
      value: "foul_smell_of urine",
      label: "Foul Smell Of Urine",
    },
    {
      value: "headache",
      label: "Headache",
    },
    {
      value: "high_fever",
      label: "High Fever",
    },
    {
      value: "hip_joint_pain",
      label: "Hip Joint Pain",
    },
    {
      value: "history_of_alcohol_consumption",
      label: "History Of Alcohol Consumption",
    },
    {
      value: "increased_appetite",
      label: "Increased Appetite",
    },
    {
      value: "indigestion",
      label: "Indigestion",
    },
    {
      value: "inflammatory_nails",
      label: "Inflammatory Nails",
    },
    {
      value: "internal_itching",
      label: "Internal Itching",
    },
    {
      value: "irregular_sugar_level",
      label: "Irregular Sugar Level",
    },
    {
      value: "irritability",
      label: "Irritability",
    },
    {
      value: "irritation_in_anus",
      label: "Irritation In Anus",
    },
    {
      value: "itching",
      label: "Itching",
    },
    {
      value: "joint_pain",
      label: "Joint Pain",
    },
    {
      value: "knee_pain",
      label: "Knee Pain",
    },
    {
      value: "lack_of_concentration",
      label: "Lack Of Concentration",
    },
    {
      value: "lethargy",
      label: "Lethargy",
    },
    {
      value: "loss_of_appetite",
      label: "Loss Of Appetite",
    },
    {
      value: "loss_of_balance",
      label: "Loss Of Balance",
    },
    {
      value: "loss_of_smell",
      label: "Loss Of Smell",
    },
    {
      value: "malaise",
      label: "Malaise",
    },
    {
      value: "mild_fever",
      label: "Mild Fever",
    },
    {
      value: "mood_swings",
      label: "Mood Swings",
    },
    {
      value: "movement_stiffness",
      label: "Movement Stiffness",
    },
    {
      value: "mucoid_sputum",
      label: "Mucoid Sputum",
    },
    {
      value: "muscle_pain",
      label: "Muscle Pain",
    },
    {
      value: "muscle_wasting",
      label: "Muscle Wasting",
    },
    {
      value: "muscle_weakness",
      label: "Muscle Weakness",
    },
    {
      value: "nausea",
      label: "Nausea",
    },
    {
      value: "neck_pain",
      label: "Neck Pain",
    },
    {
      value: "nodal_skin_eruptions",
      label: "Nodal Skin Eruptions",
    },
    {
      value: "obesity",
      label: "Obesity",
    },
    {
      value: "pain_behind_the_eyes",
      label: "Pain Behind The Eyes",
    },
    {
      value: "pain_during_bowel_movements",
      label: "Pain During Bowel Movements",
    },
    {
      value: "pain_in_anal_region",
      label: "Pain In Anal Region",
    },
    {
      value: "painful_walking",
      label: "Painful Walking",
    },
    {
      value: "palpitations",
      label: "Palpitations",
    },
    {
      value: "passage_of_gases",
      label: "Passage Of Gases",
    },
    {
      value: "patches_in_throat",
      label: "Patches In Throat",
    },
    {
      value: "phlegm",
      label: "Phlegm",
    },
    {
      value: "polyuria",
      label: "Polyuria",
    },
    {
      value: "prominent_veins_on_calf",
      label: "Prominent Veins On Calf",
    },
    {
      value: "puffy_face_and_eyes",
      label: "Puffy Face And Eyes",
    },
    {
      value: "pus_filled_pimples",
      label: "Pus Filled Pimples",
    },
    {
      value: "receiving_blood_transfusion",
      label: "Receiving Blood Transfusion",
    },
    {
      value: "receiving_unsterile_injections",
      label: "Receiving Unsterile Injections",
    },
    {
      value: "red_sore_around_nose",
      label: "Red Sore Around Nose",
    },
    {
      value: "red_spots_over_body",
      label: "Red Spots Over Body",
    },
    {
      value: "redness_of_eyes",
      label: "Redness Of Eyes",
    },
    {
      value: "restlessness",
      label: "Restlessness",
    },
    {
      value: "runny_nose",
      label: "Runny Nose",
    },
    {
      value: "rusty_sputum",
      label: "Rusty Sputum",
    },
    {
      value: "scurring",
      label: "Scurring",
    },
    {
      value: "shivering",
      label: "Shivering",
    },
    {
      value: "silver_like_dusting",
      label: "Silver Like Dusting",
    },
    {
      value: "sinus_pressure",
      label: "Sinus Pressure",
    },
    {
      value: "skin_peeling",
      label: "Skin Peeling",
    },
    {
      value: "skin_rash",
      label: "Skin Rash",
    },
    {
      value: "slurred_speech",
      label: "Slurred Speech",
    },
    {
      value: "small_dents_in_nails",
      label: "Small Dents In Nails",
    },
    {
      value: "spinning_movements",
      label: "Spinning Movements",
    },
    {
      value: "spotting_ urination",
      label: "Spotting Urination",
    },
    {
      value: "stiff_neck",
      label: "Stiff Neck",
    },
    {
      value: "stomach_bleeding",
      label: "Stomach Bleeding",
    },
    {
      value: "stomach_pain",
      label: "Stomach Pain",
    },
    {
      value: "sunken_eyes",
      label: "Sunken Eyes",
    },
    {
      value: "sweating",
      label: "Sweating",
    },
    {
      value: "swelled_lymph_nodes",
      label: "Swelled Lymph Nodes",
    },
    {
      value: "swelling_joints",
      label: "Swelling Joints",
    },
    {
      value: "swelling_of_stomach",
      label: "Swelling Of Stomach",
    },
    {
      value: "swollen_blood_vessels",
      label: "Swollen Blood Vessels",
    },
    {
      value: "swollen_extremeties",
      label: "Swollen Extremeties",
    },
    {
      value: "swollen_legs",
      label: "Swollen Legs",
    },
    {
      value: "throat_irritation",
      label: "Throat Irritation",
    },
    {
      value: "toxic_look_(typhos)",
      label: "Toxic Look (Typhos)",
    },
    {
      value: "ulcers_on_tongue",
      label: "Ulcers On Tongue",
    },
    {
      value: "unsteadiness",
      label: "Unsteadiness",
    },
    {
      value: "visual_disturbances",
      label: "Visual Disturbances",
    },
    {
      value: "vomiting",
      label: "Vomiting",
    },
    {
      value: "watering_from_eyes",
      label: "Watering From Eyes",
    },
    {
      value: "weakness_in_limbs",
      label: "Weakness In Limbs",
    },
    {
      value: "weakness_of_one_body_side",
      label: "Weakness Of One Body Side",
    },
    {
      value: "weight_gain",
      label: "Weight Gain",
    },
    {
      value: "weight_loss",
      label: "Weight Loss",
    },
    {
      value: "yellow_crust_ooze",
      label: "Yellow Crust Ooze",
    },
    {
      value: "yellow_urine",
      label: "Yellow Urine",
    },
    {
      value: "yellowing_of_eyes",
      label: "Yellowing Of Eyes",
    },
    {
      value: "yellowish_skin",
      label: "Yellowish Skin",
    },
  ];

  const handleChange1 = () => {
    setSymptom1(document.getElementById("select1").value);
  };
  const handleChange2 = () => {
    setSymptom2(document.getElementById("select2").value);
  };
  const handleChange3 = () => {
    setSymptom3(document.getElementById("select3").value);
  };
  const handleChange4 = () => {
    setSymptom4(document.getElementById("select4").value);
  };
  const handleChange5 = () => {
    setSymptom5(document.getElementById("select5").value);
  };
  const ShowDisease = () => {
    setShow(!show);
    window.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.main}>
      <AppBar className={classes.appbar}>
        <div className={classes.dis}>
          Disease Detector
          <FaStethoscope style={{ paddingLeft: "0.5rem" }} />
        </div>
        <div className={classes.rest}>
          <button className={classes.btn}>
            <Typography variant="h6">Home</Typography>
            <Home />
          </button>
          <button className={classes.btn}>
            <Typography variant="h6">About</Typography>
            <Info />
          </button>
        </div>
      </AppBar>
      <div className={classes.text}>
        <Typography variant="h3" weight="500">
          Detect Your Disease Here !
        </Typography>
      </div>
      <div className={classes.description}>
        (Please select as many symptoms as possible for better accuracy )
      </div>
      <div className={classes.dropMenu}>
        <div className={classes.dropItem}>
          <Typography variant="h6" className={classes.symText}>
            Select 1st Symptom
          </Typography>

          <select
            id="select1"
            className={classes.select}
            value={symptom1}
            onChange={handleChange1}
          >
            {Object.values(Options).map((item) => (
              <option
                className={classes.option}
                value={item.value}
                key={item.label}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.dropItem}>
          <Typography variant="h6" className={classes.symText}>
            Select 2nd Symptom
          </Typography>
          <select
            id="select2"
            className={classes.select}
            value={symptom2}
            onChange={handleChange2}
          >
            {Object.values(Options).map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.dropItem}>
          <Typography variant="h6" className={classes.symText}>
            Select 3rd Symptom
          </Typography>

          <select
            id="select3"
            className={classes.select}
            value={symptom3}
            onChange={handleChange3}
          >
            {Object.values(Options).map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.dropItem}>
          <Typography variant="h6" className={classes.symText}>
            Select 4th Symptom
          </Typography>

          <select
            id="select4"
            className={classes.select}
            value={symptom4}
            onChange={handleChange4}
          >
            {Object.values(Options).map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.dropItem}>
          <Typography variant="h6" className={classes.symText}>
            Select 5th Symptom
          </Typography>

          <select
            id="select5"
            className={classes.select}
            value={symptom5}
            onChange={handleChange5}
          >
            {Object.values(Options).map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={classes.preBtn}>
        <button onClick={Predict} className={classes.predict}>
          Predict
        </button>
        <button onClick={Clear} className={classes.predict}>
          Clear
        </button>
        <div className={classes.resultDiv}>
          <Typography variant="h4">Prediction </Typography>
          <div className={classes.result}>
            {loading ? (
              <SyncLoader color="white" size="10px" />
            ) : (
              <h1>{data}</h1>
            )}
          </div>
        </div>

        <ToastContainer />
      </div>
      {show ? (
        <div className={classes.preBtn}>
          <button
            onClick={ShowDisease}
            className={`${classes.predict} ${classes.showBtn}`}
          >
            Know About {data}
          </button>
        </div>
      ) : (
        <Disease data={data} />
      )}

      <About />
    </div>
  );
}

export default App;
