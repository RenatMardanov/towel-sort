
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let newArr = []
    if (matrix.length > 0) {
        matrix.forEach((item, index) => {
            if ((index + 1) % 2 === 0) {
                item.reverse()
            }
        })
        matrix.forEach(element => {
            element.forEach(number => {
                newArr.push(number)
            })
        });
    } else if (matrix === undefined) {
        return newArr
    }
    return newArr
}
