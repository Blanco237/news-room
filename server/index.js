const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());


/*Database Tables Import */
const db = require('./models');
const crawler = require("./crawler");
const saveData = require("./saveData");


const port = process.env.PORT || 5500;

db.sequelize.sync().then(async () => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })

    try {
        // Starting the Crawler and getting data
        const crawlData = await crawler();

        //Saving to Database
        await saveData(crawlData);
        
    } catch (e) {
        console.log(`Error:: ${e.message}`);
    }

})