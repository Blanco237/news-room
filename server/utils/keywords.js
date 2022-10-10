//how to extract keywords from string in javascript?

const keywordExtractor = (text) => {
    const commonWords = ['i','a','about','an','and','are','as','at','be','by','com','de','en','for','from','how','in','is','it','la','of','on','or','that','the','this','to','was','what','when','where','who','will','with','und','the','www'];

    // replace unnesessary chararacters. leave only chars, numbers and space
    const workingText = text.toLowerCase().replace(/[^\w\d ]/g, '');

    // convert to array and remove all common words
    const result = workingText.split(' ').filter((word) => {
        return commonWords.indexOf(word) === -1;
    });

    const uniqueResult = Array.from(new Set(result));

    return uniqueResult;
}

const insertKeywords = (object) => {
    const keywords = keywordExtractor(object.title);
    object.keywords = keywords;

    return object;
}

module.exports = insertKeywords;