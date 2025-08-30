import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header / Hero */}
      <header className="text-center py-12 px-4 bg-gray-50">
        <h1 className="text-3xl font-bold mb-2">Register Your Business NG</h1>
        <p className="text-lg mb-6">
          Fast, Affordable & Stress-Free CAC Registration
        </p>
        <a
          href="https://wa.me/2347051114575"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
        >
          Start Your Registration
        </a>
      </header>

      {/* Why Register */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Why Register Your Business?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-4 border rounded-xl">
            ✅ Open a Business Bank Account
          </div>
          <div className="p-4 border rounded-xl">
            ✅ Access Grants, Loans & Programs
          </div>
          <div className="p-4 border rounded-xl">✅ Build Customer Trust</div>
          <div className="p-4 border rounded-xl">
            ✅ Protect Your Business Name
          </div>
        </div>
      </section>

      {/* Our Service */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Service</h2>
        <p className="max-w-xl mx-auto mb-4">
          We handle everything online — business name reservation, paperwork,
          and delivery of your CAC certificate to your email.
        </p>
        <p className="text-xl font-bold mb-6">₦20,000 All-Inclusive</p>
        <a
          href="https://wa.me/2347051114575"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
        >
          Register Now on WhatsApp
        </a>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 border rounded-xl">
            1️⃣ Send us your details & business names
          </div>
          <div className="p-4 border rounded-xl">2️⃣ We process with CAC</div>
          <div className="p-4 border rounded-xl">
            3️⃣ Receive certificate via email
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <blockquote className="p-4 border rounded-xl">
            “I got my CAC certificate in just 8 days, all online.” – Ada,
            Fashionpreneur
          </blockquote>
          <blockquote className="p-4 border rounded-xl">
            “Affordable and stress-free. Highly recommend.” – Dhikrullah, Horla
            Exclusive Painting Service
          </blockquote>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-5">
          <blockquote className="p-4 border rounded-xl">
            “I got my CAC certificate in just 8 days, all online.” – Ada,
            Fashionpreneur
          </blockquote>
          <blockquote className="p-4 border rounded-xl">
            “Affordable and stress-free. Highly recommend.” – Pamilerin,
            Pamaccessories.ng
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">FAQs</h2>
        <div className="mb-4">
          <p className="font-semibold">How long does it take?</p>
          <p>7–10 working days.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Do I need to visit an office?</p>
          <p>No, it’s 100% online.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">What are the requirements?</p>
          <p>Two business names, your personal details, and ₦20,000 payment.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">
            Will I get an official CAC certificate?
          </p>
          <p>Yes, delivered directly to your email.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6 text-center bg-green-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Make Your Business Official?
        </h2>
        <p className="mb-6">Don’t delay your registration. Start today.</p>
        <a
          href="https://wa.me/2347051114575"
          className="bg-white text-green-700 px-6 py-3 rounded-xl shadow hover:bg-gray-100"
        >
          Click Here to Register on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-100 text-gray-600">
        <p>© 2025 Your Business Name. All rights reserved.</p>
        <p>
          Disclaimer: We are a business support service helping entrepreneurs
          with CAC registration. Official CAC fees are included in our pricing.
        </p>
      </footer>
    </div>
  );
}

export default Home;
