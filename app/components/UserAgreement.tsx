import React from "react";

const UserAgreement = ({ closeModal }: any) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-hidden">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white-600 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-gray-800 px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-extrabold text-white">
              User Agreement
            </h1>
          </div>
          <div className="bg-gray-600 px-4 pb-4 sm:p-6 sm:pb-4 text-white">
            <p>
              <strong>Welcome to our Online Gaming Platform!</strong>
            </p>
            <p className="mt-3">
              By accessing and using our platform, you agree to abide by the
              following terms and conditions:
            </p>
            <ol className="list-decimal mt-4">
              <li>Users must be at least 18 years old to participate.</li>
              <li>
                Only one account per user is allowed. Multiple accounts may
                result in suspension.
              </li>
              <li>
                Users are responsible for keeping their login credentials
                confidential.
              </li>
              <li>
                Gambling should be done responsibly. If you believe you have a
                gambling problem, please seek help.
              </li>
              <li>
                The platform is not responsible for any financial loss or
                damages incurred during gameplay.
              </li>
              <li>
                Users must comply with all relevant laws and regulations in
                their jurisdiction.
              </li>
              <li>
                The platform reserves the right to modify or terminate services
                at any time.
              </li>
            </ol>
          </div>
          <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
