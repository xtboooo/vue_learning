import thenFS from 'then-fs'

thenFS
  .readFile('./files/11.txt', 'utf8')
  .catch(err => {
    console.log(err)
  })
  .then(r1 => {
    console.log(r1)
    return thenFS.readFile('./files/2.txt', 'utf8')
  })
  .then(r2 => {
    console.log(r2)
    return thenFS.readFile('./files/3.txt', 'utf8')
  })
  .then(r3 => {
    console.log(r3)
  })
