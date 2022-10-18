
const { Africa, Full, MostRead, Random, Sport, Tech } = require("./models");
const filterduplicates = require("./utils/filterduplicates");

const saveData = async ({ BBC, CNN }) => {
    try {
        try{
            await MostRead.bulkCreate(filterduplicates(BBC.mostRead));
        }catch(e) {
            console.error(e);
        }
        await Random.bulkCreate(filterduplicates([...BBC.randomStories, ...CNN.randomStories])) 
        await Full.bulkCreate(filterduplicates(BBC.fullStories));
        await Sport.bulkCreate(filterduplicates([...BBC.sportStories, ...CNN.sportStories]));
        await Tech.bulkCreate(filterduplicates(CNN.techStories));
        await Africa.bulkCreate(filterduplicates(CNN.africanStories));
        console.log(`All data saved`);
    }
    catch(e) {
        console.error(`Error:: ${e.message}`);
    }
}

module.exports = saveData;