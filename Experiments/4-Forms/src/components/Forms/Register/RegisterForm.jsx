import styles from "./registerForm.module.scss";

import { useForm } from "react-hook-form";

import { supabase } from "../../../lib/supabase";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // const onSubmit = (data) => {
  //   console.log("User data:", data);
  // };
  // const onSubmit = async (data) => {
  //   const { username, email, password } = data;

  //   const { data: authData, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     console.error("Registration error:", error);
  //     return;
  //   }

  //   console.log("User created:", authData.user);
  // };

  const onSubmit = async (data) => {
    const { username, email, password } = data;

    // 1. Criar usuário no Supabase Auth
    const { data: authData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Registration error:", error);
      return;
    }

    // 2. Criar profile
    const { error: profileError } = await supabase.from("profiles").insert({
      id: authData.user.id,
      username,
    });

    if (profileError) {
      console.error("Profile creation error:", profileError);
      return;
    }

    console.log("Registration successful!");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Crete Account</h1>

      {/*User Name */}
      <div>
        <label htmlFor="username">Name</label>

        <input
          id="username"
          type="text"
          {...register("username", {
            required: "Username is required",
          })}
        />

        {errors.username && <p>{errors.username.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>

        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
