import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
} from "react-icons/fa";
import {Input_} from "../../Elements/Input/Input";
import Textarea_ from "../../Elements/Textarea/Textarea";
import {Button_} from "../../Elements/Button/Button";

export default function Contact() {
  return (
    <main className="px-3 md:px-10 flex flex-col gap-y-20 py-20">
      <section className="flex justify-center gap-x-10">
        <div className="flex flex-col items-center">
          <FaFacebook className="text-4xl" />
          <p>Facebook</p>
        </div>
        <div className="flex flex-col items-center">
          <FaInstagram className="text-4xl" />
          <p>Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTwitter className="text-4xl" />
          <p>Twitter</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLocationArrow className="text-4xl" />
          <p>Papua Barat</p>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Send us a message
          </h2>
          <form className="flex flex-col gap-y-4">
            <Input_ type="text" label="Your Name" />
            <Input_ type="email" label="Email Address" />
            <Textarea_ label="Your Message" />
            <Button_ title="Send Message" />
          </form>
        </div>
      </section>
    </main>
  );
}
