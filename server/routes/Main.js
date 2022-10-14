const express = require("express");
const router = express.Router();

const { Random } = require('../models');


router.get('/', async (req, res) => {
    try {
        const data = await Random.findAll({
            where: {
                source: "BBC"
            }, limit: 3
        });
        res.json(data);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = router;