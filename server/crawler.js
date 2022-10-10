const puppeteer = require('puppeteer');


(
    async () => {
        const browser = await puppeteer.launch({ headless: false });

        await getFromCNN(browser);

    }
)();



const getFromAljazeera = async (browser) => {
    
}