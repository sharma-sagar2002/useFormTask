// src/SimpleForm.js
import React from 'react';
import useCustomForm from '../hooks/useCustomForm';

const SimpleForm = () => {
  const { formValues, errors, handleChange, handleSubmit } = useCustomForm();

  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <div  className='p-10'>
      <h1 className=" text-center font-bold  text-3xl">Form</h1>
      <form className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6" >
      
        
        <input  className='w-full p-2 m-2 rounded-lg border-gray-700'
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />
         {errors.name && 
            <span className="mx-2 text-red-500">Enter valid name</span>
         }

         <input  className='w-full p-2 m-2 rounded-lg border-gray-700'
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
      
        
        <input  className='w-full p-2 m-2 rounded-lg border-gray-700'
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder='Email'
        />
        {errors.email && 
                 <span className="mx-2 text-red-500">Enter valid email</span>
        }
       
       <input  className='w-full p-2 m-2 rounded-lg border-gray-700'
          name="mobileNumber"
          value={formValues.mobileNumber}
          onChange={handleChange}
          placeholder='Mobile Number'
        />
        {errors.mobileNumber && 
                 <span className="mx-2 text-red-500">Enter 10 digit mobile number</span>
        }
        
        <input className='w-full p-2 m-2 rounded-lg border-gray-700'
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder='Password'
        />
        {errors.password && 
            <span className="mx-2 text-red-500">Enter valid password</span>
        }
    
    <button  className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700 "  onClick={handleSubmit(onSubmit) }>Submit</button>
    </form>
    </div>
  );
};

export default SimpleForm;


