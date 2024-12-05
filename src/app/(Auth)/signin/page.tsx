"use client";

import React from "react";
import BoxWrapper from "@/components/shared/BoxWrapper";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import useSignInForm from "@/hooks/useSignInForm";

export default function SignInPage() {
  const {
    email,
    password,
    errors,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
    handleSubmit,
  } = useSignInForm();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <BoxWrapper className="dark:bg-gray-800/20 w-full rounded max-w-[450px] mx-auto">
        <div className="p-4">
          <h2 className="text-start mb-2 text-xl font-semibold">Sign in</h2>
          <div className="flex gap-2 flex-wrap">
            <p className="text-start mb-4 text-gray-500 text-sm">
              Don’t have an account?
            </p>
            <Link
              className="hover:underline text-xs pt-1 dark:text-primary-lightest text-primary-dark hover:text-primary-light"
              href="/signup"
            >
              Create an account!
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="Enter your email"
            />

            {/* Password Input Field */}
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              error={errors.password}
              placeholder="Enter your password"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={loading || !!errors.email || !!errors.password}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </BoxWrapper>
    </div>
  );
}
