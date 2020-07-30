export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSort(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let mainArrayIdx = startIdx;
    let arrayOneIdx = startIdx;
    let arrayTwoIdx = middleIdx + 1;
    while (arrayOneIdx <= middleIdx && arrayTwoIdx <= endIdx) {
        animations.push([arrayOneIdx, arrayTwoIdx]); // color change (comparing)
        animations.push([arrayOneIdx, arrayTwoIdx]); // revert color 

        if (auxiliaryArray[arrayOneIdx] <= auxiliaryArray[arrayTwoIdx]) {
            // value from arrayOne is smaller, set this number in main array
            animations.push([mainArrayIdx, auxiliaryArray[arrayOneIdx]]);
            mainArray[mainArrayIdx++] = auxiliaryArray[arrayOneIdx++];
        } else {
            // value from arrayTwo is smaller, set this number in main array
            animations.push([mainArrayIdx, auxiliaryArray[arrayTwoIdx]]);
            mainArray[mainArrayIdx++] = auxiliaryArray[arrayTwoIdx++];
        }
    }
    while (arrayOneIdx <= middleIdx) {
        animations.push([arrayOneIdx, arrayOneIdx]);
        animations.push([arrayOneIdx, arrayOneIdx]);

        // arrayTwo is empty, push the rest of arrayOne values to mainArray
        animations.push([mainArrayIdx, auxiliaryArray[arrayOneIdx]]);
        mainArray[mainArrayIdx++] = auxiliaryArray[arrayOneIdx++];
    }
    while (arrayTwoIdx <= endIdx) {
        animations.push([arrayTwoIdx, arrayTwoIdx]);
        animations.push([arrayTwoIdx, arrayTwoIdx]);

        // arrayOne is empty, push the rest of arrayTwo values to mainArray
        animations.push([mainArrayIdx, auxiliaryArray[arrayTwoIdx]]);
        mainArray[mainArrayIdx++] = auxiliaryArray[arrayTwoIdx++];
    }
}