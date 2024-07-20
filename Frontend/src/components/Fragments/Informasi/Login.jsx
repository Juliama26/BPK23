import {Button_} from "../../Elements/Button/Button";
import {Input_} from "../../Elements/Input/Input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3071/auth/login", {
        email: email,
        password: password,
      });

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <section
      className="flex justify-center items-center h-screen bg-cover bg-center bg-gradient-to-tr from-100 to-200"
      // style={{backgroundImage: `url('/image/noken.jpg')`}}>
    >
      <section className="w-full md:w-1/2 lg:w-1/3 px-6 py-5 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {/* <h1 className="text-xl text-center font-semibold mb-6">
          Masuk untuk pendataan
          <hr className="border-b-2 border-gray-200" />
        </h1> */}
        <section className="flex flex-col items-center pb-4 -space-y-1">
          <h1 className="text-3xl font-bold text-950">BPK23</h1>
          <p>Balai Pelestarian Kebudayaan Wilayah XXIII</p>
        </section>
        {message && <p className="text-red-500 text-xs mb-4">{message}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input_
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input_
            id="password"
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button_ title="Masuk" type="submit" />
        </form>
      </section>
    </section>
  );
}
