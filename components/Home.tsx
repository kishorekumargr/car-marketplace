import Link from "next/link";
import Image from "next/image";

const featuredCars = [
  {
    id: 1,
    name: "2023 Tesla Model S",
    price: "$89,990",
    image: "/cars/tesla-model-s.jpg",
  },
  {
    id: 2,
    name: "2022 BMW 3 Series",
    price: "$42,500",
    image: "/cars/bmw-3-series.jpg",
  },
  {
    id: 3,
    name: "2023 Audi Q7",
    price: "$68,000",
    image: "/cars/audi-q7.jpg",
  },
];

const categories = [
  { id: 1, name: "SUVs", image: "/categories/suv.jpg" },
  { id: 2, name: "Sedans", image: "/categories/sedan.jpg" },
  { id: 3, name: "Electric", image: "/categories/electric.jpg" },
  { id: 4, name: "Luxury", image: "/categories/luxury.jpg" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0A1832] px-4 py-20 text-white text-center">
        <h1 className="mb-4 font-bold text-4xl md:text-5xl">Find Your Dream Car</h1>
        <p className="mb-6 text-lg md:text-xl">
          Browse thousands of listings and find the perfect ride.
        </p>
        <div className="flex mx-auto max-w-xl">
          <input
            type="text"
            placeholder="Search cars by make, model or keyword"
            className="flex-1 px-4 py-3 rounded-l-md outline text-white"
          />
          <button className="bg-white hover:bg-gray-100 px-6 py-3 rounded-r-md font-semibold text-indigo-600">
            Search
          </button>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="mx-auto px-4 py-16 max-w-7xl">
        <h2 className="mb-8 font-bold text-gray-800 text-3xl">Featured Cars</h2>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="shadow hover:shadow-lg border rounded-lg overflow-hidden transition"
            >
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-xl">{car.name}</h3>
                <p className="mt-2 font-bold text-indigo-600">{car.price}</p>
                <Link
                  href={`/cars/${car.id}`}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 mt-4 px-4 py-2 rounded text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 px-4 py-16">
        <h2 className="mb-8 font-bold text-gray-800 text-3xl text-center">Browse by Category</h2>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto max-w-7xl">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative shadow hover:shadow-lg rounded-lg overflow-hidden transition"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <h3 className="font-semibold text-white text-xl">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-indigo-800 px-4 py-16 text-white text-center">
        <h2 className="mb-4 font-bold text-3xl">Ready to sell your car?</h2>
        <p className="mb-6">Join thousands of sellers and reach buyers instantly.</p>
        <Link
          href="/sell"
          className="bg-white hover:bg-gray-100 px-6 py-3 rounded font-semibold text-indigo-600"
        >
          Sell Your Car
        </Link>
      </section>
    </div>
  );
}
