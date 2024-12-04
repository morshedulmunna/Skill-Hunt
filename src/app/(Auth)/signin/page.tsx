"use client";

import React, { useState } from "react";
import BoxWrapper from "@/components/shared/BoxWrapper";
import InputField from "@/components/ui/InputField";
import Link from "next/link";

type Props = {};

export default function SignInPage({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // Real-time validation for email
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    return "";
  };

  // Real-time validation for password
  const validatePassword = (password: string) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({});
      // Submit form or make API call
      console.log("Form submitted with:", { email, password });
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <BoxWrapper className="dark:bg-gray-800/20 w-full rounded max-w-[450px] mx-auto">
        <div className="p-4 ">
          <h2 className="text-start mb-2 text-xl font-semibold">Sign in</h2>
          <div className="flex gap-2 flex-wrap">
            <p className="text-start mb-4 text-gray-500 text-sm">
              Don’t have account
            </p>
            <Link
              className="hover:underline text-xs pt-1 dark:text-primary-lightest text-primary-dark  hover:text-primary-light"
              href="/signup"
            >
              Create an account!
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email Input Filed */}
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  email: validateEmail(e.target.value),
                }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  email: validateEmail(e.target.value),
                }))
              }
              error={errors.email}
              placeholder="Enter your email"
            />

            {/* Email Input Filed */}

            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  password: validatePassword(e.target.value),
                }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  password: validatePassword(e.target.value),
                }))
              }
              error={errors.password}
              placeholder="Enter your password"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={!!errors.email || !!errors.password}
            >
              Sign In
            </button>
          </form>
        </div>
      </BoxWrapper>
    </div>
  );
}
