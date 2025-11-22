"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-[480px] mx-auto lg:mx-0">
      {/* Logo */}
      <div className="mb-7">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      {/* Welcome Text */}
      <p className="text-primary7 text-sm mb-2">Welcome back</p>
      <h4 className="text-2xl lg:text-3xl font-semibold text-primary mb-12">
        Login to your account
      </h4>

      {/* Google Sign-in Button */}
      <button
        type="button"
        className="w-full bg-white border border-border2 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-10"
      >
        <Image src="/images/google.svg" alt="Google" width={20} height={20} />
        <span className="text-primary font-medium">Or sign-in with google</span>
      </button>

      {/* Divider */}
      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border2"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-primary7 text-sm">Or</span>
        </div>
      </div>

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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-primary5 text-white font-medium py-3.5 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg mb-16"
        >
          Login now
        </button>
      </form>

      {/* Create Account Link */}
      <div className="text-center">
        <p className="text-sm text-primary7">
          Don&apos;t have an account?{" "}
          <Link
            href="/registration"
            className="text-primary5 font-medium hover:underline"
          >
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
