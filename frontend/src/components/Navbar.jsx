import { useAuth } from '../context/AuthContext';
import { LogOut, User, Calendar, Filter, ChevronDown, Menu } from 'lucide-react';

const Navbar = ({ filters, setFilters, toggleSidebar }) => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white dark:bg-[#181c25] shadow-soft border-b border-gray-100 dark:border-[#262A36] z-30 sticky top-0 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side: Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button onClick={toggleSidebar} className="md:hidden text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 bg-[#1f2937] dark:bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg leading-none mt-0.5">D</span>
                            </div>
                            <span className="text-lg font-bold text-[#1f2937] dark:text-white tracking-tight hidden sm:block">
                                DataDash
                            </span>
                        </div>
                    </div>

                    {/* Middle section removed to use dedicated Filters component in Dashboard */}
                    <div className="hidden md:flex items-center gap-4 px-6">
                        {/* Space reserved for search or other future navbar items */}
                    </div>

                    {/* Right side: User Profile */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-gray-200 dark:border-gray-700">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-[#1f2937] dark:text-white leading-tight">{user?.name || 'Admin User'}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Workspace Owner</p>
                            </div>
                            <div className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                <User size={18} className="text-gray-500 dark:text-gray-400" />
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-smooth p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                            title="Sign out"
                        >
                            <LogOut size={18} />
                            <span className="text-sm font-medium hidden sm:block">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
