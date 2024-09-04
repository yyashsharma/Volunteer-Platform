import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signimg from '../assets/sign3.png'
import OAuth from "../components/OAuth";

const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return toast.error("Please fill out all fields");
    }

    try {
      setLoading(true);
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return toast.error(data.message);
      }
      toast.success(data.message);
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8">
      {/* left */}
      <div className="flex-1 ">
      <Link to={"/"} className="text-4xl font-bold dark:text-white">
          <span className="px-3 bg-gradient-to-r from-teal-200  to-lime-200 rounded-l-full text-slate-900">
            Volunto
          </span>
       
        </Link>
        <img src={signimg} alt="" />
      </div>
      {/* right */}
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label value="Your username" />
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="name@company.com"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="******"
              id="password"
              onChange={handleChange}
            />
          </div>
          <Button
            gradientDuoTone="tealToLime"
            type="submit"
            disabled={loading}
            className="border-2 border-transparent hover:border-teal-500 box-border"
          >
            {loading ? <Spinner size="sm" /> : "Sign Up"}
          </Button>
          <OAuth />
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to={"/sign-in"} className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp
