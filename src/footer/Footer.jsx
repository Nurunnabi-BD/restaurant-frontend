import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-[1100px] mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <img src={logo} alt="Logo" className="max-w-[120px] mb-4" />
          <p className="text-sm leading-relaxed">
            A modern food ordering platform delivering fresh and delicious meals straight to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white"><FaGlobe /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Digital Food. All rights reserved. Crafted with ❤️ by Nurunnabi.
      </div>
    </footer>
  );
}

export default Footer;