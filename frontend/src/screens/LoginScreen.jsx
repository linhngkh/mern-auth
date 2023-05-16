import { useForm } from "react-hook-form";

const LoginScreen = () => {
  const {
    handleSubmit,
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
      <h1 className="text-3xl mb-3">Sign In</h1>
      <form onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={inputStyles}
        />
        {errors.email && (
          <p className="text-primary-500 mt-1">
            {errors.email.type === "required" && "This field is required"}
            {errors.email.type === "pattern" && "Invalid email address"}
          </p>
        )}
        <input
          type="text"
          name="password"
          placeholder="Password"
          className={inputStyles}
        />
        {errors.password && (
          <p className="text-primary-500 mt-1">
            {errors.password.type === "required" && "This field is required"}
            {errors.password.type === "pattern" && "Invalid password address"}
          </p>
        )}
        <input
          type="submit"
          className="rounded-lg bg-slate-700 px-5 py-2 text-white"
        />
      </form>
    </section>
  );
};

export default LoginScreen;
