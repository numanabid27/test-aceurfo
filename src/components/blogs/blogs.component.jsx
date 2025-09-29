import React from "react";
import { BLOGS } from "./blogs.constant";
import Banner from "@/common/components/banner/banner";

export default function Blogs() {


  return (
    <>
      <Banner title="Blogs" desc={<>At <span class="font-semibold">Bookkeeping.com</span>, we offer a wide
          range of financial services tailored to meet the diverse needs of our
          clients. Our team of experts is committed to delivering exceptional
          service and strategic solutions. Explore our services below:</>} />
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.description}
                </p>
                <button className="mt-4 inline-block text-[#00A63E] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
