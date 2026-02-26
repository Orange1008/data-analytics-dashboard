import { Link } from 'react-router-dom';
import { BarChart3, PieChart, TrendingUp, Layers, ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30 overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Layers size={22} className="text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">DataDash</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to="/login" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                            Sign In
                        </Link>
                        <Link to="/register" className="bg-white text-black hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-8 backdrop-blur-md">
                        <Zap size={14} className="fill-blue-400/50" />
                        <span>DataDash v2.0 is now live</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Unleash the full potential of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            your business data.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Transform raw metrics into actionable insights. DataDash provides real-time visualization,
                        advanced filtering, and audience tracking to help you make smarter decisions instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 hover:gap-3 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                            Start Analyzing Now <ArrowRight size={18} />
                        </Link>
                        <Link to="/login" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-all backdrop-blur-sm">
                            View Live Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dashboard Mockup Display */}
            <section className="relative z-10 px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-2xl md:rounded-[2.5rem] p-2 md:p-4 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-50">
                        {/* Browser Window Chrome */}
                        <div className="flex items-center gap-2 px-4 pb-4 pt-2 mb-2 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            <div className="mx-auto bg-black/40 px-32 py-1.5 rounded-lg text-[10px] sm:text-xs text-gray-500 font-mono tracking-wider border border-white/5">
                                app.datadash.com
                            </div>
                        </div>

                        {/* Abstracted Dashboard UI Image */}
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="DataDash Interface Preview"
                            className="w-full aspect-video object-cover rounded-xl md:rounded-2xl opacity-90 mix-blend-screen filter contrast-125 saturate-50"
                        />

                        {/* Overlay elements for 'tech' feel */}
                        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Features Row */}
            <section id="features" className="relative z-10 py-24 bg-black/40 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="relative group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                                <BarChart3 className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Real-time Metrics</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Watch your revenue, user acquisition, and goal completions update in real-time. Never make a decision on stale data again.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                                <TrendingUp className="text-purple-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Audience Insights</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Deep dive into who your users are. Track behaviors, acquisition channels, and pinpoint exactly what drives growth.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                                <Shield className="text-emerald-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Bank-grade encryption ensures your business data remains strictly confidential. Robust JWT authentication protects every byte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 px-6 border-t border-white/10 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Layers size={20} className="text-blue-500" />
                        <span className="text-lg font-bold tracking-tight text-white">DataDash</span>
                    </div>
                    <p className="text-sm text-gray-500">© 2026 DataDash Analytics. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
