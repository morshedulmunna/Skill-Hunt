"use client";

import React, { useState } from "react";
import BoxWrapper from "@/components/shared/BoxWrapper";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import SelectionOptionDropdown from "@/components/shared/SelectionOptionDropdown";

type Props = {};

export default function SignupPage({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
    accountType?: string;
  }>({});

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
  // Real-time validation for confirm password
  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) return "Confirm password is required.";
    if (confirmPassword !== password) return "Passwords do not match.";
    return "";
  };
  // Real-time validation for name
  const validateName = (name: string) => {
    if (!name) return "Name is required.";
    return "";
  };
  // Real-time validation for account type
  const validateAccountType = (accountType: string) => {
    if (!accountType) return "Account type is required.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const nameError = validateName(name);
    const accountTypeError = validateAccountType(accountType);

    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      nameError ||
      accountTypeError
    ) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        name: nameError,
        accountType: accountTypeError,
      });
      return;
    } else {
      setErrors({});
      // Submit form or make API call
      console.log("Form submitted with:", {
        email,
        password,
        name,
        confirmPassword,
        accountType,
      });
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <BoxWrapper className="dark:bg-gray-800/20 w-full rounded max-w-[450px] mx-auto">
        <div className="p-4 ">
          <div className="flex mb-4 justify-between items-center">
            <h2 className="text-start mb-2 text-xl font-semibold">
              Register your Account!{" "}
            </h2>
            <div>
              <SelectionOptionDropdown
                onSelect={(option) => {
                  setAccountType(option.value as string),
                    setErrors((prev) => ({
                      ...prev,
                      accountType: validateAccountType(option.value as string),
                    }));
                }}
                defaultValue="Account type"
                options={[
                  {
                    label: "Employee",
                    value: "employee",
                  },
                  {
                    label: "Requiter",
                    value: "requiter",
                  },
                ]}
              />
              <p className="text-xs mt-1 text-red-500">{errors.accountType}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name Input Filed */}
            <InputField
              label="Full Name"
              type="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  name: validateName(e.target.value),
                }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  name: validateName(e.target.value),
                }))
              }
              error={errors.name}
              placeholder="Enter Name"
            />
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

            {/* Password Input Filed */}
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
            {/* confirm Password Input Filed */}
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: validatePassword(e.target.value),
                }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: validatePassword(e.target.value),
                }))
              }
              error={errors.confirmPassword}
              placeholder="Enter your password"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={!!errors.email || !!errors.password}
            >
              Register an account
            </button>
          </form>

          <div className="flex gap-2 mt-2 flex-wrap">
            <p className="text-start mb-4 text-gray-500 text-sm">
              Already have an account
            </p>
            <Link
              className="underline text-xs pt-1 dark:text-primary-lightest text-primary-dark  hover:text-primary-light"
              href="/signin"
            >
              Sign in!
            </Link>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}
