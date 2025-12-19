import { useForm } from "react-hook-form";
import "./../Styles/Register.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = async (fdata) => {
    try {
      const res = await fetch("http://localhost:9000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg || "Resgister Failed");
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Register </h1>
        <label>Name :</label>
        <input type="text" {...register("name")} id="name" placeholder="Name" />
        <label>Email :</label>
        <input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Email"
        />
        <label>Password :</label>
        <input
          type="password"
          {...register("password")}
          id="password"
          placeholder="Password"
        />
        <label>Confirm Password :</label>
        <input
          type="password"
          {...register("confirmPassword")}
          id="passwordConfirm"
          placeholder="Confirm Passwod"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
