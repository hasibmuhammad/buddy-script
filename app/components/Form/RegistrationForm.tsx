"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, repeatPassword, agreeToTerms });
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
      <p className="text-primary7 text-sm mb-2">Get Started Now</p>
      <h4 className="text-2xl lg:text-3xl font-semibold text-primary mb-12">
        Registration
      </h4>

      {/* Google Sign-up Button */}
      <button
        type="button"
        className="w-full bg-white border border-border2 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-10"
      >
        <Image src="/images/google.svg" alt="Google" width={20} height={20} />
        <span className="text-primary font-medium">Register with google</span>
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

      {/* Registration Form */}
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

        {/* Repeat Password Input */}
        <div className="mb-3.5">
          <label className="block text-sm font-medium text-primary mb-2">
            Repeat Password
          </label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary5 focus:border-transparent transition-all"
            placeholder="Repeat your password"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="mb-10">
          <div className="flex items-center">
            <input
              type="radio"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-4 h-4 text-primary5 border-border2 rounded"
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-2 text-sm text-primary7 cursor-pointer"
            >
              I agree to terms & conditions
            </label>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-primary5 text-white font-medium py-3.5 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg mb-16"
        >
          Register now
        </button>
      </form>

      {/* Login Link */}
      <div className="text-center">
        <p className="text-sm text-primary7">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary5 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
