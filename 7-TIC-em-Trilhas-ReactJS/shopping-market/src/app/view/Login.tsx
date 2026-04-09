import { useEffect, useState } from "react";
import Button from "../components/Button";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { isNull } from "lodash";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isNull(authService.getLoggedUser())) {
      navigate("/");
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = authService.authenticate(formData);
      authService.setLoggedUser(await res);
      return navigate("/");
    } catch {
      console.log("Algo deu errado!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Login</h1>
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className="flex flex-col gap-6"
      >
        <Input
          type="text"
          variant="secundary"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="password"
          variant="secundary"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Login</Button>
      </form>

      <span onClick={() => navigate("/register")} className="cursor-pointer">
        Sing Up
      </span>
    </div>
  );
}
