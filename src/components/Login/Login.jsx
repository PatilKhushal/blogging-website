import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="border flex flex-col border-purple-500 w-1/2 m-auto h-full">
      <h1 className="text-3xl text-center border">Login Page</h1>
      <form action="" className="flex flex-col" method="post" onSubmit={handleSubmit()}>
        <input className="border border-black" type="email" {...register('email', {required : "Email is required"})} />
        {
            errors.email && errors.email.message
        }
        <input className="border border-black" type="password" {...register('password', {required : "Password is required", minLength : 8})} />
        {
            errors.password && errors.password.message
        }
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
