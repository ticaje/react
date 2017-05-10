
let result = []
const number = 15
let countDownFrom = (num, result) => {
  if (num >= 0){
    result.push(num);
    countDownFrom(num - 1, result)
  }
  return result
}
//console.log(countDownFrom(number, result))

let categories = [
{id: 'animals', 'parent':null},
{id: 'mammals', 'parent': 'animals'},
{id: 'cats','parent': 'mammals' },
{id: 'dogs', 'parent': 'mammals'},
{id: 'buldog', 'parent':'dogs'},
{id: 'persian', 'parent':'cats'},
{id: 'chauchau', 'parent':'dogs'},
{id: 'siamese', 'parent':'cats'},
{id: 'pointer', 'parent':'dogs'},
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(cat => cat.parent === parent)
    .forEach(cat =>
        node[cat.id] = makeTree(categories, cat.id)
        )
    return node
}
//console.log(JSON.stringify(makeTree(categories, null), null, 2))

var ages = [32, 33, 16, 40];
let oldies = (ages, criteria) => {
  let res = []
    ages
    .filter(a => a > criteria)
    .forEach(a => {
      res.push(a+5)
    })
  return res
}
console.log(oldies(ages, 20))

