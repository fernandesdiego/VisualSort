function insert(){
    let str = document.getElementById('list').value;
    let arr = str.split(',');

    for(let i = 0; i< arr.length; i++){        
        document.getElementById('sort1').innerHTML += `<div class='item tile1' style='height: ${arr[i]}px'>${arr[i]}</div>`
        document.getElementById('sort2').innerHTML += `<div class='item tile2' style='height: ${arr[i]}px'>${arr[i]}</div>`
        document.getElementById('sort3').innerHTML += `<div class='item tile3' style='height: ${arr[i]}px'>${arr[i]}</div>`
        document.getElementById('sort4').innerHTML += `<div class='item tile4' style='height: ${arr[i]}px'>${arr[i]}</div>`
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function sort(){
    
    let bs = document.getElementsByClassName('tile1');
    bubbleSort(bs);
    let ss = document.getElementsByClassName('tile2');
    selectionSort(ss);


}

async function bubbleSort(arr){
    let t0 = performance.now();
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j].offsetHeight > arr[j+1].offsetHeight){
                //style
                let temp = arr[j].style.height;
                arr[j].style.height = arr[j+1].style.height;
                arr[j+1].style.height = temp;
                //value
                let vtemp = arr[j].textContent;
                arr[j].textContent = arr[j+1].textContent;
                arr[j+1].textContent = vtemp;

                await sleep(1);
            }
        }
    }
    var t1 = performance.now();
    let timeElapsed = t1-t0;
    document.getElementById('title1').append(` ->> Time elapsed: ${timeElapsed}`);
    console.log(`BubbleSort > Time elapsed = ${timeElapsed}`);
}

async function selectionSort(arr){
    let t0 = performance.now();
    let len = arr.length;
    for (let i = 0; i < len; i++){
        let min = i
        for (let j = i+1; j < len; j++){
            if(arr[min].offsetHeight > arr[j].offsetHeight){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i].style.height;
            arr[i].style.height   = arr[min].style.height;
            arr[min].style.height = temp;
            await sleep(1);
        }
    }
    var t1 = performance.now();
    let timeElapsed = t1-t0;
    document.getElementById('title2').append(` ->> Time elapsed: ${timeElapsed}`);
    console.log(`SelectionSort > Time elapsed = ${timeElapsed}`);
}


async function mergeSort (arr) {

    if (arr.length <= 1) {
      return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
  
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
      
    return merge(
      mergeSort(left), mergeSort(right)
    );
}

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}
