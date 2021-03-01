import * as React from "react";
//import { getPath } from "fhirclient/lib/lib";
import FhirClientProvider from "../components/FhirClientProvider";
import Patient from "../components/Patient";
//import { oauth2 as SMART} from "fhirclient";
//import { render } from "react-dom";

//const rootElement = document.getElementById("root");

export default function Data() {
  /*SMART.ready()
  .then(client => client.patient
    .read()
    .then(patient => {
      //console.log(JSON.stringify(patient))
      //var data = JSON.stringify(patient)
      render(<div>asa</div>, rootElement);
  }));  */

  return (
    <FhirClientProvider>
      <Patient />
    </FhirClientProvider>
  );
}
