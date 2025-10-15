import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ name, email, password });
        // handle registration logic here
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 px-4 py-10 ">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
                    <span className="text-primary">Register</span>
                </h1>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

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

                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link to="/account/login" className="text-blue-900 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
