// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) => cats.push(name)

const destructivelyPrependCat = (name) => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = (name) => {
    const newCats = [...cats, name]
    return newCats
}

const prependCat = (name) => {
    const newCats1 = [name, ...cats]
    return newCats1
}

const removeLastCat = () => {
    const newCats2 = cats.slice(0, 1)
    return newCats2
}

const removeFirstCat = () => {
    const newCats3 = cats.slice(1)
    return newCats3
}