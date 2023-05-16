import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Button from "../components/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const {
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const inputStyles = `w-full mb-5 rounded-lg bg-slate-300 px-5 py-3 `;

  return (
    <section className="mx-auto flex w-full flex-col items-center pb-32 pt-24 text-center ">
      <div className="w-1/3">
        <h1 className="m-5 text-4xl">Log In</h1>
        <form onSubmit={onSubmit} method="POST" target="_blank">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className={inputStyles}
            {...("email",
            {
              required: true,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.type === "required" && "This field is required"}
            </p>
          )}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className={inputStyles}
            {...("password", { required: true, maxLength: 15 })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.type === "required" && "This field is required"}
              {errors.password.type === "maxLength" &&
                "Invalid password address"}
            </p>
          )}
          <input type="submit" className={`${Button} w-full`} />
        </form>
        {/* loading */}
        {isLoading && <Loader isLoading={isLoading} />}
      </div>
      {/* <button>*/}
      <div className="mt-3">
        <Link to="/register">
          New Customer? <span className="underline">Register</span>{" "}
        </Link>
      </div>
    </section>
  );
};

export default LoginScreen;
