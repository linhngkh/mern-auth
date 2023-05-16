import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const {
    trigger,

    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyles = `w-full mb-5 rounded-lg bg-slate-300 px-5 py-3 `;

  return (
    <section className="mx-auto flex w-1/4 flex-col items-center pb-32 pt-24 text-center ">
      <h1 className="mb-3 text-3xl">Log In</h1>
      <form onSubmit={onSubmit} method="POST" target="_blank">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className={inputStyles}
          {...("email",
          {
            required: true,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-slate-500">
            {errors.email.type === "required" && "This field is required"}
          </p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className={inputStyles}
          {...("password", { required: true, maxLength: 15 })}
        />
        {errors.password && (
          <p className="mt-1 text-slate-500">
            {errors.password.type === "required" && "This field is required"}
            {errors.password.type === "maxLength" && "Invalid password address"}
          </p>
        )}
        <input
          type="submit"
          className="rounded-lg bg-slate-700 px-5 py-2 text-white"
        />
      </form>
      <Link className="mt-3" to="/register">
        New Customer? <span className="underline">Register</span>{" "}
      </Link>
    </section>
  );
};

export default LoginScreen;
