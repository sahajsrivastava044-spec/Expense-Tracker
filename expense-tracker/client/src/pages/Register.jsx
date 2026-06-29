import {useState} from "react";
import { register } from "../services/authService";
import {Link, useNavigate} from "react-router-dom"; 

function Register(){
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            await register({name,email,password});
            alert("Register successful! Please login.");
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    }
      return (
            <div className="min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h1 className="text-3xl font-bold mb-6">
                Register
                </h1>

                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
                />

                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
                />

                <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                Register
                </button>
                <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-500 font-bold"
                >
                    Login
                </Link>
                </p>            
            </form>
            </div>
        );
    }

export default Register;
