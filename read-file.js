import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('  '))
.reduce((customers, line) => {
    var current = customers[line[0]]
    current = current || []
    current.push({
        name : line[1],
        price: line[3]

    })
    customers[line[0]] = current
    return customers
}, {})

console.log('output', JSON.stringify(output, null, 2))
