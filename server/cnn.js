const insertKeywords = require("./utils/keywords");

const SPORT_SELECTOR = ".container__field-links.container_lead-plus-headlines__field-links .container__item";
const RANDOM_SELECTOR = ".zn__containers .column.zn__column--idx-1 .cn.cn-list-hierarchical-small-horizontal.cn--idx-1 li .cd__wrapper";
const TECH_SELECTOR = ".container.container_lead-plus-headlines-with-images .container__field-links .container__item";
const AFICA_SELECTOR = ".column li .cd.cd--card .cd__wrapper";



const getCNNSport = async (page) => {
    await page.goto("https://edition.cnn.com/sport");

    let sports = await page.$$eval(SPORT_SELECTOR, (list) => {
        return list.map((item) => {
            const link = item.querySelector('a').href;
            const title = item.querySelector('a .container__text .container__headline').textContent.trim();
            return { title, link, source: "CNN" };
        })
    })

    sports = sports.map(insertKeywords);

    return sports;
}

const getCNNRandom = async (page) => {

    let randomStories = await page.$$eval(RANDOM_SELECTOR, (list) => {
        return list.map((item) => {
            const link = item.querySelector('.media a').href;
            const title = item.querySelector('.cd__content .cd__headline').textContent.trim();
            const imgElem = item.querySelector('.media img.media__image');
            if (!imgElem) {
                return null
            }
            let img = imgElem.src;
            const datasrc = imgElem.dataset.srcMedium;
            if (datasrc) {
                img = 'https:' + datasrc;
            }
            return { title, link, img, source: "CNN" }
        }).filter(data => data);
    })

    randomStories = randomStories.map(insertKeywords);

    return randomStories;
}

const getCNNTech = async (page) => {

    await page.goto("https://edition.cnn.com/business/tech");

    const tech = await page.$$eval(TECH_SELECTOR, (list) => {
        return list.map((item) => {
            const link = item.querySelector('a').href;
            const title = item.querySelector('.container__text .container__headline').textContent.trim();
            const imgElem = item.querySelector('.container__item-media-wrapper .image__container .image__picture img');
            if (!imgElem) {
                return null
            }
            let img = imgElem.src;
            const datasrc = imgElem.dataset.srcMedium;
            if (datasrc) {
                img = 'https:' + datasrc;
            }
            return { title, link, img }
        }).filter(data => data);
    })

    return tech;
}

const getCNNAfrica = async (page) => {

    await page.goto("https://edition.cnn.com/africa");

    const africa = await page.$$eval(AFICA_SELECTOR, (list) => {
        return list.map((item) => {
            const link = item.querySelector('.media a')?.href;
            if(!link || link.includes('/videos/')){
                //The '.media' wrapper does not exist (text only stories) or links to a video
                return null;
            }
            const title = item.querySelector('.cd__content .cd__headline').textContent.trim();
            const imgElem = item.querySelector('.media img.media__image');
            if (!imgElem) {
                return null
            }
            let img = imgElem.src;
            const datasrc = imgElem.dataset.srcMedium;
            if (datasrc) {
                img = 'https:' + datasrc;
            }
            return { title, link, img }
        }).filter(data => data);
    })

    return africa;
}


const getFromCNN = async (browser) => {
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({
        width: 1024,
        height: 768
    })

    await page.goto("https://edition.cnn.com");

    const randomStories = await getCNNRandom(page);
    const techStories = await getCNNTech(page);  //Tech Page Redirects as Well
    const sports = await getCNNSport(page);  //Sports Must Be last since they go to a different page
    const africa = await getCNNAfrica(page); //Africa has a new page

    return { randomStories, techStories, sportStories: sports, africanStories: africa }
}

module.exports = getFromCNN ;