import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data) => {
    // Simulate API call
    console.log("Registration Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  // Base styling rules for crisp inputs
  const inputBaseStyles =
    "w-full px-3.5 py-2 border rounded-lg text-sm transition-all outline-none bg-slate-50/50 focus:bg-white";
  const inputNormalStyles =
    "border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500";
  const inputErrorStyles =
    "border-red-400 focus:ring-4 focus:ring-red-500/10 focus:border-red-500";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans text-slate-900 selection:bg-indigo-100">
      <div className="w-full max-w-6xl grid md:grid-cols-12 bg-white md:rounded-2xl md:shadow-xl md:border md:border-slate-100 overflow-hidden min-h-[90vh] md:min-h-[680px] md:m-4">
        {/* Left Column: Branding/Hero (Visible on md and up) */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 p-12 flex-col justify-between relative overflow-hidden">
          {/* Subtle abstract background graphic */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
              <div className="h-6 w-6 rounded-lg bg-indigo-500 flex items-center justify-center text-sm">
                Δ
              </div>
              <span>DataIntel</span>
            </div>
          </div>

          <div className="relative z-10 mb-8">
            <h1 className="text-3xl font-semibold text-white tracking-tight leading-tight mb-4">
              Experience the future of collaborative data intelligence.
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Join thousands of teams scaling their analytics, automating
              workflows, and securing data insights in real-time.
            </p>
          </div>

          <div className="relative z-10 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} DataIntel Inc. All rights
            reserved.
          </div>
        </div>

        {/* Right Column: Register Form */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center p-6 sm:p-12 lg:p-16 bg-white">
          <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8">
              {/* Mobile Only Logo */}
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg tracking-tight mb-6 md:hidden">
                <div className="h-5 w-5 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs">
                  Δ
                </div>
                <span>DataIntel</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Create your account
              </h2>
              <p className="text-sm text-slate-500 md:hidden">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* Social Auth Sign Up */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.977 0-.74-.08-1.302-.176-1.718H12.24z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <svg
                  className="h-5 w-5 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span>SSO</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400 font-medium tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  className={`${inputBaseStyles} ${errors.fullName ? inputErrorStyles : inputNormalStyles}`}
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`${inputBaseStyles} ${errors.email ? inputErrorStyles : inputNormalStyles}`}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
                  >
                    Password
                  </label>
                  <span className="text-[11px] font-medium text-slate-400">
                    Strong password
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    aria-invalid={errors.password ? "true" : "false"}
                    className={`${inputBaseStyles} pr-10 ${errors.password ? inputErrorStyles : inputNormalStyles}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 select-none transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Terms and Privacy Policy */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer group selection:bg-transparent">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 transition-colors cursor-pointer"
                    {...register("agreeTerms", {
                      required: "You must agree to the terms",
                    })}
                  />
                  <span className="text-xs text-slate-500 leading-normal group-hover:text-slate-600 transition-colors">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.agreeTerms.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-indigo-600 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-150 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/10"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>

            {/* Login Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors p-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
