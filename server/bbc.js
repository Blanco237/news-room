const insertKeywords = require("./utils/keywords");

const MOST_READ_SELECTOR = "div.nw-c-most-read__items.gel-layout.gel-layout--no-flex > ol li a";
const FULL_STORY_SELECTOR = ".nw-c-full-story .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item";
const RANDOM_SELECTOR = ".nw-c-around-the-bbc .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item";
const SPORT_SELECTOR = ".nw-c-sport .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item";


const getBBCMostRead = async (page) => {
    const mostRead = await page.$$eval(MOST_READ_SELECTOR, (lists) => {
        return lists.map((item) => { return { 'title': item.textContent, 'link': item.href } });
    });

    return mostRead;
}

const getBBCFullStory = async (page) => {
    let fullStories = await page.$$eval(FULL_STORY_SELECTOR, (lists) => {
        return lists.map((item) => {
            const imgElem = item.querySelector('.gs-c-promo-image .gs-o-media-island .gs-o-responsive-image img');
            let img = imgElem.src;
            const datasrc = imgElem.dataset.src;
            if (datasrc) {
                img = datasrc.replace("{width}", "573");
            }
            const title = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').textContent;
            const link = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').href;

            return { img, title, link };
        })
    })

    fullStories = fullStories.map(insertKeywords);

    return fullStories;
}

const getBBCRandom = async (page) => {
    let randomStories = await page.$$eval(RANDOM_SELECTOR, (lists) => {
        return lists.map((item) => {
            const imgElem = item.querySelector('.gs-c-promo-image .gs-o-media-island .gs-o-responsive-image img');
            let img = imgElem.src;
            const datasrc = imgElem.dataset.src;
            if (datasrc) {
                img = datasrc.replace("{width}", "573");
            }
            const title = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').textContent;
            const link = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').href;

            return { img, title, link };
        })
    })

    randomStories = randomStories.map(insertKeywords);

    return randomStories;
}

const getBBCSport = async (page) => {
    let sportStories = await page.$$eval(SPORT_SELECTOR, (lists) => {
        return lists.map((item) => {
            const imgElem = item.querySelector('.gs-c-promo-image .gs-o-media-island .gs-o-responsive-image img');
            let img = imgElem.src;
            const datasrc = imgElem.dataset.src;
            if (datasrc) {
                img = datasrc.replace("{width}", "573");
            }
            const title = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').textContent;
            const link = item.querySelector('.gs-c-promo-body .gs-c-promo-heading').href;

            return link.includes('/live/')? null : { img, title, link };
        }).filter((item) => item);
    })

    sportStories = sportStories.map(insertKeywords);

    return sportStories;
}



const getFromBBC = async (browser) => {
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({
        width: 1024,
        height: 768
    })
    await page.goto("https://www.bbc.com/news");

    const mostRead = await getBBCMostRead(page);
    const fullStories = await getBBCFullStory(page);
    const randomStories = await getBBCRandom(page);
    const sportStories  = await getBBCSport(page);

    return { mostRead, fullStories, randomStories, sportStories }
}

module.exports =  getFromBBC;