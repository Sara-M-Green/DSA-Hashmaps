const HashMap = require('./hashmaps')

function main() {
    const lotr = new HashMap()
    lotr.MAX_LOAD_RATIO = 0.5
    lotr.SIZE_RATIO = 3

    lotr.set("Hobbit", "Bilbo")
    lotr.set("Hobbit", "Frodo")
    lotr.set("Wizard", "Gandalf")
    lotr.set("Human", "Aragorn")
    lotr.set("Elf", "Legolas")
    lotr.set("Maiar", "The Necromancer")
    lotr.set("Maiar", "Sauron")
    lotr.set("RingBearer", "Gollum")
    lotr.set("LadyOfLight", "Galadriel")
    lotr.set("HalfElven", "Arwen")
    lotr.set("Ent", "Treebeard")

    lotr.get("Maiar")
    lotr.get("Hobbit")
    // keys must be unique. These were both duplicate keys replace with the second value set
    return lotr

    // capacity 24 - resizes when load ratio > max load ratio
}

// console.log(main())

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

// console.log(WhatDoesThisDo())

const duplicates = function(str) {
    const duplicate = new HashMap()
    for (let i = 0; i < str.length; i++) {
        duplicate.set(str[i], str[i])
    }
    let newStr = ''
    duplicate._hashTable.forEach((letter) => {
        newStr += letter.value
    })
    console.log(newStr)
}

// console.log(duplicates('google all that you think can think of'))

const palindrome = function(str) {
    const palindromeMap = new Map()
    let odd = 0
    for (let i = 0; i < str.length; i++) {
        if (palindromeMap.get(str[i]) === undefined) {
            palindromeMap.set(str[i], 1)
        } else {
            let char = palindromeMap.get(str[i])
            palindromeMap.set(str[i], (char += 1))
        }
    }

    for (let i = 0; i < palindromeMap.size; i++) {
        if (palindromeMap.get(str[i]) % 2 !== 0) {
            odd ++
        }
        if (odd > 1) {
            return false
        }
    }
    return true
}

// console.log(palindrome('north'))

const anagram = function(arr) {
    const anagramMap = new Map()
    arr.forEach((word) => {
        let sorted = word.split("").sort().join("")
        if (anagramMap.has(sorted)) {
            anagramMap.get(sorted).push(word)
        } else {
            anagramMap.set(sorted, [word])
        }
    })
    return [...anagramMap.values()]
}

console.log(anagram(["east", "cars", "acre", "arcs", "teas", "eats", "race"]))