import {FaFacebook, FaInstagram, FaLocationArrow} from "react-icons/fa";
import {Input_} from "../../Elements/Input/Input";
import Textarea_ from "../../Elements/Textarea/Textarea";
import {Button_} from "../../Elements/Button/Button";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const items = [
  {
    id: 1,
    icon: <FaFacebook className="text-blue-500" />,
    link: "https://www.instagram.com/bpk_wilayahxxiii/",
  },
  {
    id: 2,
    icon: <FaInstagram className="text-pink-500" />,
    link: "https://www.instagram.com/bpk_wilayahxxiii/",
  },
  {
    id: 3,
    icon: <FaLocationArrow className="text-green-500" />,
    link: "https://maps.app.goo.gl/3WicNV9GcHWxNMg8A",
  },
];

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56riflm",
        "template_nbgqdnl",
        form.current,
        "Euw_HAEDGalsIAzFR"
      )
      .then(
        () => {
          setMessage("SUCCESS!");
          setTimeout(() => {
            setMessage("");
            setFormData({
              from_name: "",
              from_email: "",
              message: "",
            });
          }, 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main className="h-screen justify-center items-center px-3 md:px-10 flex flex-col md:flex-row gap-x-16 gap-y-10">
      <section className="flex md:flex-col md:gap-y-10 gap-x-10">
        {items.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            target="_blank"
            className="flex flex-col items-center">
            <span className="text-3xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </section>
      <section className="w-full md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg border">
        {message && (
          <h2 className="text-2xl border font-semibold mb-4 text-center text-g500">
            {message}
          </h2>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-center text-950">
          Send us a message
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
          <Input_
            name="from_name"
            type="text"
            label="Your Name"
            value={formData.from_name}
            onChange={handleChange}
          />
          <Input_
            name="from_email"
            type="email"
            label="Email Address"
            value={formData.from_email}
            onChange={handleChange}
          />
          <Textarea_
            name="message"
            label="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button_ type="submit" title="Send Message" />
        </form>
      </section>
    </main>
  );
}
