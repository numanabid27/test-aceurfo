import React from "react";

export default function Banner({title, desc}) {
  return (
    <section className="bg-gradient-to-br from-[#00A63E] to-[transparent] py-20">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[44px] font-bold text-[#fff] ">{title}</h1>
        <p className="mt-4 text-[#fff] leading-relaxed ">
          {desc}
        </p>
      </div>
    </section>
  );
}
