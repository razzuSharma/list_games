import React from "react";

const WhyUsPage = () => {
  const reasons = [
    {
      title: "Customer Satisfaction",
      description:
        "We are committed to providing outstanding customer service, ensuring your satisfaction is our top priority.",
    },
    {
      title: "Fast Delivery",
      description:
        "Experience the speed and reliability of our delivery services, bringing your orders to your doorstep promptly.",
    },
  ];

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="container mx-auto mt-8">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold mb-8 text-white text-center"
        >
          Why choose us? 🤔
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="w-full rounded-md p-8 overflow-hidden relative group transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="bg-gradient-to-b from-white to-transparent absolute inset-0 opacity-40 group-hover:opacity-0"></div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300 z-10 relative">
                {reason.title}
              </h3>
              <p className="text-gray-300 z-10 relative">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WhyUsPage;
