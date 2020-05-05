// Complete the toys function below.
const toys = function(w) {
  let sorted= w.sort(function(a,b){return b- a})
  console.log(sorted)
  let count = 1; // lowest number assuming will have a box to start
  
  for (let i =w.length - 1, j= w.length - 2; j >=0; j--){
    let lowestLocalVal = w[i];
    console.log()
    if (lowestLocalVal !== w[j] && lowestLocalVal + 1 !== w[j] && lowestLocalVal + 2 !== w[j] && lowestLocalVal + 3 !== w[j] && lowestLocalVal + 4 !== w[j]){
      console.log(lowestLocalVal, w[j],"when this is not true")
      count++
      w[i] = w[j];
    }
  }
  return count;
}

const wght = [1,2,3,21,7,12,14,21]; // 1,2,3, 7, 12,14 ,21
toys(wght);

// items have to be four away to be able to be in the same container. 

// sort container so that we are in order from smallest to largest

// to be in the same box it has to be 4 away to be packaged together 

// as a human, make a box, see which numbers are four away and then add them to the box, 
//increment the number of boxes everytime you are able to not add anymore to that particular box

// take the lowest number, start the box count, find any number that is within 4+ of that number then remove it from the list, before starting increase count by one 

