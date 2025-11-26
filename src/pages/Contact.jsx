const Contact = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className=" p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium  mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 border dark:bg-gray-700 dark:border-gray-600 rounded-md dark:text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium  mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 border  dark:bg-gray-700 dark:border-gray-600 rounded-md dark:text-gray-100"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium  mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 border  dark:bg-gray-700 dark:border-gray-600 rounded-md dark:text-gray-100"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm py-2 px-3 rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="">Or reach us at: contact@shopstream.com</p>
      </div>
    </div>
  );
};

export default Contact;
