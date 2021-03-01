//import React from "react";
import { oauth2 as SMART } from "fhirclient";

//var google = require("googleapis")
export const Launch = iss => {
  SMART.authorize({
    clientId: "8bca6fc4-20c4-4da0-bcbc-e8a209a76609",
    //clientId: "741d549d-9c93-4550-a5a3-7b7bdac2c374",
    //clientId: "6fc6c35f-d474-4c6a-b24c-e8bde95f185a",
    //clientId: "60ac6269-d6fa-4b79-8e01-18ec0cffd291",
    //clientId: "e3d47a81-31f1-4a5d-8b14-ad9d0c50b008",
    //clientId: "78afb7ef-8059-418f-9714-8edc4ee74df9",
    scope: "patient/everything",
    redirectUri: "https://harmony-260817.appspot.com/data",
    //iss: "https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/"
    //iss: "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
    iss: iss
  });
};