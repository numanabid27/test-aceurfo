import { ArrowRight, CheckCircle, Check, Star , Award } from 'lucide-react';
import { FAQS, PLANS, SERVICES, STATS, STEPS, TEAM } from './home.constant';
import Faqs from './faqs.component';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Professional
                    <span className="text-[#0A3A6A] block">Bookkeeping</span>
                    Made Simple
                    </h1>
                    <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                    Focus on growing your business while we handle your books. Our expert team provides 
                    accurate, timely financial records so you can make informed decisions.
                    </p>
                    
                    {/* Benefits */}
                    <div className="mt-8 space-y-3">
                    {[
                        'Dedicated bookkeeping team',
                        'Monthly financial statements',
                        'Tax-ready books year-round',
                        'Real-time financial dashboard'
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                        </div>
                    ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#0A3A6A] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold">
                        Schedule Demo
                    </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ businesses</p>
                    <div className="flex items-center space-x-8 opacity-60">
                        <div className="text-2xl font-bold text-gray-400">TechCorp</div>
                        <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
                        <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
                    </div>
                    </div>
                </div>

                {/* Right Content - Dashboard Preview */}
                <div className="relative">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Financial Overview</h3>
                        <span className="text-sm text-gray-500">This Month</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">Revenue</p>
                            <p className="text-2xl font-bold text-green-600">$45,230</p>
                            <p className="text-xs text-green-500">+12.5%</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">Expenses</p>
                            <p className="text-2xl font-bold text-red-600">$18,940</p>
                            <p className="text-xs text-red-500">+3.2%</p>
                        </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {[
                        { name: 'Client Payment', amount: '+$2,500', color: 'text-green-600' },
                        { name: 'Office Rent', amount: '-$1,200', color: 'text-red-600' },
                        { name: 'Software License', amount: '-$299', color: 'text-red-600' },
                        ].map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-sm text-gray-700">{transaction.name}</span>
                            <span className={`font-semibold ${transaction.color}`}>{transaction.amount}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* services */}
        <section id="services" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What We Offer- Our Edge, Your Advantage
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group">
                            <div className="bg-blue-100 w-16 h-16 rounded-lg mx-auto flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                <IconComponent className="h-8 w-8 text-[#0A3A6A]" />
                            </div>
                            <h3 className="text-xl text-center font-semibold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                            
                            <Link href={`offer-detail/${service.slug}`} className="mt-6 py-[10px] px-[19px] flex justify-center bg-[#0A3A6A] text-white rounded-[6px] w-fit mx-auto cursor-pointer font-medium  transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        </section>

        {/* why choose us */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className='text-center text-[30px] font-bold pb-[40px]'>Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 text-white">
                {STEPS.map((step, index) => (
                    <div
                    key={index}
                    className={`p-8 flex flex-col gap-2 ${
                        [
                        "bg-green-700",
                        "bg-green-600",
                        "bg-green-500",
                        "bg-green-400",
                        "bg-green-300",
                        ][index]
                    }`}
                    >
                    <h2 className="text-2xl font-bold">{step.number}</h2>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                    
                    </div>
                ))}
            </div>
        </section>    

        {/* pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose the plan that fits your business needs. All plans include our core bookkeeping 
                    services with no hidden fees or long-term contracts.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PLANS?.map((plan, index) => (
                    <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                    plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                    }`}>
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#0A3A6A] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                        </div>
                        </div>
                    )}
                    
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                        ))}
                    </ul>

                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular 
                        ? 'bg-[#0A3A6A] text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                        Get Started
                    </button>
                    </div>
                ))}
                </div>

                <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Need a custom solution?</p>
                <button className="text-[#0A3A6A] font-semibold hover:text-blue-700 transition-colors">
                    Contact us for enterprise pricing →
                </button>
                </div>
            </div>
        </section>

        {/* about */}
        <section  className="pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Your Trusted Financial Partner
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    For over 15 years, BookKeeper Pro has been helping businesses of all sizes 
                    maintain accurate financial records and make informed decisions. Our team of 
                    certified professionals combines expertise with cutting-edge technology to 
                    deliver exceptional results.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We believe that every business deserves access to professional bookkeeping 
                    services, regardless of size or industry. That's why we've built scalable 
                    solutions that grow with your business.
                    </p>
                    <button className="bg-[#0A3A6A] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More About Us
                    </button>
                </div>
                <div className="relative">
                    <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Professional team working" 
                    className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                        <Award className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                        <p className="font-semibold text-gray-900">Certified Professionals</p>
                        <p className="text-sm text-gray-600">CPA & QuickBooks ProAdvisors</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

    
               

                
            </div>
        </section>
        
        <section  className="py-20">
           <Faqs faqs={FAQS} />
        </section>
        
    </>
  )
}
