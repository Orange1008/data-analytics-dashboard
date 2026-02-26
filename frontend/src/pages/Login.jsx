import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Layers, Loader2 } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Side: Fluid Wave Graphic */}
            <div
                className="hidden lg:flex w-1/2 relative bg-[#0a0a0c] overflow-hidden"
            >
                {/* Simulated Data Points / Grid Background */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Glowing Orbs for that modern analytics feel */}
                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>

                <div className="absolute top-10 left-12 flex items-center gap-4 text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">Secure Access</span>
                    <div className="h-px w-10 bg-blue-500/50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-end p-16 pb-24 h-full">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                        Insights<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Unleashed</span>
                    </h1>
                    <p className="text-gray-400 text-base max-w-sm font-light leading-relaxed">
                        Log back in to view your live performance metrics, track real-time audience behavior, and accelerate your growth.
                    </p>
                </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 xl:px-32 py-12 relative">
                <div className="absolute top-10 left-0 right-0 lg:right-auto lg:left-0 flex justify-center w-full">
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
                            <Layers size={16} className="text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-[#1f2937]">DataDash</span>
                    </Link>
                </div>

                <div className="w-full max-w-md mx-auto mt-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#1f2937] mb-2">Welcome Back</h2>
                        <p className="text-sm text-gray-500 font-medium">Continue to your DataDash workspace</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                <p className="text-sm text-red-600 font-medium">{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#1f2937] focus:ring-[#1f2937] border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-500 cursor-pointer">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-xs">
                                <a href="#" className="font-medium text-[#1f2937] hover:underline">
                                    Forgot Password
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-black hover:opacity-90 transition-opacity focus:outline-none disabled:opacity-70 disabled:hover:opacity-70"
                            >
                                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Sign In'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-xs text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-[#1f2937] font-bold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
