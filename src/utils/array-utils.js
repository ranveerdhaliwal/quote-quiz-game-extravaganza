// List of names from: 
// https://github.com/bcabanes/simpsons-names
// I cleaned some of them up and added more
import simpsonsNames from './simpsons-names.json';

export function getRandomNames(correctName, number) {
  let names = [];
  while(names.length !== number) {
    let name = simpsonsNames[Math.floor(Math.random()*simpsonsNames.length)];

    // if we dont have the name already and its not the correct answer, then add to list
    if (!names.includes(name) && name.toLowerCase() !== correctName.toLowerCase()) {
      names.push(name);
    }
  }

  return names;
}

// used to shuffle around buttons in array inplace
// https://www.jstips.co/en/javascript/shuffle-an-array/
export function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};