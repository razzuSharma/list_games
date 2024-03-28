"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GiveawayForm = () => {  
  const [openModal, setOpenModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      termsAgreed: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      termsAgreed: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data, error } = await supabase.from("giveaway").insert([
          {
            name: values.name,
            email: values.email,
            termsAgreed: values.termsAgreed,
          },
        ]);

        if (error) {
          throw new Error(`Error submitting form: ${error.message}`);
        }

        formik.resetForm();
        setFormSubmitted(true);

        console.log("Form submitted successfully!", data);
      } catch (error: any) {
        console.error("Error submitting form:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleContinue = () => {
    // Redirect to homepage
    router.push("/");
  };

  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-800 min-h-screen flex items-center justify-center">
      {!formSubmitted ? (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white dark:bg-gray-700 shadow-md rounded-md p-8 max-w-md w-full sm:w-96 relative"
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
              <input
                type="checkbox"
                id="termsAgreed"
                name="termsAgreed"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.termsAgreed}
                className="mr-2"
              />
              I agree with the{" "}
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </button>
            </label>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="text-white bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enter the giveaway
          </button>

          {openModal && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-md p-8 max-w-md w-full sm:w-96 relative">
                <h2 className="text-lg font-semibold mb-4">
                  Terms and Conditions
                </h2>
                <UserAgreement />
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-0 right-0 bg-transparent border-none text-red-500 hover:text-red-700 p-2 focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      ) : (
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-md p-8 max-w-md w-full sm:w-96 text-center">
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            Form Submitted Successfully!
          </h2>
          <p>Your form has been submitted successfully.</p>
          <button
            onClick={handleContinue}
            className="text-white bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          >
            Continue
          </button>
        </div>
      )}
    </main>
  );
};

const UserAgreement = () => {
  return (
    <div>
      <ul className="list-disc pl-5">
        <li>
          You must be at least 18 years old to participate in online casino
          games.
        </li>
        <li>
          Only one account is allowed per person. Multiple accounts may result
          in termination of access.
        </li>
        <li>
          Participants are responsible for ensuring the legality of online
          gambling in their jurisdiction.
        </li>
        <li>
          Deposits and withdrawals must be made using legitimate payment
          methods.
        </li>
        <li>
          Participants are responsible for maintaining the security of their
          account credentials.
        </li>
      </ul>
    </div>
  );
};

export default GiveawayForm;
