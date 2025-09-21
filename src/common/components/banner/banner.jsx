import React from "react";

export default function Banner({title, desc}) {
  return (
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[44px] font-bold text-[#0A3A6A] ">{title}</h2>
        <p class="mt-4 text-gray-700 leading-relaxed ">
          {desc}
        </p>
      </div>
    </section>
  );
}
