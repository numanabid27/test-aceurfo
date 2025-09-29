import { Award } from "lucide-react";
import { STATS, TEAM } from "../home.constant";
import Image from "next/image";
import banner from "@/common/assets/img/about.jpg"
import Banner from "@/common/components/banner/banner";

export default function AboutComponent() {
  return (
    <section id="about" className="pb-20 bg-white">
      <Banner title="About" desc={<>At <span class="font-semibold">Bookkeeping.com</span>, we offer a wide
                range of financial services tailored to meet the diverse needs of our
                clients. Our team of experts is committed to delivering exceptional
                service and strategic solutions. Explore our services below:</>} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              WHAT WE DO ?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We take care of bookkeeping and tax for small business owners. And
              we do it in a way that’s never been done before—by pairing
              intuitive software with real, human bookkeepers. To us, it’s more
              than number crunching. It's giving entrepreneurs more time to
              focus on what they care about.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that every business deserves access to professional
              bookkeeping services, regardless of size or industry. That's why
              we've built scalable solutions that grow with your business.
            </p>
            <button className="bg-[#00A63E]text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Professional team working"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-[#F7F8FA] py-[45px]">
        {STATS.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-8 w-8 text-[#00A63E]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex mb-[30px]">
          <div className="w-[50%]">
            <h6 className="font-semibold text-[30px] mb-2.5">Why we're here</h6>
            <p className="font-medium text-lg">
              Our mission is to help every business owner thrive, by providing
              financial insight and peace of mind in one seamless platform.
            </p>
          </div>
          <div className="w-[50%]">
            <p className="font-medium pb-4">
              Financial mastery is the idea that everyone, regardless of
              economic standing, should have full control of their finances.
              It’s more than knowing how to read an account statement—it’s
              giving people the tools they need to stay on top of their
              finances, and improve their lives.
            </p>
            <p>
              <span className="block italic font-medium">
                People and the quality of their lives.
              </span>
              <span className="block italic font-medium">
                That, at its core, is what Bench is about.
              </span>
            </p>
          </div>
        </div>
        <Image src={banner} alt="" className="mx-auto block" />
      </div>

        <div className="text-center mb-12 mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified professionals bring decades of combined experience to
            help your business succeed financially.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
            <div key={index} className="text-center group">
                <div className="relative mb-6">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
                </h4>
                <p className="text-[#00A63E] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
            ))}
        </div>
    </section>
  );
}
