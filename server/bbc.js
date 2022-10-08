const getBBCMostRead = async (page) => {
    const mostRead = await page.$$eval("div.nw-c-most-read__items.gel-layout.gel-layout--no-flex > ol li a", (lists) => {
        return lists.map((item) => { return { 'title': item.textContent, 'link': item.href } });
    });

    return mostRead;
}

const getBBCFullStory = async (page) => {
    const fullStories = await page.$$eval(".nw-c-full-story .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item", (lists) => {
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

    return fullStories;
}

const getBBCRandom = async (page) => {
    const randomStories = await page.$$eval(".nw-c-around-the-bbc .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item", (lists) => {
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

    return randomStories;
}

const getBBCSport = async (page) => {
    const randomStories = await page.$$eval(".nw-c-sport .gel-wrap .gel-layout.gel-layout--no-flex .gel-layout__item", (lists) => {
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

    return randomStories;
}



const getFromBBC = async (browser) => {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto("https://www.bbc.com/news");

    // const mostRead = await getBBCMostRead(page);
    // const fullStories = await getBBCFullStory(page);
    // const randomStories = await getBBCRandom(page);
    const sportStories  = await getBBCSport(page);

    // console.log('Most Read');
    // console.log(mostRead);
    // console.log('Full Stories');
    // console.log(fullStories);
    // console.log("Random Stories");
    // console.log(randomStories);
    console.log("Filtered Sports Stories");
    console.log(sportStories);
}

module.exports =  getFromBBC;