/* eslint-disable no-use-before-define */
import React, { useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Endpoints from "../Endpoints.js";
import { View, Text } from "react-native"
import { Launch } from "../Launch.js";

export default function SelectProvider() {
  const handleChange = useCallback((event, value) => {
    //console.log("*")
    Launch(value.value);
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
    <Text style={{ fontSize: 75, marginTop: 100 }}>Harmony</Text>
    <View style={{ marginTop: 20 }}>
    <Autocomplete
      id="combo-box-demo"
      options={Endpoints}
      getOptionLabel={option => option.label}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label="Providers" variant="outlined" fullWidth />
      )}
    />
    </View>
  </View>
    
  );
}
