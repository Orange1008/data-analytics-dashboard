const DataRecord = require('../models/DataRecord');

// @desc    Get all data records with optional filtering
// @route   GET /api/data
// @access  Private
const getData = async (req, res) => {
    try {
        const { category, status, startDate, endDate } = req.query;

        let query = {};

        // Filter by Category
        if (category) {
            query.category = category;
        }

        // Filter by Status
        if (status) {
            query.status = status;
        }

        // Filter by Date Range
        if (startDate || endDate) {
            query.date = {};
            if (startDate) {
                query.date.$gte = new Date(startDate);
            }
            if (endDate) {
                query.date.$lte = new Date(endDate);
            }
        }

        const records = await DataRecord.find(query).sort({ date: 1 });

        // Calculate aggregate metrics for charts
        const totalRevenue = records.reduce((acc, curr) => acc + curr.revenue, 0);
        const totalSales = records.reduce((acc, curr) => acc + curr.sales, 0);
        const totalProfit = records.reduce((acc, curr) => acc + curr.profit, 0);
        const totalCustomers = records.reduce((acc, curr) => acc + curr.customers, 0);

        res.json({
            success: true,
            count: records.length,
            summary: {
                totalRevenue,
                totalSales,
                totalProfit,
                totalCustomers
            },
            data: records
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getData };
