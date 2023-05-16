import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const RegisterScreen = () => {
  const [passwordEyes, setPasswordEyes] = useState(false);

  const handlePasswordShow = () => {
    setPasswordEyes(!passwordEyes);
  };

  const [confirmPasswordEyes, setConfirmPasswordEyes] = useState(false);

  const handlePasswordConfirm = () => {
    setConfirmPasswordEyes(!confirmPasswordEyes);
  };

  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyles = `w-full mb-5 rounded-lg bg-slate-300 px-5 py-3 text-black`;

  return (
    <section className=" mx-auto flex flex-col items-center text-center">
      <h1 className="mb-3 text-3xl">Sign Up</h1>
      <form onSubmit={onSubmit} method="POST" target="_blank" className="">
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
        {/* password */}
        <div className="relative">
          {" "}
          <input
            type={passwordEyes === false ? "password" : "text"}
            name="password"
            placeholder="Enter Password"
            className={inputStyles}
            {...register("password", { required: true, maxLength: 15 })}
          />
          {errors.password && (
            <p className="mt-1 text-slate-500">
              {errors.password.type === "required" && "This field is required"}
              {errors.password.type === "maxLength" &&
                "Invalid password address"}
            </p>
          )}
          {/* eye section */}
          <div className="absolute right-5 top-4">
            {passwordEyes === false ? (
              <EyeOff onClick={handlePasswordShow} />
            ) : (
              <Eye onClick={handlePasswordShow} />
            )}
          </div>
        </div>

        {/* confirm password */}
        <div className="relative">
          {" "}
          <input
            type={confirmPasswordEyes === false ? "password" : "text"}
            name="password"
            placeholder="Confirm Password"
            className={inputStyles}
            {...register("password", { required: true, maxLength: 15 })}
          />
          {errors.password && (
            <p className="mt-1 text-slate-500">
              {errors.password.type === "required" && "This field is required"}
              {errors.password.type === "maxLength" &&
                "Invalid password address"}
            </p>
          )}
          {/* eye section */}
          <div className="absolute right-5 top-4">
            {confirmPasswordEyes === false ? (
              <EyeOff onClick={handlePasswordConfirm} />
            ) : (
              <Eye onClick={handlePasswordConfirm} />
            )}
          </div>
        </div>

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

export default RegisterScreen;
