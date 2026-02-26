import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, Legend
} from 'recharts';

// "Deliation" Dashboard Palette
const BLUE = '#7faadc';
const ORANGE = '#f3a977';
const TEAL = '#8ecacc';
const CHARCOAL = '#374151';
const LIGHT_GRAY = '#f3f4f6';

export const DashboardCharts = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 bg-white dark:bg-[#181c25] rounded-2xl shadow-soft">
                <p className="text-gray-500 dark:text-gray-400">No data available for the selected filters.</p>
            </div>
        );
    }

    // 1. Chart Data
    const timelineDataMap = data.reduce((acc, curr) => {
        const dateObj = new Date(curr.date);
        const month = dateObj.toLocaleString('default', { month: 'short' });
        if (!acc[month]) {
            acc[month] = { month, users: 0, orders: 0, revenue: 0 };
        }
        acc[month].users += curr.customers * 2;
        acc[month].orders += curr.sales;
        acc[month].revenue += curr.revenue;
        return acc;
    }, {});
    const timelineData = Object.values(timelineDataMap);

    const barData = timelineData.map(d => ({
        ...d,
        metricA: d.revenue / 2,
        metricB: d.revenue / 3,
        metricC: d.revenue / 4
    }));

    const pieData = [
        { name: 'Organic', value: 45, color: ORANGE },
        { name: 'Direct', value: 30, color: CHARCOAL },
        { name: 'Referral', value: 25, color: BLUE }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-[#1f2937] border border-gray-100 dark:border-gray-700 p-3 rounded-xl shadow-elevated">
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-1 font-medium">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                            <span className="text-sm font-semibold text-[#1f2937] dark:text-white">
                                {entry.value.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const ChartCard = ({ title, subtitle, children, colSpan = "col-span-1" }) => (
        <div className={`bg-white dark:bg-[#181c25] p-6 rounded-2xl shadow-soft border border-gray-100/50 dark:border-gray-800/50 flex flex-col h-[350px] ${colSpan}`}>
            <div className="mb-4">
                <h3 className="text-sm font-bold text-[#1f2937] dark:text-white tracking-wider">{title}</h3>
                {subtitle && <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{subtitle}</p>}
            </div>
            <div className="flex-1 w-full min-h-0">
                {children}
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Row 1: Area Chart (66%) and Doughnut Chart (33%) */}
            <ChartCard title="Revenue vs Users" subtitle="Metrics over time" colSpan="lg:col-span-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={BLUE} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={BLUE} stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={ORANGE} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={ORANGE} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={LIGHT_GRAY} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <RechartsTooltip content={<CustomTooltip />} cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} iconType="circle" />
                        <Area type="monotone" name="Active Users" dataKey="users" stroke={BLUE} strokeWidth={2} fillOpacity={1} fill="url(#colorBlue)" animationDuration={1000} />
                        <Area type="monotone" name="Total Revenue" dataKey="orders" stroke={ORANGE} strokeWidth={2} fillOpacity={1} fill="url(#colorOrange)" animationDuration={1000} />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Traffic Sources" colSpan="lg:col-span-1">
                <div className="h-full w-full relative pb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius="55%"
                                outerRadius="80%"
                                stroke="none"
                                dataKey="value"
                                animationDuration={1000}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <RechartsTooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ fontSize: '11px' }} iconType="circle" verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </ChartCard>

            {/* Row 2: Clustered Bar Chart and Single Bar Chart */}
            <ChartCard title="User Acquisition" colSpan="lg:col-span-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={LIGHT_GRAY} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} iconType="circle" />
                        <Bar name="New Users" dataKey="metricA" fill={TEAL} radius={[2, 2, 0, 0]} animationDuration={1000} barSize={12} />
                        <Bar name="Returning Users" dataKey="metricB" fill={ORANGE} radius={[2, 2, 0, 0]} animationDuration={1000} barSize={12} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Session Duration" colSpan="lg:col-span-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={LIGHT_GRAY} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} iconType="circle" />
                        <Bar name="Avg Session (mins)" dataKey="metricC" fill={BLUE} radius={[2, 2, 0, 0]} animationDuration={1000} barSize={16} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>

        </div>
    );
};

