"use client";

import { useState } from "react";
import AuthFormFooter from "../Auth/AuthFormFooter";
import AuthFormHeader from "../Auth/AuthFormHeader";
import FormDivider from "../Auth/FormDivider";
import GoogleAuthButton from "../Auth/GoogleAuthButton";
import PrimaryButton from "../Auth/PrimaryButton";

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

  const handleGoogleRegister = () => {
    // Handle Google registration API call
    console.log("Google registration initiated");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-[480px] mx-auto lg:mx-0">
      <AuthFormHeader subtitle="Get Started Now" title="Registration" />

      <GoogleAuthButton
        text="Register with google"
        onGoogleAuth={handleGoogleRegister}
      />

      <FormDivider />

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

        <PrimaryButton text="Register now" type="submit" />
      </form>

      <AuthFormFooter
        text="Already have an account?"
        linkText="Login"
        linkHref="/login"
      />
    </div>
  );
};

export default RegistrationForm;
