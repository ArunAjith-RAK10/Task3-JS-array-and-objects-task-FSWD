// Task 1: Compare two JSON objects irrespective of order
function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(Object.keys(obj1).sort().map(key => [key, obj1[key]])) === 
           JSON.stringify(Object.keys(obj2).sort().map(key => [key, obj2[key]]));
}

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log("Are objects equal?", areObjectsEqual(obj1, obj2)); // Output: true

// Task 2 & 3: Fetch Rest Countries API Data
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        console.log("\nCountry Flags:");
        data.forEach(country => {
            console.log(country.flags?.png || "No flag available");
        });

        console.log("\nCountry Details:");
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Region: ${country.region}, Sub-Region: ${country.subregion}, Population: ${country.population}`);
        });
    })