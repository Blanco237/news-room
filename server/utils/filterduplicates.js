
const filterduplicates = (arr) => {
    const filteredArr = arr.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.title === value.title && t.link === value.link
        ))
    )

    return filteredArr;
}

module.exports = filterduplicates;