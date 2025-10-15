import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    const [email, setEmail] = useState('');
    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        
        if (email) {
            alert(`Subscribed with: ${email}`);
        }
    };

    return (
        <footer className="bg-blue-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        <span className="text-primary">True</span>Style
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Discover the latest trends in fashion at TrueStyle.
                        Your go-to destination for premium and stylish apparel.
                    </p>

                    <div className="flex space-x-4 mt-4">
                        <Link to={'/'} className="hover:text-primary transition"><FaFacebookF /></Link>
                        <Link to={'/'} className="hover:text-primary transition"><FaTwitter /></Link>
                        <Link to={'/'} className="hover:text-primary transition"><FaInstagram /></Link>
                        <Link to={'/'} className="hover:text-primary transition"><FaPinterestP /></Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to={'/'} className="hover:text-primary transition">About Us</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Shop</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Blog</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to={'/'} className="hover:text-primary transition">FAQs</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Returns</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Shipping Info</Link></li>
                        <li><Link to={'/'} className="hover:text-primary transition">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Join Our Newsletter</h3>
                    <p className="text-sm mb-3">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form className="flex" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-l-md outline-none text-gray-800 bg-white"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-900 px-4 py-2 rounded-r-md hover:bg-blue-900 hover:text-white transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} <span className="text-white font-medium">TrueStyle</span>. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
