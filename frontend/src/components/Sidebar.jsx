import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Box,
    Calendar,
    FolderClosed,
    Users,
    Bell,
    MessageSquare,
    Settings,
    Moon,
    ChevronDown,
    ChevronRight,
    LogOut,
    Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { logout } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isFilesOpen, setIsFilesOpen] = useState(false);

    const handleFeatureClick = (featureName) => {
        alert(`${featureName} feature coming soon!`);
    };

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`w-64 bg-[#181c25] h-screen border-r border-[#262A36] flex flex-col text-sm text-gray-400 font-medium z-40 fixed lg:relative transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                {/* Header / Logo */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-[#262A36]">
                    <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="bg-blue-500 rounded-lg p-1.5 flex items-center justify-center">
                            <Box size={18} className="text-white fill-white" />
                        </div>
                        <span className="font-bold text-base tracking-wide">DataDash</span>
                    </div>
                    {/* Mobile Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-gray-400 hover:text-white p-1"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-5 px-3 custom-scrollbar">
                    {/* Search Bar */}
                    <div className="mb-6 px-3">
                        <div className="relative group">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-[#202530] text-sm text-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] border border-transparent placeholder-gray-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <nav className="space-y-1">
                        <NavLink to="/" className={({ isActive }) => `flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-[#3b82f6] text-white' : 'hover:bg-[#202530] hover:text-white'}`}>
                            <div className="flex items-center gap-3">
                                <LayoutDashboard size={18} />
                                <span>Dashboard</span>
                            </div>
                        </NavLink>

                        <div onClick={() => handleFeatureClick('Products')} className="px-3 py-2.5 flex items-center justify-between rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors group">
                            <div className="flex items-center gap-3">
                                <Box size={18} />
                                <span>Products</span>
                            </div>
                            <ChevronRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div onClick={() => handleFeatureClick('Calendar')} className="px-3 py-2.5 flex items-center gap-3 rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors">
                            <Calendar size={18} />
                            <span>Calendar</span>
                        </div>

                        {/* Files Group (Collapsible) */}
                        <div>
                            <button
                                onClick={() => setIsFilesOpen(!isFilesOpen)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isFilesOpen ? 'hover:bg-[#202530] hover:text-white' : 'hover:bg-[#202530] hover:text-white'} ${isFilesOpen ? 'text-white' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <FolderClosed size={18} />
                                    <span>Files</span>
                                </div>
                                <ChevronDown size={14} className={`transition-transform duration-200 ${isFilesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Items */}
                            <div className={`overflow-hidden transition-all duration-300 ${isFilesOpen ? 'max-h-40 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-[2.25rem] pr-3 py-1.5 space-y-1 mb-2">
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleFeatureClick('Images'); }} className="block py-1.5 px-3 rounded-md hover:bg-[#262A36] hover:text-gray-200 text-sm transition-colors text-gray-500">Images</a>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleFeatureClick('Videos'); }} className="block py-1.5 px-3 rounded-md hover:bg-[#262A36] hover:text-gray-200 text-sm transition-colors text-gray-500">Videos</a>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleFeatureClick('Audio'); }} className="block py-1.5 px-3 rounded-md hover:bg-[#262A36] hover:text-gray-200 text-sm transition-colors text-gray-500">Audio</a>
                                </div>
                            </div>
                        </div>

                        <div className="py-2"></div> {/* Spacer */}

                        <div onClick={() => handleFeatureClick('Team')} className="px-3 py-2.5 flex items-center justify-between rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors group">
                            <div className="flex items-center gap-3">
                                <Users size={18} />
                                <span>Team</span>
                            </div>
                            <span className="bg-[#262A36] group-hover:bg-[#2d3240] transition-colors text-xs w-6 h-6 flex items-center justify-center rounded-full text-gray-300 font-semibold">3</span>
                        </div>

                        <div onClick={() => handleFeatureClick('Notifications')} className="px-3 py-2.5 flex items-center justify-between rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <Bell size={18} />
                                <span>Notifications</span>
                            </div>
                        </div>

                        <div className="px-3 py-2.5 flex items-center justify-between rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors group" onClick={() => handleFeatureClick("Chat")}>
                            <div className="flex items-center gap-3">
                                <MessageSquare size={18} />
                                <span>Chat</span>
                            </div>
                            <span className="bg-[#262A36] group-hover:bg-[#2d3240] transition-colors text-xs w-6 h-6 flex items-center justify-center rounded-full text-gray-300 font-semibold">8</span>
                        </div>

                        <div onClick={() => handleFeatureClick('Settings')} className="px-3 py-2.5 flex items-center gap-3 rounded-lg hover:bg-[#202530] hover:text-white cursor-pointer transition-colors mt-2">
                            <Settings size={18} />
                            <span>Settings</span>
                        </div>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="p-4 space-y-4">
                    {/* Dark Mode Toggle */}
                    <div className="flex items-center justify-between px-3 mb-2">
                        <div className="flex items-center gap-3 text-gray-400">
                            <Moon size={18} />
                            <span className="text-sm font-medium">Dark Mode</span>
                        </div>
                        {/* Toggle Switch */}
                        <div
                            onClick={toggleTheme}
                            className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center transition-colors duration-300 ${isDarkMode ? 'bg-[#3b82f6]' : 'bg-gray-600'}`}
                        >
                            <div className={`absolute w-3.5 h-3.5 bg-white rounded-full transition-transform duration-300 shadow-sm ${isDarkMode ? 'translate-x-4.5' : 'translate-x-1'}`}></div>
                        </div>
                    </div>

                    {/* User Profile matching the screenshot */}
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#202530] cursor-pointer transition-colors group mt-4">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="relative shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-sm">
                                    <img src="https://i.pravatar.cc/150?img=32" alt="Sweta" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#181c25]"></div>
                            </div>
                            <div className="flex gap-0.5 flex-col min-w-0">
                                <span className="text-sm font-semibold text-white truncate">Sweta</span>
                                <span className="text-[10px] text-gray-500 truncate">hunnybunny@gmail.com</span>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="text-gray-500 hover:text-red-400 transition-colors p-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100"
                            title="Sign Out"
                        >
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
