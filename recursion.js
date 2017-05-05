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

let countDownFrom = (num, result) => {
    if (num >= 0){
        result.push(num);
        countDownFrom(num - 1, result)
    } 
    return result
}
console.log(categories)
