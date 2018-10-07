//opdracht 1

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
const random = lapRounds[Math.floor(lapRounds.length*Math.random())];

console.log(random);

console.log("---------------------------------------------------------");

//opdracht 2

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

for(let row = 0; row < allMyRecords.length; row++){
    for(let column = 0; column < allMyRecords[row].length; column++)
    console.log(allMyRecords[row][column]);
}

console.log("---------------------------------------------------------");

function isSmallEnough(value){
    return value < 4;
}

let newArray = lapRounds.filter(isSmallEnough);
console.log(newArray);

//.filter kan relatief snel worden gebruikt en heeft maar weinig code nodig om zijn resultaat te bereiken. Daardoor is het ook overzichtelijker.