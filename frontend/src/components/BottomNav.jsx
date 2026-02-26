import { Home, LineChart, Bell, User } from 'lucide-react';

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 w-full bg-[#110e17]/90 backdrop-blur-xl border-t border-white/5 py-3 px-6 pb-6 sm:pb-3 flex justify-between items-center z-50 rounded-t-3xl sm:rounded-none sm:justify-center sm:gap-16">
            <button className="flex flex-col items-center gap-1 text-[#a78bfa]">
                <Home size={24} />
                <span className="text-[10px] font-medium">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
                <LineChart size={24} />
                <span className="text-[10px] font-medium">Stats</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
                <Bell size={24} />
                <span className="text-[10px] font-medium">Alerts</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
                <User size={24} />
                <span className="text-[10px] font-medium">Profile</span>
            </button>
        </div>
    );
};

export default BottomNav;
