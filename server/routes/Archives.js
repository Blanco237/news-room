const express = require('express');
const router = express.Router();
const sequelize = require("sequelize");

const { Random } = require('../models');

router.get('/', async (req, res) => {
    try {
        const data = await Random.findAll({
            attributes: [
                // specify an array where the first element is the SQL function and the second is the alias
                [sequelize.fn('DISTINCT', sequelize.col('createdAt')), 'dates'],
            ]
        });

        res.json(data)
    }
    catch (e) {
        res.status(400).json({error: e.message});
    }
})

module.exports = router;