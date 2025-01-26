"use client"

export default function Home() {
  return (
    <div className="min-h-[88.5vh] w-full bg-gradient-to-r from-gray-800 to-black flex justify-center items-center">
      <div className="text-center p-8 rounded-lg shadow-xl max-w-3xl mx-auto w-full">
        <h1 className="animatedText text-5xl font-bold text-white mb-6">
          Welcome to Our Website
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Here, you can learn about interview questions and answers across various technologies. Our goal is to provide you with the best resources and tips to crack interviews with confidence.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          Whether you are preparing for a software developer interview or a full-stack developer position, our collection of questions, answers, and explanations will help you navigate through all technical challenges. 
        </p>

        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-8 hover:bg-blue-800">
          Get Started
        </button>
      </div>

      <style jsx>{`
        .container {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)); /* Dark Gradient */
          background-size: cover;
          background-position: center;
        }

        /* Keyframes for animated text */
        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animation for the welcome message text */
        .animatedText {
          animation: fadeInText 2s ease-out;
          display: inline-block;
        }

        /* Button hover effect */
        button {
          font-size: 18px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #2b6cb0;
        }
      `}</style>
    </div>
  );
}
