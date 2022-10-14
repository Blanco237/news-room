const express = require("express");
const router = express.Router();

const { Tech } = require("../models");

router.get('/', async (req, res) => {
    try{
        const data = await Tech.findAll();
        res.json(data);
    }
    catch(e){
        res.status(400).json({ error: e.message });
    }
});

module.exports = router;