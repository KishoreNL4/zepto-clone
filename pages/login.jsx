import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // Step 1: Phone number, Step 2: OTP
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(Array(6).fill("")); // Store OTP as an array of 6 digits
  const otpRefs = useRef([]); // Ref to hold references for OTP input fields

  // Handle phone number submission
  const handlePhoneSubmit = () => {
    if (phoneNumber.length === 10) {
      setStep(2); // Move to OTP input
    } else {
      toast.error("Please enter a valid 10-digit phone number.");
    }
  };

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    if (/^\d?$/.test(value)) {
      // Only allow single digits
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  // Handle OTP submission
  const handleOTPSubmit = () => {
    if (otp.join("").length === 6) {
      setStep(1); // Reset after success (can redirect to dashboard if needed)
      setPhoneNumber("");
      setOtp(Array(6).fill(""));
      router.push("/");
      toast.success("Login Successful!");
    } else {
      toast.error("Please enter a valid 6-digit OTP.");
    }
  };

  // Handle "Resend OTP" click
  const handleResendOtp = () => {
    toast.info("OTP has been resent to your number.");
  };

  // Handle back navigation
  const handleBack = () => {
    if (step === 1) {
      router.push("/"); // Navigate to home page
    } else {
      setStep(1); // Go back to step 1
      setOtp(Array(6).fill("")); // Reset OTP input
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-16 items-end bg-gray-100 background">
      <ToastContainer />
      <div className="bg-white/40 shadow-lg rounded-lg p-10 w-full max-w-md">
        <div className="flex items-center py-4">
          <h1 className="text-3xl text-orange-500 font-bold">
            <span className="text-green-400 font-serif tracking-wide">Pre</span>
            <span className="text-yellow-500 font-serif tracking-wide">
              Prod
            </span>
          </h1>
        </div>
        <h1 className="text-2xl font-sans tracking-wide font-semibold text-gray-700">
          {step === 1
            ? "Groceries delivered in 10 minutes"
            : "OTP Verification"}
        </h1>

        {step === 1 && (
          <>
            <div className="mt-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-100 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-200"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  const input = e.target.value;
                  // Allow only numbers and limit the input to 10 digits
                  if (/^\d{0,10}$/.test(input)) {
                    setPhoneNumber(input);
                  }
                }}
              />
            </div>
            <button
              className={`mt-4 w-full text-white p-3 rounded-3xl ${
                phoneNumber.length === 10
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-400"
              }`}
              onClick={handlePhoneSubmit}
              disabled={phoneNumber.length !== 10}
            >
              Continue
            </button>
            <div className="flex justify-center flex-col font-sans tracking-wide items-center py-3 mt-5 text-center">
              <h1>By continuing, you agree to our</h1>
              <h1 className="text-yellow-600 font-sans font-medium">
                Terms of Service & Privacy Policy
              </h1>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg mt-2 font-sans tracking-wide">
              OTP has been sent to {phoneNumber}
            </h2>
            <div className="mt-7 flex space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-10 p-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-200"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  ref={(el) => (otpRefs.current[index] = el)} // Set ref for each input
                />
              ))}
            </div>
            <button
              className="mt-7 mb-3 w-full bg-green-500 font-sans tracking-wide text-white p-3 rounded-3xl hover:bg-green-600"
              onClick={handleOTPSubmit}
            >
              Submit
            </button>
            <div className="text-center font-sans tracking-wide mb-5 mt-5">
              <p>
                Didn't get the OTP?{" "}
                <span
                  className="text-yellow-600 cursor-pointer"
                  onClick={handleResendOtp}
                >
                  Send again
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
