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
      await axios.post(`${import.meta.env.VITE_BE_URL}/auth/login`, {
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
    // <section className="flex justify-center items-center h-screen bg-cover bg-center bg-900 bg-opacity-25">
    <section className="flex justify-center items-center h-screen bg-cover bg-center">
      <section className="w-full md:w-1/2 lg:w-1/3 px-6 py-5 bg-white bg-opacity-90 rounded-lg shadow-lg border-2">
        <section className="flex flex-col items-center pb-1 -space-y-1">
          <h1 className="text-3xl font-bold text-950">BPK23</h1>
          <p>Balai Pelestarian Kebudayaan Wilayah XXIII</p>
        </section>
        <hr className="border mb-4" />
        {message && <p className="text-red-500 text-xs">{message}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4 py-4 ">
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
          <Button_ title="Masuk" type="submit" className="mt-4" />
        </form>
      </section>
    </section>
  );
}
