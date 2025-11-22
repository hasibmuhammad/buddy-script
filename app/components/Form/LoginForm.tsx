"use client";

import Link from "next/link";
import { useState } from "react";
import AuthFormFooter from "../Auth/AuthFormFooter";
import AuthFormHeader from "../Auth/AuthFormHeader";
import FormDivider from "../Auth/FormDivider";
import GoogleAuthButton from "../Auth/GoogleAuthButton";
import PrimaryButton from "../Auth/PrimaryButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login API call
    console.log("Google login initiated");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-[480px] mx-auto lg:mx-0">
      <AuthFormHeader subtitle="Welcome back" title="Login to your account" />

      <GoogleAuthButton
        text="Or sign-in with google"
        onGoogleAuth={handleGoogleLogin}
      />

      <FormDivider />

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-3.5">
          <label className="block text-sm font-medium text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary5 focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3.5">
          <label className="block text-sm font-medium text-primary mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary5 focus:border-transparent transition-all"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div className="flex items-center">
            <input
              type="radio"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-primary5 border-border2 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-sm text-primary7 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-primary5 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <PrimaryButton text="Login now" type="submit" />
      </form>

      <AuthFormFooter
        text="Don't have an account?"
        linkText="Create New Account"
        linkHref="/registration"
      />
    </div>
  );
};

export default LoginForm;
