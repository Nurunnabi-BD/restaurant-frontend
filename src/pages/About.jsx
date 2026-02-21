import aboutImg from "../assets/about.png";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        {/* INTRO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              We Serve Happiness on Every Plate 🍽️
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our food ordering platform! We are passionate about
              delivering fresh, delicious, and high-quality meals straight to
              your doorstep. Our mission is simple: make good food accessible,
              affordable, and fast for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              From burgers to pizzas, snacks to drinks – every item is prepared
              with care, hygiene, and love. Your satisfaction is our top
              priority.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About us"
              className="rounded-xl max-w-[420px] w-full"
            />
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Stat number="5+" label="Years Experience" />
          <Stat number="50+" label="Menu Items" />
          <Stat number="10k+" label="Happy Customers" />
          <Stat number="24/7" label="Support" />
        </section>

        {/* VALUES */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Value title="Quality Food" desc="Only fresh and premium ingredients." />
            <Value title="Fast Delivery" desc="Hot and fresh food delivered quickly." />
            <Value title="Customer First" desc="Your happiness matters the most." />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-500 text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-semibold">Ready to Order?</h2>
          <p className="mt-3">
            Explore our menu and enjoy delicious food today.
          </p>
          <a href="/menu">
            <button className="mt-6 px-8 py-2 bg-white text-amber-600 rounded-lg font-medium hover:bg-gray-100">
              View Menu
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center bg-gray-50 rounded-xl p-6">
      <h3 className="text-3xl font-bold text-amber-500">{number}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}

function Value({ title, desc }) {
  return (
    <div className="border rounded-xl p-6 text-center hover:shadow transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
