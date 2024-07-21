# Guide to learn react useForm hook

## What is useForm hook
If you're diving into the world of React and looking to manage forms efficiently, useForm from React Hook Form is here to make complex validation super simple. For simple forms, things are generally manageable. But as your form gets more complex and you need to add various validations, it becomes a complicated task.

So instead of manually writing all of the code and handling complex forms with validation logic, we can use the most popular React library for this, react-hook-form.

## Advantages of useForm hook (why to use this hook)
Here are some of the reasons which makes it a differentiator
 - The number of re-renders in the application is smaller compared to the alternatives because it uses refs instead of state variable.
 - The amount of code you have to write is less as compared to other form management libraries.
 - Mounting time is much less as compare to other form management hooks.
 - It integrates well with many libraries.

 ## Get Started 

 ### How to install useForm hook
  To install the useForm hook , run the below npm command in terminal
  - npm install react-hook-form

 ### Importing the hook
  Write the import statement in the component file where you want to use it
  - import { useForm } from "react-hook-form"
  
 ### Setting or using the hook
  Write the following command 
  - const {register, handleSubmit} = useForm()
   ( register method is used to bind the input field values , handleSubmit method is used to get the data and deals with what operation is performed when form is submitted )

### Form Validation
To make sure your form inputs are filled out correctly, you can set rules using the register() function. For example, you can make an email field that checks if the input is actually an email:
const { register } = useForm();

<input 
  {...register("email", {
    required: true,
    pattern: /^\\S+@\\S+$/ 
  })}
/>
 
### Displaying validation errors 
You can see if there are any mistakes with your inputs by looking at the errors object from useForm:
const { formState{errors} } = useForm();

<input
  {...register("email", {required: true})} 
/>

{errors.email && <p>Email required</p>}
If there's a problem, like the email field is empty, it'll show a message saying "Email required".
 
### Custom Validation
- For rules that are specific to your form, use the validate option:
{...register("username", {
  validate: value => 
    value.length > 5 || "Must be longer than 5 chars"
})}

This example checks that the username is more than 5 characters long. The validate function returns a message if there's an issue or nothing if it's all good.
