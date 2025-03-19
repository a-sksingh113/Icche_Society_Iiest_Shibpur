import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FooterDemo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Submitting your feedback...");
    setLoading(true);

    try {
      await axios.post("https://icche.vercel.app/api/feedback/add-feedback", formData);
      
      toast.update(loadingToast, {
        render: "Feedback submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });

      setFormData({ fullName: "", email: "", contact: "", message: "" });
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to submit feedback!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-100 border-top p-8">
      <ToastContainer position="top-right" autoClose={3000} transition={Slide} />
      <div className="text-center mb-6 sm:mt-10">
        <h1 className="text-2xl font-extrabold">CONTACT US</h1>
        <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-extrabold mb-2">Our Office</h2>
          <p className="text-gray-700">+91 465858588</p>
          <p className="text-gray-700">Slater Hall</p>
          <p className="text-gray-700">IIEST, Shibpur, Howrah, West Bengal</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-semibold mt-40">Follow Us</h2>
          <ul className="flex sm:gap-10 gap-4 mt-3 me-8">
            <li><Link to="/facebook"><BsFacebook className="size-7 text-blue-900" /></Link></li>
            <li><Link to="/instagram"><FaSquareInstagram className="size-7 text-pink-800" /></Link></li>
            <li><Link to="/twitter"><FaTwitter className="size-7 text-blue-700" /></Link></li>
            <li><Link to="/linkedin"><FaLinkedin className="size-7 text-blue-500" /></Link></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-center mb-4">Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="fullName" placeholder="Your Name" className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition" value={formData.fullName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition mt-3" value={formData.email} onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Your Contact Number" className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition mt-3" value={formData.contact} onChange={handleChange} required />
            <textarea name="message" rows="3" placeholder="Your Message" className="w-full p-2 rounded-md bg-gray-200 text-gray-700 outline-none focus:bg-gray-300 transition mt-3" value={formData.message} onChange={handleChange} required></textarea>
            <div className="mt-3">
              <button type="submit" className="w-full bg-gray-700 text-white font-extrabold py-2 hover:bg-gray-900 transition" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterDemo;
