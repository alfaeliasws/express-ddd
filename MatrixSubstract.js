const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

function matrixDiagSub(matrix){
    if(matrix[0].length != matrix.length){
        return "Invalid matrix"
    }

    let result = 0

    for(let i = 0; i < matrix.length; i++){
        result += matrix[i][i]
    }

    for(let i = 0;i < matrix.length; i++){
        for(let j = 0;j < matrix.length; j++){
            if(i + j === matrix.length-1){
                result -= matrix[i][j]
            }
        }
    }

    return result
}

console.log(matrixDiagSub(Matrix)) 