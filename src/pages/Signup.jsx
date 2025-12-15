import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaRocket } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const inputVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const FormInput = ({ type, placeholder, value, onChange, icon: Icon, delay }) => (
    <motion.div 
        className="relative mb-6"
        variants={inputVariants}
        transition={{ delay: 0.3 + delay * 0.1 }} // Staggered animation
    >
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500" />
        <input
            type={type}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 shadow-lg"
            value={value}
            onChange={onChange}
            required
        />
    </motion.div>
);


export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Basic Client-Side Validation
    const validateForm = () => {
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return false;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    };

    
    const handleSubmit= async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        
        try {
            const response = await fetch("http://localhost:5000/Submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert("Account created successfully! Welcome, IT Astronaut.");
                // TODO: Add client-side redirection here (e.g., navigate('/dashboard'))
            } else {
                const errorData = await response.json();
                alert(`Submission failed: ${errorData.message || 'Server error'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert("Network error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-md w-full p-10 bg-slate-800 rounded-xl shadow-2xl shadow-cyan-500/10"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center">
                    <FaRocket className="mx-auto text-5xl text-cyan-500" />
                    <h2 className="mt-6 text-4xl font-extrabold text-white">
                        Initiate Launch Sequence
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Register your account to begin optimizing your cloud journey.
                    </p>
                </div>
                
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    
                    {/* Name Input */}
                    <FormInput 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        icon={FaUser}
                        delay={0}
                    />

                    {/* Email Input */}
                    <FormInput 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        icon={FaEnvelope}
                        delay={0.1}
                    />
                    
                    {/* Password Input */}
                    <FormInput 
                        type="password" 
                        placeholder="Password (Min 8 characters)" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        icon={FaLock}
                        delay={0.2}
                    />

                    {/* Confirm Password Input */}
                    <FormInput 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        icon={FaLock}
                        delay={0.3}
                    />

                    <p className="text-xs text-gray-500 pt-1 text-right">
                        By registering, you agree to our <a href="/terms" className="text-cyan-500 hover:text-cyan-400">Terms of Service</a>.
                    </p>

                    <motion.button
                        type="submit"
                        className={`w-full flex justify-center items-center py-3 border border-transparent rounded-lg shadow-sm text-lg font-bold text-slate-900 bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {isLoading ? (
                            <span className="animate-spin h-5 w-5 mr-3 border-b-2 border-slate-900 rounded-full"></span>
                        ) : (
                            <FaSignInAlt className="mr-3" />
                        )}
                        {isLoading ? 'Processing...' : 'Create Account'}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}