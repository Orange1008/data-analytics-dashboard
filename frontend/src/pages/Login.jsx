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
            navigate('/');
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
                className="hidden lg:flex w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0f] via-transparent to-transparent opacity-80"></div>

                <div className="absolute top-10 left-12 flex items-center gap-4 text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">A Wise Quote</span>
                    <div className="h-px w-10 bg-white/30"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-end p-16 pb-24 h-full">
                    <h1 className="text-6xl font-serif text-white leading-tight mb-6">
                        Get<br />
                        Everything<br />
                        You Want
                    </h1>
                    <p className="text-gray-300 text-sm max-w-sm opacity-80 leading-relaxed font-light">
                        You can get everything you want if you work hard, trust the process, and stick to the plan.
                    </p>
                </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 xl:px-32 py-12 relative">
                {/* Global Logo */}
                <div className="absolute top-10 left-0 right-0 lg:right-auto lg:left-0 flex justify-center w-full">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Layers size={18} className="stroke-[2.5]" />
                        <span className="font-semibold text-sm tracking-tight text-[#1f2937]">Cogie</span>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto mt-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-serif text-[#1f2937] tracking-tight mb-2">Welcome Back</h2>
                        <p className="text-sm text-gray-400 font-light">Enter your email and password to access your account</p>
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
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
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
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
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
