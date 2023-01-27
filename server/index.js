const express = require("express");
const cors = require("cors");
const cron = require('node-cron');


const app = express();

app.use(express.json());
app.use(cors());


/*Database Tables Import */
const db = require('./models');
const crawler = require("./crawler");
const saveData = require("./saveData");

/*Router Imports */
const africaRouter = require('./routes/Africa');
const latestRouter = require('./routes/LatestNews');
const mainRouter = require('./routes/Main');
const sportRouter = require('./routes/Sport');
const spotlightRouter = require('./routes/Spotlight');
const techRouter = require('./routes/Tech');
const topstoriesRouter = require('./routes/TopStories');
const archiveRouter = require('./routes/Archives');
const storyRouter = require('./routes/Story');

/** Routing setup **/
app.use('/africa', africaRouter);
app.use('/latest', latestRouter);
app.use('/main', mainRouter);
app.use('/sport', sportRouter);
app.use('/spotlight', spotlightRouter);
app.use('/tech', techRouter);
app.use('/top-stories', topstoriesRouter);
app.use('/archive', archiveRouter);
app.use('/story', storyRouter);



const port = process.env.PORT || 5500;

db.sequelize.sync().then(async () => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })

    cron.schedule('0 9 * * *', async () => {
        //Will run everyday at 9am
        try {
            // Starting the Crawler and getting data
            const crawlData = await crawler();
    
            //Saving to Database
            await saveData(crawlData);
            
        } catch (e) {
            console.error(`Error:: ${e.message}`);
        }
    })

})