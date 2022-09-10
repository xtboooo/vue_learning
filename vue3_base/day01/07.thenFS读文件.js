import thenFS from 'then-fs'

thenFS.readFile('./files/1.txt', 'utf8').then(r1 => {
  console.log(r1)
})
thenFS.readFile('./files/2.txt', 'utf8').then(r2 => {
  console.log(r2)
})
thenFS.readFile('./files/3.txt', 'utf8').then(r3 => {
  console.log(r3)
})
