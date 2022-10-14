const express = require('express');
const router = express.Router();

const { MostRead } = require('../models');

router.get('/', async (req, res) => {
    try {
        const data = await MostRead.findAll();
        res.json(data);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = router;