import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h3 class="text-2xl font-semibold text-gray-800">Introduction</h3>
        <p class="mt-3 text-gray-600 leading-relaxed">
          At <span class="font-medium text-indigo-600">BookkeeperPro</span>, we
          are committed to protecting your personal information and respecting
          your privacy. This Privacy Policy explains how we collect, use, and
          safeguard your data when you use our bookkeeping and accounting
          services.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-800">
          Information We Collect
        </h3>
        <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
          <li>Personal details such as name, email, and phone number</li>
          <li>Business and financial information for bookkeeping purposes</li>
          <li>Payment details processed through secure providers</li>
          <li>
            Technical data like browser type, IP address, and usage statistics
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-800">
          How We Use Your Information
        </h3>
        <p class="mt-3 text-gray-600 leading-relaxed">
          We use the collected information to provide bookkeeping and accounting
          services, improve our customer experience, process payments securely,
          and comply with applicable financial regulations.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-800">Data Protection</h3>
        <p class="mt-3 text-gray-600 leading-relaxed">
          We implement industry-standard security measures to safeguard your
          data against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          100% secure.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-800">
          Sharing of Information
        </h3>
        <p class="mt-3 text-gray-600 leading-relaxed">
          We do not sell or rent your personal data. We may share your
          information with trusted partners (such as payment processors) when
          necessary to provide our services or comply with legal obligations.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-800">Contact Us</h3>
        <p class="mt-3 text-gray-600 leading-relaxed">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p class="mt-2 text-indigo-600 font-medium">
          support@bookkeeperpro.com
        </p>
      </div>
    </section>
  );
}
