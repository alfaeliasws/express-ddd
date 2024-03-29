INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']

function queryCounter(input,query){

    let result = []

    let counter = 0

    for(let i = 0; i < query.length; i++){
        for(let j = 0; j < input.length; j++){
            if(input[j] === query[i]){
                counter++
            }
        }
    result.push(counter)
    counter = 0
    }

    return result

}

console.log(queryCounter(INPUT, QUERY)) 