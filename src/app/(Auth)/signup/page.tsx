"use client";

import React from "react";
import BoxWrapper from "@/components/shared/BoxWrapper";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import SelectionOptionDropdown from "@/components/shared/SelectionOptionDropdown";
import useSignup from "@/hooks/useSignup";

export default function SignupPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    accountType,
    setAccountType,
    loading,
    errors,
    handleSubmit,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateName,
    validateAccountType,
  } = useSignup();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <BoxWrapper className="dark:bg-gray-800/20 w-full rounded max-w-[450px] mx-auto">
        <div className="p-4">
          <div className="flex mb-4 justify-between items-center">
            <h2 className="text-start mb-2 text-xl font-semibold">
              Register your Account!
            </h2>
            <div>
              <SelectionOptionDropdown
                onSelect={(option: any) => {
                  setAccountType(option.value);
                  validateAccountType(option.value);
                }}
                defaultValue="Account type"
                options={[
                  { label: "Employee", value: "employee" },
                  { label: "Recruiter", value: "recruiter" },
                ]}
              />
              <p className="text-xs mt-1 text-red-500">{errors.accountType}</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputField
              label="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => validateName(e.target.value)}
              error={errors.name}
              placeholder="Enter Name"
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateEmail(e.target.value)}
              error={errors.email}
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => validatePassword(e.target.value)}
              error={errors.password}
              placeholder="Enter your password"
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={(e) => validateConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              placeholder="Confirm your password"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={loading}
            >
              Register an account
            </button>
          </form>

          <div className="flex gap-2 mt-2 flex-wrap">
            <p className="text-start mb-4 text-gray-500 text-sm">
              Already have an account
            </p>
            <Link
              className="underline text-xs pt-1 dark:text-primary-lightest text-primary-dark hover:text-primary-light"
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
