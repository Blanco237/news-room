const express = require('express');
const router = express.Router();

const { Africa, Full, MostRead, Random, Sport, Tech } = require('../models');

const tObj = {
    "africa": Africa,
    "full": Full,
    "mostread": MostRead,
    "random": Random,
    "sport": Sport,
    "tech": Tech
}

router.get('/:table/:id', async (req, res) => {
    const Table = tObj[req.params.table];
    const id = req.params.id;
    try {
        const data = await Table.findByPk(id);
        res.json(data);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = router;