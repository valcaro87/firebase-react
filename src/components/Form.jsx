import { useForm } from "react-hook-form"

export const Form = ({ handlesubmission, headerButton, currentErrors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const signUpValidation = {
    required: "This field is required",
    minLength: { value: 8, message: "At-least 8 characters" },
  }

  const loginValidation = {
    required: "This field is required",
  }

  return (
    <>
      <h1>{headerButton}</h1>
      <form onSubmit={handleSubmit(handlesubmission)}>
        <div>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && <span> This field is required </span>}
        </div>

        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register(
                "password",
                headerButton === "Login" ? loginValidation : signUpValidation
              )}
            />
          </label>
          {errors.password && <span> {errors.password.message} </span>}
        </div>

        <div>{currentErrors}</div>

        <button type="submit">{headerButton}</button>
      </form>
    </>
  )
}
