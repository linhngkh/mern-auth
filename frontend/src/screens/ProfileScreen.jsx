import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setCredentials } from "../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

import Button from "../components/Button";
import Loader from "../components/Loader";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await updateUser({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));

        toast.success("Profile updated");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  const inputStyles = `w-full mb-5 rounded-lg bg-slate-300 px-5 py-3 text-black`;

  return (
    <section className="mx-auto flex w-full flex-col items-center pb-10 pt-10 text-center ">
      <div className=" w-1/3">
        <h1 className="m-2 text-4xl">Update Profile</h1>
        <form onSubmit={onSubmit}>
          <label className="flex justify-start">Name</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className={inputStyles}
          />
          <label className="flex justify-start">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className={inputStyles}
          />
          <label className="flex justify-start">Password</label>
          {/* password */}
          <div className="relative">
            {" "}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className={inputStyles}
            />
          </div>
          <label className="flex justify-start">Confirm Password</label>
          {/* confirm password */}
          <div className="relative">
            {" "}
            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className={inputStyles}
            />
          </div>
          {/* loading */}
          {isLoading && <Loader />}
          {/* <button>*/}
          <div className="mt-3">
            <button className={`${Button} hover:bg-slate-500`}>Update</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileScreen;
