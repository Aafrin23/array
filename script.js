let fruits =["apple","banana"]
function addfruits(str) {
    if (!fruits.includes(str)) {
        fruits.push(str);
    } else {
        console.log(`"${str}" already exists in the array.`);
    }
}
addfruits("orange");
addfruits("avacodo");
addfruits("guava");
addfruits("apple");
fruits.sort()
console.log("Sorted Array:", fruits)
console.log("Length of Array:", fruits.length);