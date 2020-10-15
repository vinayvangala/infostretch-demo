import  { patientData } from './patientsDataFile.js'

export  const submitPatientsService = (firstName, lastName, age, address, city, zipcode, state, country) => {
  let patientObj = {
      id: Date.now(),
     firstName: firstName,
     lastName:lastName,
     age:age,
     address:address,
     city:city,
     zipcode:zipcode,
     state:state,
     country:country
  }

  patientData.push(patientObj);
}