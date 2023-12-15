
const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col w-full rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold text-gray-700">Basic Plan</h2>
        <p className="text-gray-500 my-2">
          Perfect for small projects or personal use.
        </p>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-900 mr-2">$19</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="mt-4 text-gray-600 list-none space-y-2">
          <li>10 GB Storage</li>
          <li>1000 Bandwidth</li>
          <li>Basic Support</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Pricing;
