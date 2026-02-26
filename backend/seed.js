const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const DataRecord = require('./models/DataRecord');
const bcrypt = require('bcryptjs');

dotenv.config();

connectDB();


const importData = async () => {
    try {
        await DataRecord.deleteMany();
        await User.deleteMany();

        // Create a default admin user
        await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'password123'
        });

        const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];
        const statuses = ['Pending', 'Completed', 'Cancelled'];

        const sampleData = [];

        // Generate 100 random records for the past 6 months
        for (let i = 0; i < 100; i++) {
            const randomDate = new Date(Date.now() - Math.floor(Math.random() * 180 * 24 * 60 * 60 * 1000));
            const category = categories[Math.floor(Math.random() * categories.length)];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const revenue = Math.floor(Math.random() * 5000) + 100;
            const sales = Math.floor(Math.random() * 100) + 10;
            const productsSold = Math.floor(Math.random() * 50) + 5;
            const profit = revenue * (Math.random() * 0.4 + 0.1); // 10% to 50% profit margin
            const customers = Math.floor(Math.random() * 50) + 1;

            sampleData.push({
                date: randomDate,
                category,
                status,
                revenue,
                sales,
                productsSold,
                profit,
                customers
            });
        }

        await DataRecord.insertMany(sampleData);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
