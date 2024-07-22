// src/useCustomForm.js
import { useState } from 'react';

const useCustomForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName:'',
    email: '',
    mobileNumber:'',
    password: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName:'',
    email: '',
    mobileNumber:'',
    password: '',
  });


  const validate = (name, value) => {
    let error = '';
    if(name==='firstname'){
      if (value.trim() === '') {
        error = `First name is required`;
      } 
    }
    
    else if (name === 'email') {
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
       
          if (!emailPattern.test(value)) {
          error = 'Enter valid mail';
        }
      }
      else if (name === 'password') {
        const passwordPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
       
        if(!passwordPattern.test(value)){
          error='Enter valid password'
        }
      }
      else if(name==='mobileNumber'){
       if(value.length<10) {
        error='Enter a 10 digit number'
       }
      }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues, [name]: [value] };
    const newErrors = { ...errors, [name]: validate(name, value) };
    setFormValues(newFormValues);
    setErrors(newErrors);
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formValues).forEach((key) => {
      validationErrors[key] = validate(key, formValues[key]);
    });
   
    setErrors(validationErrors);
    let noError=true;
    Object.keys(errors).every((error)=>{
        if(errors[error]!=="") {
           noError=false;
           return false;
        }
    })
    console.log(validationErrors)

    if(noError==true) {
       onSubmit(formValues);
    }

    // if (Object.values(validationErrors).every((error) => !error)) {
    //   callback(formValues);
    // }
  };

  return {
    formValues,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useCustomForm;

