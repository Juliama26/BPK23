import {Input_} from "../../Elements/Input/Input";
import {Button_} from "../../Elements/Button/Button";
import {Role_} from "../../Elements/Select/Select";

import {useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

export default function UserForm(props) {
  const {title} = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3071/auth/whoami");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setToken(response.data.accessToken);
      setExpired(decoded.exp);
    } catch (err) {
      if (err.response) {
        navigate("/user-login");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("fullName", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("user_role", role);
      formData.append("imageUrl", image);

      await axios.post("http://localhost:3071/manage/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/manage/users");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        setIsLoading(false);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-5 mt-10 justify-center">
      <h1 className="text-xl text-center font-semibold opacity-70">{title}</h1>
      <span className="text-xs text-r500">{message}</span>
      <section className="flex flex-col w-full gap-y-2 md:gap-y-4">
        <Input_
          id="username"
          name="username"
          type="text"
          label="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input_
          id="email"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input_
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Role_ name="role" label="Role" value={role} onChange={setRole} />
        <Input_
          id="image"
          name="image"
          type="file"
          label="Input Avatar"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button_
          title={isLoading ? "Loading..." : "Simpan"}
          type="submit"
          className={"mt-5"}
        />
      </section>
    </form>
  );
}
