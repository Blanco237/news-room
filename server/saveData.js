
const { Africa, Full, MostRead, Random, Sport, Tech } = require("./models");

const saveData = async ({ BBC, CNN }) => {
    try {
        await Random.bulkCreate([...BBC.randomStories, ...CNN.randomStories]) 
        await Full.bulkCreate(BBC.fullStories);
        await MostRead.bulkCreate(BBC.mostRead);
        await Sport.bulkCreate([...BBC.sportStories, ...CNN.sportStories]);
        await Tech.bulkCreate(CNN.techStories);
        await Africa.bulkCreate(CNN.africanStories);
        console.log(`All data saved`);
    }
    catch(e) {
        console.log(`Error:: ${e.message}`);
    }
}

module.exports = saveData;