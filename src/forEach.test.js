const makeTest = () => {
    let numberOfCalls = 0

    const test = (el, i, arr) => {
        numberOfCalls = numberOfCalls + 1
    }
    const get = () => numberOfCalls

    return { test, get }
}

describe('Array.prototype.forEach', () => {

    it('should call callback function X times for X length array v1', () => {

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        const mockCallback = jest.fn()

        console.log(mockCallback.mock)
        
        numbers.forEach(mockCallback)

        console.log(mockCallback.mock)

        expect(mockCallback.mock.calls.length).toBe(numbers.length)

    })

    it('should call callback function X times for X length array v2', () => {

        const names = ['Ala', 'Ola', 'Ela']

        const { test, get } = makeTest()

        names.forEach(test)

        expect(get()).toBe(names.length)

    })

})