// 5) თქვენი ხელით შექმენით map და filter ფუნქციები manualMap და manualFilter


let nums = [1,2,3,4,5,6,7,8,9,10]


const dubles = map((n) => {
    return n * 2
},nums)
console.log(dubles)

const evens = filter((n) => {
    return n * 2 == 0
} ,nums)
console.log(evens)
