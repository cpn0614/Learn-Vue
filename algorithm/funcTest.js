function getCode(str) {
  let codes = str.match(/`.+?`/g)
  while(codes && codes.length >= 0) {
    let code = codes[0]
    str = str.split(code).join(`<code>${code.substring(1, code.length - 1)}</code>`)
    codes = str.match(/`.+?`/g)
  }
  return str
}

console.log(getCode('abgfa`asf`d'))