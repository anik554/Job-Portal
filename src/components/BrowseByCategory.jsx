import { useRef } from "react";

const categories = [
  { name: "Marketing & Sale", jobs: 1526, icon: "📊" },
  { name: "Customer Help", jobs: 185, icon: "🎧" },
  { name: "Finance", jobs: 168, icon: "🏦" },
  { name: "Software", jobs: 1856, icon: "💡" },
  { name: "Human Resource", jobs: 165, icon: "👤" },
  { name: "Design", jobs: 342, icon: "🎨" },
  { name: "Retail", jobs: 256, icon: "🛒" },
  { name: "Healthcare", jobs: 478, icon: "🩺" },
];

const BrowseByCategory = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className="py-10">
      <div className=" px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Browse by Category
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Find the job that’s perfect for you. About 800+ new jobs every day.
        </p>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-1"
          >
            &#8592;
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden no-scrollbar p-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-50 p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300 text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.jobs} Jobs Available
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-1"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
