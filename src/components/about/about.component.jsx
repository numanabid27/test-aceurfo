import { STATS, TEAM } from "../home.constant";
import Image from "next/image";
import banner from "@/common/assets/img/about.jpg"
import Banner from "@/common/components/banner/banner";
import about from "@/common/assets/img/about1.jpg"

export default function AboutComponent() {
  return (
    <section id="about" className="pb-20 bg-white">
      <Banner title="About" desc="We turn complex business challenges into opportunities through personalized finance and bookkeeping services. Whether you're at the initial stage of starting your own business or you already have a stable company, we manage accounts and finance with excellence" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Financial Management and Bookkeeping 
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lack of professional accounts and Finance management hinders your business achievement. AccureCFO's accounting services include everything that streamlines your business processes. Our experts help you achieve your business vision without incurring any risks to your accounts. We bring profitable solutions with accurate financial reporting. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We professionally handle your financial data and reports, which helps you maintain the trust of your stakeholders confidently. With AccureCFO, businesses can focus on improvement, while we handle their bookkeeping requirements.
            </p>
           
          </div>
          <div className="relative">
            <Image
              src={about}
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
        <div className="flex md:flex-row flex-col mb-[30px]">
          <div className="md:w-[50%] w-full">
            <h6 className="font-semibold md:text-[30px] text-[22px] mb-2.5">Why Choose AccureCFO</h6>
            <p className="font-medium md:text-lg text-[16px]">
              AccureCFO brings innovation to businesses through talented minds. The possibility of delivering top-notch accounts solutions comes from a dedicated team of experts. 
            </p>
          </div>
          <div className="md:w-[50%] w-full">
            <p className="font-medium pb-4">
              We effectively set up accounting objectives, ensuring compliance with regulatory requirements. AccureCFO offers accuracy that sets your accounting objectives up for success. Moreover, AccureCFO identifies the pathway for growth and allocates resources effectively to help you maximize savings.
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

        <div className=" mb-12 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl text-center font-bold text-gray-900 mb-4">
            Meet Our Talented Team 
            </h3>
            <p className="md:text-xl text-[16px] text-center text-gray-600 max-w-3xl mx-auto">
            AccureCFO's certified team knows how to bring transitions to a business through expertise, the latest tools, and cloud-based software.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px]">
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
        </div>
        
    </section>
  );
}
