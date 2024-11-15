"use client";
import URL from "@/components/URL.js";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FooterSubscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (formData) => {
    console.log("Submitting Form Data = ", formData);
    try {
      const response = await fetch(`${URL}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Response from server:", result);
      
      // Show success message
      setSuccessMessage("Thank you for subscribing! You will receive updates soon.");
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage(""); // Clear success message on error
    }
  };

  return (
    <div className="aximo-subscription2">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            placeholder="Email Address"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <button id="aximo-subscription-btn2" type="submit">
          Subscribe now
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default FooterSubscription;
