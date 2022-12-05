export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    return animations;
}

function heapSort(array, animations) {
    const heapSize = array.length;
    // build max heap
    for (let i = Math.floor(heapSize / 2 - 1); i >= 0; i--) {
        heapify(array, heapSize, i, animations);
    }

    // heap sort
    for (let i = heapSize - 1; i >= 0; i--) {
        swap(array, 0, i, animations);
        // color bar that marks end of max heap and start of sorted array
        animations.push({ type: "colorCutOffBar", barOne: i });
        if (i !== heapSize - 1) {
            animations.push({ type: "colorSorted", barOne: i + 1 });
        }
        heapify(array, i, 0, animations);
    }
    animations.push({ type: "colorSorted", barOne: 0 });
}

function heapify(array, heapSize, i, animations) {
    let largest = i; // initialize largest as root
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // if left child is larger than root
    if (l < heapSize && array[l] > array[largest]) {
        largest = l;
    }
    // if right child is larger than largest so far
    if (r < heapSize && array[r] > array[largest]) {
        largest = r;
    }

    // if largest is not root
    if (largest !== i) {
        swap(array, i, largest, animations);
        // recursively heapify the affected sub-tree
        heapify(array, heapSize, largest, animations);
    }
}

function swap(array, i, j, animations) {
    animations.push({
        type: "swapBars",
        barOne: i,
        barTwo: j,
        heightOne: array[i],
        heightTwo: array[j],
    });
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
