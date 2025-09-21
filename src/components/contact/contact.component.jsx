import Banner from '@/common/components/banner/banner';
import { Phone, Mail, MapPin, Clock  } from 'lucide-react';

export default function ContactComponent() {
  return (
    
        <section className="pb-20 bg-gray-50">
             <Banner title="Contact" desc={<>At <span class="font-semibold">Bookkeeping.com</span>, we offer a wide
                      range of financial services tailored to meet the diverse needs of our
                      clients. Our team of experts is committed to delivering exceptional
                      service and strategic solutions. Explore our services below:</>} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Contact us today for a free consultation and discover how we can help 
                    streamline your financial operations.
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                    <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="John"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Doe"
                        />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Company"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                        </label>
                        <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your bookkeeping needs..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Send Message
                    </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Phone</h4>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                            <p className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                        </div>
                        </div>
                        <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Email</h4>
                            <p className="text-gray-600">hello@bookkeeperPro.com</p>
                            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                        </div>
                        </div>
                        <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Office</h4>
                            <p className="text-gray-600">123 Business Ave<br />Suite 100<br />New York, NY 10001</p>
                        </div>
                        </div>
                        <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Business Hours</h4>
                            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-4">Ready to streamline your books?</h3>
                    <p className="mb-6 opacity-90">
                        Schedule a free consultation and see how we can help your business grow.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                        Schedule Free Consultation
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}
