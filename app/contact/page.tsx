import { useEffect, useState } from 'react';
import emailjs from "emailjs-com"; // Import the emailjs library
import Lottie from 'react-lottie';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
    .send("service_dc5xjmw", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      // Optionally reset the form or show a success message
      setFormData({ firstName: "", lastName: "", email: "", description: "" });
    })
    .catch((err) => {
      console.error("Failed to send email.", err);
    });
  };
  
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data from the public folder
    fetch('/contact.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const defaultOptions = {
    loop: true, // Set to true if you want it to loop
    autoplay: true, // Set to true if you want it to autoplay
    animationData: animationData, // Only set this if animationData is loaded
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Adjust if necessary
    },
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-4xl flex">
        {/* Form Section */}
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl justify-center text-center items-center font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            This is your direct line to reach out to us with any questions,
            concerns, feedback, or inquiries you might have.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-400">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-400">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Message"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Lottie Animation Section */}
        <div className="flex justify-center height-full items-center w-1/2">
          {animationData && (
            <Lottie
              options={defaultOptions}
              height={400} 
              width={500} 
              className="absolute top-0 left-0 w-full h-full" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
