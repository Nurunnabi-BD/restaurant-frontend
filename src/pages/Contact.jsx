import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact With Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg">Address</h2>
              <p>123 Food Street, Chattagram, Bangladesh</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Phone</h2>
              <p>+8801568-490774</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Email</h2>
              <p>support@fooddelivery.com</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Working Hours</h2>
              <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}