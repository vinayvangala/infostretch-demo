import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { patientData } from '../utils/patientsDataFile';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const columns = [
   { field: 'id', headerName: 'ID', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age',headerName: 'Age', type: 'number', width: 90},
  { field: 'zipcode', headerName: 'Zipcode', width:130},
  {field: 'state', headerName: 'State', width: 130},
  {field: 'city', headerName:'City', width: 130},
  {field: 'country', headerName:'Country', width: 130},
  {field: 'address', headerName: 'Address', width: 130}
];

const rows = patientData;

console.log(patientData);
 const  ViewPatientsData = () => {
  return (
      <div> 
          <h1 style={{marginTop:'2%',textAlign:'center'}}>Patients Data</h1>
         {rows.length ?
          <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
          </div> :
         <div>
             <h1 style={{marginTop:'5%',textAlign:'center'}}>No Records Found</h1>
         </div>  }
         <Button style= {{ marginTop:'2%', marginRight:'30%', marginLeft:'20%'}} variant = "contained" color="Primary">
            <Link style={{color:'white'}}  to="/patientform">Fill Patient Form</Link>
            </Button>
            <Button  style= {{ marginTop:'2%', marginRight:'10%'}}  variant = "contained" color="Primary">
            <Link style={{color:'white'}}  to="/">Go Back to Home Page</Link>
            </Button>
        </div>
  );
}

export default ViewPatientsData;

