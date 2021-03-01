import React from "react";
import { FhirClientContext } from "../FhirClientContext";
import View from "react";
import axios from "axios"

function PatientName({ name = [] }) {
  let entry = name.find(nameRecord => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h1>No Name</h1>;
  }
  return <h1>{entry.given.join(" ") + " " + entry.family}</h1>;
}

function PatientBanner(patient) {
  return (
    <div>
      <PatientName name={patient.name} />
      <span>
        Gender: <b>{patient.gender}</b>,{" "}
      </span>
      <span>
        DOB: <b>{patient.birthDate}</b>
      </span>
    </div>
  );
}

export default class Patient extends React.Component {
  static contextType = FhirClientContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      patient: null,
      error: null
    };
  }
  componentDidMount() {
    const client = this.context.client;
    this._loader = client.patient
      .read()
      .then(patient => {
        this.setState({ patient, loading: false, error: null });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  render() {
    const { error, loading, patient } = this.state;
    if (loading) {
      return null;
    }
    if (error) {
      return error.message;
    }
    //console.log(patient)
    //patient.
    downloadObjectAsJson(patient, "data");
    //axios.post("/")
    return (
      <center>
        <div> json: </div>
        <textarea
          value={JSON.stringify(patient, null, 4)}
          rows="40"
          cols="100"
        />
      </center>
    );
  }
}

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj, null, 4));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
