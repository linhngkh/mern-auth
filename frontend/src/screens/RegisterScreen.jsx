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
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyles = `w-full mb-5 rounded-lg bg-slate-300 px-5 py-3 text-black`;

  return (
    <section className="mx-auto flex w-full flex-col items-center pb-32 pt-24 text-center ">
      <div className=" w-1/3">
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
            <p className=" text-sm text-red-500">
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
              className={`${inputStyles} ${
                errors.password &&
                "border-red-500 focus:border-red-500 focus:ring-red-500"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 15,
                  message: "Minimum required length is 8",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum required length is 8",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
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
              className={`${inputStyles} ${
                errors.confirmPassword &&
                "border-red-500 focus:border-red-500 focus:ring-red-500"
              }`}
              {...register("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum required length is 8",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum required length is 15",
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
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
            className="rounded-lg bg-slate-700 px-5 py-2 font-bold text-white"
          />
        </form>
        {/* <button>*/}
        <div className="mt-3">
          <Link to="/register">
            New Customer? <span className="underline">Register</span>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
