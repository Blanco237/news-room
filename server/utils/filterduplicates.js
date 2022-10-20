
const oldfilterduplicates = (arr) => {
    const filteredArr = [...new Map(arr.map(v => [v.link, v])).values()]

    return filteredArr;
}

const filterduplicates = (arr) => {
    const existing = [];
    const filtered = arr.map((obj) => {
        if(existing.includes(obj.title)){
            return null;
        }
        existing.push(obj.title);
        return obj;
    }).filter(obj => obj);

    return filtered;
}

// const objs = [
//     {title: "Blanco", name: "Randy"},
//     {title: "Randy", name: "Blanco "},
//     {title: "Blanco", name: "Asong"},
//     {title: "Randy", name: "Atem"}
// ]

// console.log(filterduplicates(objs));

module.exports = filterduplicates;