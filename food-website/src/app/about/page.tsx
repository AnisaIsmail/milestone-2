export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        About Us
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <p className="mb-6 text-gray-700">
          Welcome to TastyBites! We celebrate the rich culinary heritage of
          Pakistan. Our mission is to bring authentic Pakistani flavors to your
          table.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Journey
        </h2>
        <p className="mb-6 text-gray-700">
          Founded in 2023, TastyBites began as a small family kitchen in
          Karachi. Our love for Pakistani cuisine and its diverse flavors
          inspired us to share these culinary treasures with the world.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Mission
        </h2>
        <p className="mb-6 text-gray-700">
          We strive to deliver the most authentic and delicious Pakistani
          dishes, made with fresh, locally sourced ingredients. Our goal is to
          create a warm and welcoming dining experience for all our guests.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Specialties
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Biryani - A flavorful rice dish with aromatic spices.</li>
          <li>Karahi - A traditional curry cooked in a wok-like pot.</li>
          <li>Pizza - A fully cheese pizza with balanced spices.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Meet Our Team
        </h2>
        <p className="mb-6 text-gray-700">
          Our talented chefs and dedicated staff work tirelessly to ensure you
          enjoy the best of Pakistani cuisine.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Join Us</h2>
        <p className="mb-6 text-gray-700">
          Experience the authentic taste of Pakistan. Browse our menu and place
          your order today!
        </p>
      </div>
    </div>
  );
}
