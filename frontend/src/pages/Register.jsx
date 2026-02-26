import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Layers, Loader2 } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0); // 0-3
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        let strength = 0;
        if (password.length > 5) strength += 1;
        if (password.length > 8 && /[A-Z]/.test(password)) strength += 1;
        if (password.length > 8 && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    }, [password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!termsAccepted) {
            setError('Please accept the Terms of Service to continue.');
            return;
        }

        setLoading(true);

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password,
            });
            login(data);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create account.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Side: Graphic Element */}
            <div
                className="hidden lg:flex w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop')" }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0f] via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-10 left-12 flex items-center gap-4 text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">A Wise Quote</span>
                    <div className="h-px w-10 bg-white/30"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-end p-16 pb-24 h-full w-full">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md">
                        <h1 className="text-4xl font-serif text-white leading-tight mb-4">
                            Start<br />
                            For Free
                        </h1>
                        <p className="text-gray-200 text-sm opacity-90 leading-relaxed font-light">
                            Join thousands of data-driven teams. Experience exactly what we have to offer without complex pricing upfront.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 xl:px-32 py-12 relative overflow-y-auto">
                {/* Global Logo */}
                <div className="absolute top-10 left-0 right-0 lg:right-auto lg:left-0 flex justify-center w-full">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Layers size={18} className="stroke-[2.5]" />
                        <span className="font-semibold text-sm tracking-tight text-[#1f2937]">Cogie</span>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto mt-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-serif text-[#1f2937] tracking-tight mb-2">Create an account</h2>
                        <p className="text-sm text-gray-400 font-light">Enter your info below to get started</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                <p className="text-sm text-red-600 font-medium">{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
                                placeholder="Jane Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">Work Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f2937]/10 focus:bg-white focus:border-gray-200 transition-smooth"
                                placeholder="jane@company.com"
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
                                placeholder="Create a secure password"
                            />
                            {password.length > 0 && (
                                <div className="mt-2 flex gap-1 h-1 w-full opacity-80">
                                    <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 1 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
                                    <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 2 ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
                                    <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 3 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
                                </div>
                            )}
                        </div>

                        <div className="flex items-start pt-1">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                className="h-4 w-4 mt-0.5 text-[#1f2937] focus:ring-[#1f2937] border-gray-300 rounded cursor-pointer"
                            />
                            <label htmlFor="terms" className="ml-2 block text-xs text-gray-500 cursor-pointer">
                                I agree to the <a href="#" className="font-medium text-[#1f2937] hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-[#1f2937] hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading || !termsAccepted}
                                className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-black hover:opacity-90 transition-opacity focus:outline-none disabled:opacity-70 disabled:hover:opacity-70"
                            >
                                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-xs text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#1f2937] font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
