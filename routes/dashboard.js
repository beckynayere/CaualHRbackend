const express = require('express');
const router = express.Router();
const { Casual } = require('../models');

// Route to get the dashboard stats
router.get('/stats', async (req, res) => {
    try {
        // Fetch counts for active and inactive casuals
        const activeCasuals = await Casual.count({ where: { status: 'active' } });
        const inactiveCasuals = await Casual.count({ where: { status: 'inactive' } });
        
        // For now, hardcoded values for checked-in casuals and active shifts
        const checkedInCasuals = 17;  
        const activeShifts = 2;  

        // Prepare response with the counts
        res.json({
            activeCasuals,
            inactiveCasuals,
            checkedInCasuals,
            activeShifts,
            // Count casuals by gender
            genderDistribution: await Casual.findAll({
                attributes: ['gender', [sequelize.fn('count', sequelize.col('gender')), 'count']],
                group: ['gender']
            }),
            // Count casuals by department
            departmentDistribution: await Casual.findAll({
                attributes: ['department', [sequelize.fn('count', sequelize.col('department')), 'count']],
                group: ['department']
            })
        });
    } catch (error) {
        // Handle errors gracefully
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
