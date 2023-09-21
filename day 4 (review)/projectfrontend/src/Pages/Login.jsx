import { useState } from 'react';
import '../Assets/css/Login.css'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function Login() {
    const nav = useNavigate();
    const [error, setError] = useState({})
    const [login, setLogin] = useState(
        {
            username: "",
            password: ""
        }
    )
    
    const handleChange = (e) => {
        setLogin({...login, [e.target.id]:e.target.value})
    };
    const handleClick = (e) => {
        e.preventDefault();
        setError({});
        let validationErrors ={}
        if (!login.username.trim()) {
            validationErrors.username = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(login.username)) {
            validationErrors.username = "Email is invalid";
        }
        if (!login.password.trim()) {
            validationErrors.password = "Password is required";
        }
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            nav("/home");   
            toast.success('Login Successful');
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
                    <form className="LoginForm" onSubmit={handleClick}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Email"
                        />
                        {error.username && <span className='ErrorMsg'>{error.username}</span>}
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {error.password && <span className='ErrorMsg'>{error.password}</span>}
                        <button onClick={handleClick}>Sign In</button>
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





