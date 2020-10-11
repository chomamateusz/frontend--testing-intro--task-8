import myOwnForEach from './myOwnForEach'

describe('myOwnForEach test', () => {

    it('should call callback function X times for X length array v1', () => {

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        const mockCallback = jest.fn(
            // (...rest) => console.log('I\'m inside mock call', ...rest)
        )

        myOwnForEach(numbers, mockCallback)

        // expect(mockCallback.mock.calls.length).toBe(numbers.length)
        expect(mockCallback).toHaveBeenCalledTimes(numbers.length)

    })

    it('should call callback function X times for X length array v2', () => {

        const names = ['Ala', 'Ola', 'Ela']

        const mockCallback = jest.fn(
            // (...rest) => console.log('I\'m inside mock call', ...rest)
        )

        myOwnForEach(names, mockCallback)

        expect(mockCallback).toHaveBeenCalledTimes(names.length)

    })

    it('should always call callback function X times for X length array', () => {

        const names = ['Ala', 'Ola', 'Ela']

        const mockCallback = jest.fn()

        myOwnForEach(names, mockCallback)

        expect(mockCallback).toHaveBeenCalledTimes(names.length)

        mockCallback.mockReset()

        myOwnForEach(names, mockCallback)

        expect(mockCallback).toHaveBeenCalledTimes(names.length)

        mockCallback.mockReset()

        myOwnForEach(names, mockCallback)

        expect(mockCallback).toHaveBeenCalledTimes(names.length)

    })

    it('should call callback function with element, index and array', () => {

        const names = ['Ala', 'Ola', 'Ela']

        const mockCallback = jest.fn()

        myOwnForEach(names, mockCallback)

        expect(mockCallback.mock.calls[0]).toEqual(['Ala', 0, ['Ala', 'Ola', 'Ela']])
        expect(mockCallback.mock.calls[1]).toEqual(['Ola', 1, ['Ala', 'Ola', 'Ela']])
        expect(mockCallback.mock.calls[2]).toEqual(['Ela', 2, ['Ala', 'Ola', 'Ela']])

    })

})