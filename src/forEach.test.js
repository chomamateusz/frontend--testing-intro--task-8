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

        const mockCallback = jest.fn(
            // (...rest) => console.log('I\'m inside mock call', ...rest)
        )

        numbers.forEach(mockCallback)

        // expect(mockCallback.mock.calls.length).toBe(numbers.length)
        expect(mockCallback).toHaveBeenCalledTimes(numbers.length)

    })

    it('should call callback function X times for X length array v2', () => {

        const names = ['Ala', 'Ola', 'Ela']

        const mockCallback = jest.fn(
            (...rest) => console.log('I\'m inside mock call', ...rest)
        )

        names.forEach(mockCallback)

        expect(mockCallback).toHaveBeenCalledTimes(names.length)

    })

})