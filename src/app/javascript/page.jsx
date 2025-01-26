import React from "react";
import javaScriptJson from '@/app/assets/javascript.json';

const page = () => {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-5xl mx-auto bg-gray-900 shadow-lg rounded-2xl p-6">
        <h1 className="text-5xl underline font-bold mb-6 text-center text-yellow-400">JavaScript</h1>
        <div className="space-y-6">
          {javaScriptJson.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 last:border-none" >
              <h2 className="text-2xl font-semibold text-yellow-300">
                <span>Que- {item.id}. </span> {item.question}
              </h2>
              <p className="text-gray-300 mt-3">
                <span className="font-bold text-yellow-400">Ans :- </span>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
