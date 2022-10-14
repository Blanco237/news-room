const puppeteer = require('puppeteer');
const getFromBBC = require('./bbc');
const getFromCNN = require('./cnn');''


const crawler = async () => {

        const browser = await puppeteer.launch({ headless: false });

        const BBC = await getFromBBC(browser);

        const CNN = await getFromCNN(browser);

        await browser.close();

        return { BBC, CNN };
}

module.exports = crawler;