const express = require("express");
const router = express.Router();

const { Sport } = require('../models');

router.get('/cards', async (req, res) => {
    try {
        const data = await Sport.findAll({
            where: {
                source: "BBC"
            }
        });
        res.json(data);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
})

router.get('/text', async (req, res) => {
    try {
        const data = await Sport.findAll({
            where: {
                source: "CNN"
            }
        });
        res.json(data);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = router;