import {fibIterative, fibMat, fibMemo, fibMemoBottomUp, fibRecursive, matPow, pow} from "."

describe('fibRecursive', () => {
    it('works', () => {
        expect(fibRecursive(0)).toEqual(0)
        expect(fibRecursive(1)).toEqual(1)
        expect(fibRecursive(2)).toEqual(1)
        expect(fibRecursive(3)).toEqual(2)
        expect(fibRecursive(4)).toEqual(3)
        expect(fibRecursive(5)).toEqual(5)
        expect(fibRecursive(6)).toEqual(8)
    })
})

describe('fibMemo', () => {
    it('works', () => {
        expect(fibMemo(0)).toEqual(0)
        expect(fibMemo(1)).toEqual(1)
        expect(fibMemo(2)).toEqual(1)
        expect(fibMemo(3)).toEqual(2)
        expect(fibMemo(4)).toEqual(3)
        expect(fibMemo(5)).toEqual(5)
        expect(fibMemo(6)).toEqual(8)
    })
})

describe('fibMemoBottomUp', () => {
    it('works', () => {
        expect(fibMemoBottomUp(0)).toEqual(0)
        expect(fibMemoBottomUp(1)).toEqual(1)
        expect(fibMemoBottomUp(2)).toEqual(1)
        expect(fibMemoBottomUp(3)).toEqual(2)
        expect(fibMemoBottomUp(4)).toEqual(3)
        expect(fibMemoBottomUp(5)).toEqual(5)
        expect(fibMemoBottomUp(6)).toEqual(8)
    })
})

describe('fibIterative', () => {
    it('works', () => {
        expect(fibIterative(0)).toEqual(0)
        expect(fibIterative(1)).toEqual(1)
        expect(fibIterative(2)).toEqual(1)
        expect(fibIterative(3)).toEqual(2)
        expect(fibIterative(4)).toEqual(3)
        expect(fibIterative(5)).toEqual(5)
        expect(fibIterative(6)).toEqual(8)
    })
})

describe('pow', () => {
    it('works', () => {
        expect(pow(10, 0)).toEqual(1)
        expect(pow(10, 1)).toEqual(10)
        expect(pow(10, 2)).toEqual(100)
        expect(pow(10, 3)).toEqual(1000)
        expect(pow(10, 7)).toEqual(10000000)
    })
})

describe('matPow', () => {
    it('works', () => {
        const M = [
            [1,1],
            [1,0]
        ]
        expect(matPow(M, 2)).toEqual([
            [2,1],
            [1,1]
        ])
        expect(matPow(M, 3)).toEqual([
            [3,2],
            [2,1]
        ])
        expect(matPow(M, 4)).toEqual([
            [5,3],
            [3,2]
        ])
        expect(matPow(M, 5)).toEqual([
            [8,5],
            [5,3]
        ])
    })
})

describe('fibMat', () => {
    it('works', () => {
        expect(fibMat(0)).toEqual(0)
        expect(fibMat(1)).toEqual(1)
        expect(fibMat(2)).toEqual(1)
        expect(fibMat(3)).toEqual(2)
        expect(fibMat(4)).toEqual(3)
        expect(fibMat(5)).toEqual(5)
        expect(fibMat(6)).toEqual(8)
    })
})
