describe('Array.prototype.forEach', () => {

    it('should call callback function X times for X length array v1', () => {

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        let numberOfCalls = 0

        numbers.forEach((el, i, arr) => {
            numberOfCalls = numberOfCalls + 1
        })

        expect(numberOfCalls).toBe(numbers.length)

    })

    it('should call callback function X times for X length array v2', () => {

        const names = ['Ala', 'Ola', 'Ela']

        let numberOfCalls = 0

        names.forEach((el, i, arr) => {
            numberOfCalls = numberOfCalls + 1
        })

        expect(numberOfCalls).toBe(names.length)

    })

})