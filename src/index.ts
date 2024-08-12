export function fibRecursive(n: number): number {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2)
  }
}

const savedFibs = new Map<number, number>()
export function fibMemo(n: number): number {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (savedFibs.has(n)) {
    return savedFibs.get(n)!
  } else {
    const result = fibMemo(n - 1) + fibMemo(n - 2)
    savedFibs.set(n, result)
    return result
  }
}

export function fibMemoFresh(n: number): number {
  savedFibs.clear()
  return fibMemo(n)
}

export function fibMemoBottomUp(n: number): number {
  const savedFibs: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    savedFibs.push(savedFibs[i-1] + savedFibs[i-2])
  }
  return savedFibs[n]
}

export function fibIterative(n: number): number {
  if (n === 0) {
    return 0
  }
  // fib(i-2)
  let prev = 0
  // fib(i-1)
  let current = 1
  for (let i = 2; i <= n; i++) {
    // fib(i)
    const next = prev + current
    prev = current
    current = next
  }
  return current
}

export function pow(x: number, n: number) {
  let product = 1
  let square = x
  while (n > 0) {
    const remainder = n % 2
    if (remainder === 1) {
      product *= square
    }
    n = Math.floor(n / 2)
    square = square * square
  }
  return product
}

export function matPow(M: number[][], n: number) {
  // assume M is a square matrix
  const size = M.length
  let product = identity(size)
  let square = M
  while (n > 0) {
    const remainder = n % 2
    if (remainder === 1) {
      product = matMul(product, square)
    }
    n = Math.floor(n / 2)
    square = matMul(square, square)
  }
  return product
}

export function matMul(A: number[][], B: number[][]) {
  // assume A,B are square matrices of the same size to keep things simple
  const size = A.length
  const product = []
  for (let r = 0; r < size; r++) {
    const row = []
    for (let c = 0; c < size; c++) {
      let dot = 0
      for (let i = 0; i < size; i++) {
        dot += A[r][i] * B[i][c]
      }
      row.push(dot)
    }
    product.push(row)
  }
  return product
}

// Identity matrix
export function identity(size: number): number[][] {
  const M = []
  for(let r = 0; r < size; r++) {
    const row = Array(size).fill(0)
    row[r] = 1
    M.push(row)
  }
  return M
}

const M = [
    [1,1],
    [1,0]
]

export function fibMat(n: number) {
  return matPow(M, n)[0][1]
}