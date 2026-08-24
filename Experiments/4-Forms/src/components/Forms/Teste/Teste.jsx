import { useForm } from "react-hook-form"; //

export default function Teste() {
  // Extract utility functions from the hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      {/* Register the field name and its validation rules */}
      <input {...register("username", { required: "Username is required" })} />
      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
