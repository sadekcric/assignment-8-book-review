import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <section className="flex items-center justify-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 dark:text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
          <Link to="/" rel="noopener noreferrer">
            <button className="px-8 py-4 border-2 font-semibold rounded-lg border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black transition">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorMessage;
