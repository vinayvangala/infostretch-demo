import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {submitPatientsService} from "../utils/services";
import {Link} from 'react-router-dom'

export default function AddressForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("")

  const submitData = () => {
    submitPatientsService(
      firstName,
      lastName,
      age,
      address,
      city,
      zipcode,
      state,
      country
    );

    setIsSubmitted(true);
  };

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };

  const handleLastName = e => {
    setLastName(e.target.value);
  };

  const handleAge = e => {
    setAge(e.target.value);
  };

  const handleAddress = e => {
    setAddress(e.target.value);
  };

  const handleCity = e => {
    setCity(e.target.value);
  };

  const handleState = e => {
    setState(e.target.value);
  };

  const handleZipcode = e => {
    setZipcode(e.target.value);
  };

  const handleCountry = e => {
    setCountry(e.target.value);
  };

  const handleSubmitState = () => {
      setIsSubmitted(false);
  }
  return ( 
      <div>
    {isSubmitted ? 
     <div>
         <Button style= {{alignContent:'center', marginTop:'5%', marginLeft:'40%', marginBottom: '2%'}} variant = "contained" color="secondary" onClick= {()=>handleSubmitState()}>
           Fill Another Patient Data
            </Button>
     </div> :
    <div style={{ margin: "24px" }}>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>
      <Grid spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onKeyUp={handleFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onKeyUp={handleLastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            onKeyUp={handleAge}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address-line"
            onKeyUp={handleAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            onKeyUp={handleCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onKeyUp={handleState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            type="number"
            autoComplete="postal-code"
            onKeyUp={handleZipcode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            onKeyUp={handleCountry}
          />
        </Grid>
        <Button
          style={{ marginTop: "16px" }}
          variant="contained"
          color="Secondary"
          onClick={() => submitData()}
        >
          Submit
        </Button>
      </Grid>
    </div> }
      <Button style= {{marginRight:'30%', marginLeft:'20%'}} variant = "contained" color="primary">
            <Link style={{color:'white'}}  to="/viewpatients">view Patients Data</Link>
            </Button>
            <Button  style= {{marginRight:'10%'}}  variant = "contained" color="primary">
            <Link style={{color:'white'}}  to="/">Go Back to Home Page</Link>
     </Button>
     </div>
    
  );
}
