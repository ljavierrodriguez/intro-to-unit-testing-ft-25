const { sumar, restar, mayorTresNumeros } = require('./../functions');

describe('Validaciones sobre la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(sumar(10, 10)).toBeDefined()
    })
    
    test('La funcion sumar debe recibir 2 argumentos', () => {
        expect(sumar.length).toBe(2)
    })
    
    test('La suma de 5 + 7 debe recibir 12', () => {
        expect(sumar(5, 7)).toBe(12)
    })
    test('La suma de 3 + 3 debe recibir 6', () => {
        expect(sumar(3, 3)).toBe(6)
    })
    test('La suma de 3 + 9 debe recibir 12', () => {
        expect(sumar(3, 9)).toBe(12)
    })
})

describe('Validaciones sobre la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(restar(10, 10)).toBeDefined()
    })
    
    test('La funcion restar debe recibir 2 argumentos', () => {
        expect(restar.length).toBe(2)
    })
    
    test('La resta de 5 - 7 debe recibir -2', () => {
        expect(restar(5, 7)).toBe(-2)
    })
    test('La resta de 3 - 3 debe recibir 0', () => {
        expect(restar(3, 3)).toBe(0)
    })
    test('La resta de 3 - 9 debe recibir -6', () => {
        expect(restar(3, 9)).toBe(-6)
    })
})

describe('Validaciones de la funcion mayorTresNumeros', () => {

    test('La funcion mayorTresNumeros debe existir', () => {
        expect(mayorTresNumeros()).toBeDefined()
    })

    test('La funcion mayorTresNumeros debe recibir 3 argumentos', () => {
        expect(mayorTresNumeros.length).toBe(3)
    })

    test('El mayor de a=6, b=8, c=10 debe ser c=10', () => {
        expect(mayorTresNumeros(6, 8, 10)).toBe("El mayor es C")
    })

    test('El mayor de a=6, b=18, c=10 debe ser b=18', () => {
        expect(mayorTresNumeros(6, 18, 10)).toBe("El mayor es B")
    })

    test('El mayor de a=16, b=8, c=10 debe ser a=16', () => {
        expect(mayorTresNumeros(16, 8, 10)).toBe("El mayor es A")
    })

})