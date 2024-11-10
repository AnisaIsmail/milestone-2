import Image from "next/image";

const foodItems = [
  {
    src: "/assets/slider1.jpg",
    alt: "Delicious Dish 1",
    name: "Special Deal #1",
    price: "$20.00",
  },
  {
    src: "/assets/slide3.jpg",
    alt: "Delicious Dish 2",
    name: "Veg Pulao",
    price: "$9.75",
  },
  {
    src: "/assets/slide4.jpg",
    alt: "Delicious Dish 3",
    name: "Special Deal #2",
    price: "$25.50",
  },
  {
    src: "/assets/handi.jpg",
    alt: "Delicious Dish 4",
    name: "Chicken Handi",
    price: "$9.00",
  },
  {
    src: "/assets/food1.jpg",
    alt: "Delicious Dish 5",
    name: "Beef Biryani",
    price: "$9.99",
  },
  {
    src: "/assets/slide5.jpg",
    alt: "Delicious Dish 6",
    name: "Special Deal #3",
    price: "$25.99",
  },
  {
    src: "/assets/burger.jpg",
    alt: "Delicious Dish 7",
    name: "Burger",
    price: "$8.50",
  },
  {
    src: "/assets/momo.jpg",
    alt: "Delicious Dish 8",
    name: "Momos",
    price: "$6.99",
  },
  {
    src: "/assets/spaghetti.jpg",
    alt: "Delicious Dish 9",
    name: "Spaghetti",
    price: "$6.99",
  },
  {
    src: "/assets/pizza.jpg",
    alt: "Delicious Dish 10",
    name: "Pizza",
    price: "$9.99",
  },
  {
    src: "/assets/daal-ch.jpg",
    alt: "Delicious Dish 11",
    name: "Daal-Chawel",
    price: "$6.99",
  },
  {
    src: "/assets/klyji.jpg",
    alt: "Delicious Dish 12",
    name: "Deal #4",
    price: "$7.99",
  },
];

export default function FoodGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Our Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-orange-600 font-semibold mb-3">{item.price}</p>
              <button className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
