import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4">
          WELCOME TO TASTYBITES
        </h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Taste the Love in Every Bite!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover a delightful collection of recipes that cater to everyone's
          taste, from traditional dishes to modern fusion cuisine. Our
          easy-to-follow recipes allow you to create delicious meals at home
          without any hassle. Join us on this gastronomic journey and explore
          new flavors that will tantalize your taste buds!
        </p>
        <Link
          href="/home"
          className="bg-orange-600 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-700 transition-colors"
        >
          Explore Our Menu
        </Link>
      </section>

      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
        <Image
          src="/assets/slider1.jpg"
          alt="Delicious food spread"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
