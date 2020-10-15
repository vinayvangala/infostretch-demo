import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h1 style= {{textAlign:'center'}}>Welcome to InfoStretch-Demo</h1>
            <Button style= {{marginRight:'30%', marginLeft:'20%'}} variant = "contained" color="primary">
            <Link style={{color:'white'}}  to="/patientform">Fill Patient Form</Link>
            </Button>
            <Button  style= {{marginRight:'20%'}}  variant = "contained" color="primary">
            <Link style={{color:'white'}}  to="/viewpatients">View Patients Data</Link>
            </Button>
        </div>
    )
}

export default Home;
