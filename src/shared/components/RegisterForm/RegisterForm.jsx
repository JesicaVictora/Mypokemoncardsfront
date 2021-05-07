import React, {useState} from "react";
import { API_USER } from '../../consts/api.const.user';

import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import './RegisterForm.css';

export function RegisterForm(){

const [showPassword, setShowPassword] = useState(false);

const [showPassword2, setShowPassword2] = useState(false);

const [formValues, setFormValues] = useState({
        'email': '',
        'password': '',
 });  
 const [checkpass, setcheckpass] = useState(false);
 const [checkmail, setcheckmail] = useState(false);
 const [checkfield, setcheckfield] = useState(false);


const handleClickShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
 
}
const handleClickShowPassword2 = () => {
    showPassword ? setShowPassword2(false) : setShowPassword2(true);
 
} 

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
}    

const FormSubmit = (event)=>{
    event.preventDefault();
    console.log(formValues);
            
    if(formValues.password == formValues.password2){
        setcheckpass(false);
        setcheckmail(false);
        setcheckfield(false);
        
        API_USER.post('register', formValues).then((res)=>{
            if(res.data.saved){
                window.location.href = "/";
            }else if (res.data.error==true){
                setcheckmail(true);
            }else if (res.data.error){
                setcheckfield(true);  
            }

            });

      }else{

        setcheckpass(true);
        setcheckmail(false);
        setcheckfield(false);
      }


 }
   
 
    return(
    <div className="form_container">
    
        <form onSubmit={FormSubmit}>
                <FormControl className="form_element" >
                    <InputLabel htmlFor="UserName">User name</InputLabel>
                    <Input
                        id={"username"}
                        name={"username"}
                        onChange={handleChange}>
                    </Input>
                </FormControl>

              

                <FormControl className="form_element" >
                    <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                    <Input
                        id={"email"}
                        name={"email"}
                        onChange={handleChange}>
                    </Input>
                </FormControl>


                <FormControl className="form_element" >
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                        id={"password"}
                        name={"password"}
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}>
                                </IconButton>
                            </InputAdornment>
                        }
                    />


                </FormControl>
                <FormControl className="form_element" >
                    <InputLabel htmlFor="password">Repita Contraseña</InputLabel>
                    <Input
                        id={"password2"}
                        name={"password2"}
                        onChange={handleChange}
                        type={showPassword2 ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword2}>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

       
            
            <button type="submit">Registrarse</button>
         
            </form>

    </div>
    )


}