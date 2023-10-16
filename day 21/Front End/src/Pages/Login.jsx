import { useState } from "react";
import "../Assets/css/Login.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { userLogin } from "../service/api";
// import signin

function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const nav = useNavigate();
  const [error, setError] = useState({});
  const [hello, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...hello, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setError({});
    let validationErrors = {};
    if (!hello.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(hello.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!hello.password.trim()) {
      validationErrors.password = "Password is required";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        login({
          email: hello.email,
        })
      );
      // nav('/')
      nav("/dashboard");
      // toast.success('Login Successful');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(hello);
    if (res.status == "200" && res.data.role == "USER") {
      console.log(res.data);

      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("Role", res.data.role);

      const getuid = res.data.uid;
      console.log(getuid);
      localStorage.setItem("xuserName", res.data.name);
      localStorage.setItem("xuserEmail", res.data.email);
      localStorage.setItem("xuserId", res.data.uid);
      localStorage.setItem("xuserPhone", res.data.phone);
      localStorage.setItem("xuserAddress", res.data.address);

      toast.success(` Welcome ${res.data.name} !`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        dispatch(
          login({
            email: hello.email,
          })
        );
        nav("/userdashboard");
      }, 1500);
    } else if (res.status == "200" && res.data.role == "ADMIN") {
      console.log(res.data);

      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("Role", res.data.role);
      localStorage.setItem("AdminEmail", res.data.email);

      toast.success(` Welcome ${res.data.name} !`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        dispatch(
          login({
            email: hello.email,
          })
        );
        nav("/dashboard");
      }, 1500);
    } else {
      toast.success(` Welcome back USER `, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        dispatch(
          login({
            email: hello.email,
          })
        );
        nav("/dashboard");
      }, 1500);
    }
  };
    return (
        <div className="LoginBorder">
            <Toaster />
            <div className='LoginBox'>
                <div className='LoginBoxTop'>
                    <div className='LoginBoxTitle'>
                        <h2>Login for a good start</h2>
                    </div>
                    <form className="LoginForm" onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        {error.email && <span className='ErrorMsg'>{error.email}</span>}
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {error.password && <span className='ErrorMsg'>{error.password}</span>}
                        <button onClick={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <div className='LoginBoxBottom'>
                    <div className='LoginBoxBottomText1'>
                      <p>Don't have an account?</p>
                    </div>
                    <div className='LoginBoxBottomText2'>
                      <p><span onClick={() => nav("/signup")}>Signup</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;