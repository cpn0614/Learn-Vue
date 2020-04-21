function fibonacci(num) {
  let num = 1
  if (num < 1) {
    return
  } else if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(4))
