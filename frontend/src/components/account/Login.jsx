import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
                    <span className="text-primary">Login</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <Link to="/forgot-password" className="hover:text-blue-900">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Login
                    </button>
                </form>

                
                {/* <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-gray-400 text-sm">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Facebook
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                        Google
                    </button>
                </div> */}

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <Link to="/account/register" className="text-blue-900 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
