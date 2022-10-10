const puppeteer = require('puppeteer');
const getFromBBC = require('./bbc');
const getFromCNN = require('./cnn');


(
    async () => {
        const browser = await puppeteer.launch({ headless: false });

        const BBC = await getFromBBC(browser);
        const CNN = await getFromCNN(browser);

        console.log("BBC");
        console.log(BBC.sportStories);
        console.log("CNN");
        console.log(CNN.sportStories);

        // console.log(BBC.sportStories);
    }
)();
