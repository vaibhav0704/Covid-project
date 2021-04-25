import React, {useState} from 'react';
import './SignupPage.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import useGeolocation from './useGeolocation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from "react-router-dom";

const SignupPage = () => {

    const [fullName, setFullName] = useState();
    const [userName, setUserName] = useState();
    const [category, setCategory] = useState("");

    
    const location = useGeolocation()

    const handleChange = (event) => {
        if(event.target.checked){
            setCategory("Volunteer");
        }else{
            setCategory("NonVolunteer");
        }
        
    }
    

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();

        const creds ={
            fullName: fullName,
            usesrName: userName,
            category: category,
            lat: location.coordinates.lat,
            lng: location.coordinates.lng
        }
        
        axios.post('http://localhost:8001/api/signup', creds).then((response) =>{
            console.log(response);
        }).catch((err) =>{
            console.log(err);
        })
        
        
        
    }

    

    return (
        <div className="signUpPage">
            <div>
                <img />
                <h1>Sign Up</h1>
            </div>

            <div className="middleSection">                
                <div>
                    <form onSubmit={handleSubmit}>                     
                                                
                    
                        <div>
                            <TextField 
                                id="outlined-basic" 
                                required="true" 
                                label="Name" 
                                variant="outlined"
                                value={fullName} 
                                onChange={(e) => setFullName(e.target.value)} 
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Username" 
                                variant="outlined"
                                value={userName} 
                                onChange={(e) => setUserName(e.target.value)} 
                            />
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={category} onChange={handleChange} name="Volunteer" />}
                                    label="Sign Up As Volunteer"
                                />                    
                            </FormGroup>
                        </div>
                        <div>
                        
                            <Link to={"/"}>
                                <Button type="submit" variant="outlined" color="primary">
                                    Sign Up
                                </Button>
                            </Link>
                            
                        </div>
                    </form>                
                </div>                  
            </div>
        </div>
    )
}

export default SignupPage
