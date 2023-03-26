const { fizzBuzz } = require('../index')

describe('Create the fizzBuzz method', function () {

    test('Should be return string', () => {
        const result = fizzBuzz(1)
        expect(typeof result).toBe('string');
    })

    test('When pass 3 as parameter it should be return "Fizz". ', () => {
        const result = fizzBuzz(3)
        expect(result).toBe('Fizz')
    })

    test('When pass 5 as parameter it should be return "Buzz".', () => {
        const result = fizzBuzz(5)
        expect(result).toBe('Buzz')
    })

    test('If the parameter equal to 3*5 it should be return "FizzBuzz"', () => {
        const result = fizzBuzz(3*5)
        expect(result).toBe('FizzBuzz')
    })

})

