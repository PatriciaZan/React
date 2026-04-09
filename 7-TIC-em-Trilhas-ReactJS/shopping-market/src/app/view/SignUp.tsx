import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { isNull } from "lodash";
import authService from "../services/auth.service";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
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

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    void fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      res.json().then(() => {
        navigate("/login");
      });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Sing Up</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <Input
          type="text"
          variant="secundary"
          placeholder="Username"
          value={formData.userName}
          name="userName"
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="text"
          variant="secundary"
          placeholder="email"
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
        <Button type="submit">Sing Up</Button>
      </form>
    </div>
  );
}
