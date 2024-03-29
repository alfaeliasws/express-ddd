const sentence = "Saya sangat senang mengerjakan soal algoritma"

function longest(sentence){
    const result = sentence.split(" ").sort((a,b)=> {return b.length - a.length})

    return `${result[0]}: ${result[0].length} character`
}

console.log(longest(sentence)) 