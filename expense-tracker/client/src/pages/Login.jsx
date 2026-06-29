import {useState} from "react";
import { login } from "../services/authService";
import {Link, useNavigate} from "react-router-dom"; 

function Login(){
    const navigate=useNavigate();
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const data = await login({email,password})
            localStorage.setItem("token",data.token);
            localStorage.setItem("user",JSON.stringify(data.data));
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    }
      return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h1 className="text-3xl font-bold mb-6">
                Login
                </h1>

                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                className="border border-gray-300 p-2.5 rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                className="border border-gray-300 p-2.5 rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />

                <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg w-full transition-colors"
                >
                Login
                </button>
                <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="text-blue-500 font-bold"
                >
                    Register
                </Link>
                </p>
            </form>
            </div>
        );
    }

export default Login;
