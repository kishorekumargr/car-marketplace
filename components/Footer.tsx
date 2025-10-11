import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          {/* Logo + About */}
          <div>
            <h2 className="mb-4 font-bold text-white text-2xl">CarBuy</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find your dream car with ease. Browse thousands of listings, compare prices, and drive
              away happy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="hover:text-white">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Stay Updated</h3>
            <p className="mb-3 text-gray-400 text-sm">
              Subscribe to get the latest car deals and market insights.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md focus:outline-none w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md font-medium text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center mt-10 pt-6 border-gray-700 border-t">
          {/* Copyright */}
          <p className="text-gray-500 text-sm md:text-left text-center">
            © {new Date().getFullYear()} CarBuy - All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white"></Link>
            <Link href="#" className="hover:text-white"></Link>
            <Link href="#" className="hover:text-white"></Link>
            <Link href="#" className="hover:text-white"></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
