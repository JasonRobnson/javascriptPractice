

// _.each takes two arguments list and callback function => will be called on each item in list

// let suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White"];

// let suspectList = [];

// _.each() = function(list, callback) {
    
//     if (Array.isArray(list)) {
//         // make sure work arrays
//         for ( let i = 0; i < list.length; i++) {
//             callback(list[i], i, list);
//         }
//             //each loop call the call back with a list item
//     } else {
//          //loop through the list
//            //each loop call the call back with a list item
//     }
   
// }

// let suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White"];
// _suspects.each(function (name, i, list) {
  
//     if (list[i + 1]) {
//         console.log(name, 'is younger than', list[i+2] )
//     }
//     else {
//     console.log(name, 'is the oldest')
// }
// })

// let array = ['sally', 'georgie', 'porgie']

// array.forEach((name) => {
//     console.log(name)
// })

//$$$$$$$$difference between each and map is the function doesn't return anything'
 
const weapons = ['candlestick', 'lead pipe', 'revolver']
const makeBroken = (item) => {
    return `broken ${item}`;
}

_.map(weapons,(element) => {
   let brokenWeapons =  makeBroken(element);
   console.log(brokenWeapons)
} )


const _ = {}
_.map = (list, function () {
    let storage = [];

    for (let i = 0; i < list.length; i++) {
        storage.push((list[i, i, list]));
    }
    return storage;
})

_.map([1,2,3], function (val) {
    return val + 1
})