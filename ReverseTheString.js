function reversion(string){
    const nums = string.match(/\d+/g)[0].split("");
    const letter = string.match(/[a-zA-Z]+/g)[0].split("").reverse();

    return `${letter.join("")}${nums.join("")}`
}


console.log(reversion("NEGIE1"))