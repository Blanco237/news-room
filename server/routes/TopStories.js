const express = require('express');
const router = express.Router();

const { Random, Full } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dataFromCNN = await Random.findAll({
            where: {
                source: "CNN"
            }
        });
        const dataFromBBC = await Random.findAll({
            where: {
                source: "BBC"
            },
            offset: 5
        });

        const data = [...dataFromBBC, ...dataFromCNN].sort(() => Math.random() - 0.5);
        res.json(data);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = router;