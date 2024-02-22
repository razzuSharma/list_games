"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserAgreement from "../components/UserAgreement";

const GiveawayForm = () => {
  const [openModal, setOpenModal] = useState(false);

  function modalStatus() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Submit form data to Supabase
        const response = await fetch("/page.server/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        // Clear form values
        formik.resetForm();

        // Optionally, you can show a success message or redirect the user
        console.log("Form submitted successfully!");
      } catch (error: any) {
        console.error("Error submitting form:", error.message);
        // Handle the error as needed
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-800 min-h-screen flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white dark:bg-gray-700 shadow-md rounded-md p-8 max-w-md w-full sm:w-96"
      >
        <h1 className="mb-3 text-center font-mono text-2xl ">
          Enter the giveaway
        </h1>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`shadow-sm bg-gray-50 border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
            placeholder="Your name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`shadow-sm bg-gray-50 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
            placeholder="name@flowbite.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="flex items-start mb-5">
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <button
              type="button"
              onClick={() => modalStatus()}
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </button>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enter the giveaway
        </button>
      </form>
    </main>
  );
};

export default GiveawayForm;
