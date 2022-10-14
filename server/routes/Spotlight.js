const express = require('express');
const router = express.Router();

const { Full } = require('../models');

router.get('/', async (req, res) => {
    try {
        const data = await Full.findAll({ limit: 5 });
        res.json(data);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = router;