import { useForm } from "react-hook-form";

const Form =()=>{
   const {register, handleSubmit,formState:{errors}} =useForm();
     const onSubmit = (data)=>{
        console.log(data);
     }
    return (
        <div className="  p-10">
            <h1 className=" text-center font-bold  text-3xl">Form</h1>
            <form className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6"  >
                <input className="w-full p-2 m-2 rounded-lg border-gray-700" {...register("firstName",{required:true,maxLength:10})}  placeholder="First Name"/>
                {errors.firstName && 
                   <span className="mx-2 text-red-500">
                   {
                     errors.firstName.type=='required'? "First Name is required " : "Enter valid name"
                   }
                   </span>
                 }


                <input className="w-full  p-2 m-2  rounded-md border-gray-700" {...register("lastName", {maxLength:6})}  placeholder="Last Name"/>
               

                <input className="w-full p-2 m-2  rounded-md border-gray-700" {...register("mobileNumber", {maxLength:10} )}  placeholder="Mobile Number"/>
                

                <input className="w-full p-2 m-2  rounded-md border-gray-700" {...register("email", {required:true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  placeholder="Email"/>
                 {errors.email && 
                   <span className="mx-2 text-red-500">
                   {
                     errors.email.type=='required'? "Email is required " : "Enter valid mail"
                   }
                   </span>
                 }


                <input className="w-full p-2 m-2 rounded-md border-gray-700" {...register("password", {required:true, pattern:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/})}  placeholder="Password"/>
                {errors.password && 
                   <span className="mx-2 text-red-500">
                   {
                     errors.password.type=='required'? "Password is required " : "Enter valid password"
                   }
                   </span>
                 }


                <button  className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700 " onClick={handleSubmit(onSubmit)}>Submit</button>
                
            </form>
        </div>
    )
}

export default Form;