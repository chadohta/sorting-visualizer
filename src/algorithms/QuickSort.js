export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}

function quickSort(array, low, high, animations) {
    if (low >= high) { 
        return;
    }
    let j = partition(array, low, high, animations);
    quickSort(array, low, j - 1, animations);
    quickSort(array, j + 1, high, animations);
}

function partition(array, low, high, animations) {
    let pivot = array[low];
    let i = low;
    let j = high;

    // change color of pivot
    animations.push({type: "colorPivot", barOne: low});

    while (i < j) { 
        while (array[i] <= pivot) { 
            i++;
        }
        while (array[j] > pivot) { 
            j--;
        }
        if (i < j) { 
            // change color of bars you intend to swap + revert them after the swap
            animations.push({type: "foundBars", barOne: i, barTwo: j});
            animations.push({type: "swapBars", barOne: i, barTwo: j, heightOne: array[i], heightTwo: array[j]});
            animations.push({type: "revertColor", barOne: i, barTwo: j});
            swap(array, i, j);
        }
    }
    // place pivot in correct place, change color of swaping + revert
    animations.push({type: "foundBars", barOne: low, barTwo: j});
    animations.push({type: "swapBars", barOne: low, barTwo: j, heightOne: array[low], heightTwo: array[j]});
    animations.push({type: "revertColor", barOne: low, barTwo: j});
    swap(array, low, j);
    return j;
}

function swap(array, i, j) { 
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}