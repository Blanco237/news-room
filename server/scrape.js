const puppeteer = require('puppeteer');
const fs = require('fs')



const scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({
        width: 1024,
        height: 768
    })

    await page.goto("https://www.bbc.com/travel/article/20230126-the-return-of-the-spirit-horse-to-canada");

    const content = await page.$eval('article.ssrcss-pv1rh6-ArticleWrapper', (el) => {

        const removeNode = (parent, child) => {
            if (child) {
                parent.removeChild(child);
            }
        }

        const links = el.querySelector('.ssrcss-5i1hhv-LinksComponentWrapper');
        const ad = el.querySelector('.piano-inline1');
        const comments = el.querySelector('.ssrcss-1eie7z2-CommentsWrapper');
        const related = el.querySelector('.ssrcss-2z3pjz-SectionWrapper');

        removeNode(el, links);
        removeNode(el, ad);
        removeNode(el, comments);
        removeNode(el, related);

        return el.innerHTML
    });

    fs.writeFileSync('page.html', content);
    console.log("Done");
}

scrape();