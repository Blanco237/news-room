
const { Africa, Full, MostRead, Random, Sport, Tech } = require("./models");
const filterduplicates = require("./utils/filterduplicates");

const saveData = async ({ BBC, CNN }) => {

    const mostRead = filterduplicates(BBC.mostRead);
    const randomStories = filterduplicates([...BBC.randomStories, ...CNN.randomStories]);
    const fullStories = filterduplicates(BBC.fullStories);
    const sportStories = filterduplicates([...BBC.sportStories, ...CNN.sportStories]);
    const techStories = filterduplicates(CNN.techStories);
    const africanStories = filterduplicates(CNN.africanStories);


    try {
        console.log(BBC.mostRead);
        console.log(`Filtered \n \n \n`);
        console.log();
        try{
            await MostRead.bulkCreate(mostRead);
        }catch(e) {
            console.error(e);
        }
        await Random.bulkCreate(randomStories) 
        await Full.bulkCreate(fullStories);
        await Sport.bulkCreate(sportStories);
        await Tech.bulkCreate(techStories);
        await Africa.bulkCreate(africanStories);
        console.log(`All data saved`);
    }
    catch(e) {
        console.error(e);
    }
}

module.exports = saveData;