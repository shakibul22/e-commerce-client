import React, { useState } from "react";

const Signup = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    verificationCode: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    const errors = validateUserData();

    if (Object.keys(errors).length === 0) {
      if (step === 0) {
        // Move to the verification step if user data is valid
        setStep(1);
        // Simulate sending a verification code via email (not a real implementation)
        // You would typically make an API call to send the verification code
        sendVerificationCode(userData.email);
      } else if (step === 1 && validateVerificationCode()) {
        // Perform registration here (not a real implementation)
        // You would typically make an API call to register the user
        alert("User successfully registered!");
      }
    } else {
      // Update validation errors state
      setValidationErrors(errors);
    }
  };

  const handleResendCode = () => {
    // Simulate sending a new verification code via email (not a real implementation)
    // You would typically make an API call to resend the verification code
    sendVerificationCode(userData.email);
  };

  const validateUserData = () => {
    const errors = {};

    // Validation logic for required fields
    if (!userData.name) {
      errors.name = "Name is required";
    }

    if (!userData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }

    if (!userData.email) {
      errors.email = "Email is required";
    }

    if (!userData.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const validateVerificationCode = () => {
    const errors = {};

    // Validation logic for verification code
    if (!userData.verificationCode) {
      errors.verificationCode = "Verification Code is required";
    }

    return errors;
  };

  const sendVerificationCode = (email) => {
    // Simulate sending a verification code via email (not a real implementation)
    console.log(`Sending verification code to ${email}`);
    // You would typically make an API call to send the verification code
  };

  return (
    <div>
      <section className="font-poppins py-7">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div className="flex flex-col items-center h-full md:flex-row">
            <div className="flex items-center justify-center w-full h-screen px-1 lg:w-3/6 md:mx-auto md:w-3/5 lg:px-16 xl:px-12">
              <div className="z-10 w-full p-10 bg-white shadow-lg dark:bg-gray-900 h-100">
                {step === 0 && (
                  <>
                    <h2 className="mt-10 mb-4 text-xl font-bold text-center leading-tight text-blue-800 md:text-3xl dark:text-gray-300">
                      Create your account
                    </h2>
                    <form>
                      <div>
                        <input
                          name="name"
                          onChange={handleInputChange}
                          type="text"
                          className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                          placeholder="Enter your name"
                          required
                        />
                        {validationErrors.name && (
                          <span className="error">{validationErrors.name}</span>
                        )}
                      </div>
                      <div className="mt-5">
                        <input
                          name="phoneNumber"
                          onChange={handleInputChange}
                          type="text"
                          className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                          placeholder="Enter your phone number"
                          required
                        />
                        {validationErrors.phoneNumber && (
                          <span className="error">{validationErrors.phoneNumber}</span>
                        )}
                      </div>
                      <div className="mt-5">
                        <input
                          name="email"
                          onChange={handleInputChange}
                          type="email"
                          className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                          placeholder="Enter your email"
                          required
                        />
                        {validationErrors.email && (
                          <span className="error">{validationErrors.email}</span>
                        )}
                      </div>
                      <div className="mt-5">
                        <input
                          name="password"
                          onChange={handleInputChange}
                          type="password"
                          className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                          placeholder="Create a password"
                          required
                        />
                        {validationErrors.password && (
                          <span className="error">{validationErrors.password}</span>
                        )}
                      </div>
                    </form>
                  </>
                )}

                {step === 1 && (
                  <>
                    <p className="text-start text-lg mb-5">
                      Verification code has been sent to your email. Please enter the code below:
                    </p>
                    <form>
                      <div>
                        <input
                          name="verificationCode"
                          onChange={handleInputChange}
                          type="text"
                          className="w-full px-4 py-4 mt-2 text-sm placeholder-blue-400 rounded-xl dark:text-gray-400 lg:text-base bg-blue-50 dark:placeholder-gray-400 dark:bg-gray-900 dark:border dark:border-gray-800"
                          placeholder="Enter verification code"
                          required
                        />
                        {validationErrors.verificationCode && (
                          <span className="error">{validationErrors.verificationCode}</span>
                        )}
                      </div>
                    </form>
                    <button
                      onClick={handleResendCode}
                      className="  mt-2"
                    >
                     <span className="text-blue-600 underline uppercase "> Resend</span> Verification Code
                    </button>
                  </>
                )}

                <button
                  onClick={handleNext}
                  className="w-full px-4 py-4 mt-6 font-semibold text-white bg-blue-700 rounded-xl dark:text-white hover:text-white hover:bg-blue-200 dark:hover:bg-yellow-600 dark:hover:text-white"
                  type="button"
                >
                  {step === 0 ? "Next" : "Confirm Register"}
                </button>

                {step === 0 && (
                  <p className="mt-5 text-sm text-gray-700 mb-7 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400"
                    >
                      Login here
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
