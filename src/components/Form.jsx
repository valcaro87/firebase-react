import { useForm } from "react-hook-form"

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      {errors.email && <span> This field is required </span>}

      <br />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "This field is required",
          minLength: { value: 8, message: "atleast 8 characters" },
        })}
      />
      {errors.password && <span> {errors.password.message} </span>}

      <br />
      <br />
      <input type="submit" />
    </form>
  )
}
