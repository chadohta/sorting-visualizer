export const getBubbleSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
};

function bubbleSort(array, animations) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            animations.push({ type: "foundBars", barOne: j, barTwo: j + 1 });
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1, animations);
            }
            animations.push({ type: "revertColor", barOne: j, barTwo: j + 1 });
        }
        // color the last items in the array (sorted position)
        // animations.push({type: "colorSorted", barOne: n - i });
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
