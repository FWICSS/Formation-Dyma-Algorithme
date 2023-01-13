const a = [], b = [], c = []

function initHanoi(n) {
    for (let i = n; n > 0; n--) {
        a.push(n)
    }
}

function solvedHanoi(nbrOfElement, origin, free, destination){
    if(nbrOfElement > 0){
        solvedHanoi(nbrOfElement-1,origin,destination, free)
        destination.push(origin.pop());
        console.log("a : ",a)
        console.log("b : ",b)
        console.log("c : ",c)
        console.log("**************************")
        solvedHanoi(nbrOfElement-1,free,origin,destination);
    }
}
const nbelement = 3;
initHanoi(nbelement)

console.log("a : ",a)
console.log("b : ",b)
console.log("c : ",c)
console.log("**************************")

solvedHanoi(nbelement,a,b,c)