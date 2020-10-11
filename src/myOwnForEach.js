export const myOwnForEach = function (array, callback) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const index = i

        callback(element, index, array)
    }

}

export default myOwnForEach