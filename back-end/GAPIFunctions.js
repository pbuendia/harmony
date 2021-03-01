const {google} = require('googleapis')
var healthcare = google.healthcare("v1beta1")
const bodyParser = require('body-parser')
let test = require('./test.json')
let data = JSON.stringify(test, null, 4)
//const fs = require('fs')
//var data = fs.readFileSync
//console.log(data)
//const test = require('./')

const getClient = async () => {
    const client = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/cloud-platform']
    }).catch(err => {
        console.error('authentication failed: ', err);
    });
    //console.log(client)
    return client
}

exports.createResource = async () => {
    const client = await getClient()
    //let test = JSON.parse
    var request = {
      // The name of the FHIR store this resource belongs to.
      parent: 'projects/harmony-260817/locations/us/datasets/test/fhirStores/test',  // TODO: Update placeholder value.
      //headers: {
        //'Content-Type': 'application/fhir+json; charset=utf-8',
      //},
      // The FHIR resource type to create, such as Patient or Observation. For a
      // complete list, see the [FHIR Resource
      // Index](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html).
      // Must match the resource type in the provided content.
      type: 'Patient',  // TODO: Update placeholder value.
  
      resource: test,//{resourceType : 'Patient'},
      auth: client,
    };

    healthcare.projects.locations.datasets.fhirStores.fhir.create(request, function(err, response) {
      if (err) {
        console.error(err);
        return;
      }
        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
        //console.log(test)
    });
}
  
//exports.getResource = getResource
exports.getResource = async () => {
    const client = await getClient()
    //console.log("*")
    var request = {
      // The name of the resource to retrieve.
      name: 'projects/harmony-260817/locations/us/datasets/test/fhirStores/test/fhir/Patient',  // TODO: Update placeholder value.
  
      auth: client,
    };
  
    healthcare.projects.locations.datasets.fhirStores.fhir.read(request, function(err, response) {
      if (err) {
        console.error(err);
        return;
      }
      // console.log("*")
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2));
    });
  }

exports.deidentifyFHIRStore = async () => {
    const client = await getClient()
    var request = {
    // Source FHIR store resource name. For example,
    // `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
    sourceStore: 'projects/harmony-260817/locations/us/datasets/test/fhirStores/test/',  // TODO: Update placeholder value.

    resource: {
      // TODO: Add desired properties to the request body.
      destinationStore : 'projects/harmony-260817/locations/us/datasets/test/fhirStores/deidentify_test',  // TODO: Update placeholder value.
      config: {
            fhir : {}
        }
    },

    auth: client,
  };

  healthcare.projects.locations.datasets.fhirStores.deidentify(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 4));
  });
}
