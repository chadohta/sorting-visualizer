import React, { Component } from 'react';
import '../styles/SortingVisualizer.css';
import { getMergeSortAnimations } from '../algorithms/sorting/MergeSort';
import { getQuickSortAnimations } from '../algorithms/sorting/QuickSort';
import { getHeapSortAnimations } from '../algorithms/sorting/HeapSort';
import { getBubbleSortAnimations } from '../algorithms/sorting/BubbleSort';

class SortingVisualizer extends Component {
    state = { 
        array: [],
    }

    componentDidMount() { 
        this.newArray();
    }

    newArray() { 
        const array = [];
        const min = 10
        const max = 500
        for (let i = 0; i < 80; i++) { 
            array.push(Math.floor(min + Math.random() * (max - min + 1)));
        }
        this.setState({
            array: array,
        });
    }

    visualizeMergeSort() {
        const { array } = this.state;

        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }

    visualizeQuickSort() {
        const { array } = this.state;

        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const type = animations[i].type;
            if (type === "colorPivot") { 
                const pivotBarIdx = animations[i].barOne;
                const pivotBarStyle = arrayBars[pivotBarIdx].style;
                setTimeout(() => {
                    pivotBarStyle.backgroundColor = `rgb(${"255, 145, 55"})`;
                }, i * 10);
            } else if (type === "swapBars") { 
                const barOneIdx = animations[i].barOne;
                const barTwoIdx = animations[i].barTwo;
                const heightOne = animations[i].heightOne;
                const heightTwo = animations[i].heightTwo;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${heightTwo}px`;
                    barTwoStyle.height = `${heightOne}px`;
                }, i * 10);
            } else { //founds bars or revert colors
                const color = type === "foundBars" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
                const barOneIdx = animations[i].barOne;
                const barTwoIdx = animations[i].barTwo;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }
        }
    }

    visualizeHeapSort() {
        const { array } = this.state;

        const animations = getHeapSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const type = animations[i].type;
            if (type === "swapBars") { 
                const barOneIdx = animations[i].barOne;
                const barTwoIdx = animations[i].barTwo;
                const heightOne = animations[i].heightOne;
                const heightTwo = animations[i].heightTwo;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${heightTwo}px`;
                    barTwoStyle.height = `${heightOne}px`;
                }, i * 10);
            } else { // "colorCutOffBar or colorSorted"
                const color = type === "colorCutOffBar" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
                const barOneIdx = animations[i].barOne;
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                }, i * 10);
            }
        }
    }

    visualizeBubbleSort() {
        const { array } = this.state;

        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const type = animations[i].type;
            if (type === "swapBars") {
                const barOneIdx = animations[i].barOne;
                const barTwoIdx = animations[i].barTwo;
                const heightOne = animations[i].heightOne;
                const heightTwo = animations[i].heightTwo;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${heightTwo}px`;
                    barTwoStyle.height = `${heightOne}px`;
                }, i * 10);
            // } else if (type === "colorSorted") {
            //     const barOneIdx = animations[i].barOne;
            //     const barOneStyle = arrayBars[barOneIdx].style;
            //     setTimeout(() => {
            //         barOneStyle.backgroundColor = `rgb(${"255, 145, 55"})`;
            //     }, i * 5);
            } else { //founds bars or revert colors
                const color = type === "foundBars" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
                const barOneIdx = animations[i].barOne;
                const barTwoIdx = animations[i].barTwo;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }
        }
    }

    render() { 
        const { array } = this.state;
        
        return ( 
            <div>
                <button onClick={() => this.newArray()}>Generate New Array</button>
                <button onClick={() => this.visualizeMergeSort()}>Merge Sort</button>
                <button onClick={() => this.visualizeQuickSort()}>Quick Sort</button>
                <button onClick={() => this.visualizeHeapSort()}>Heap Sort</button>
                <button onClick={() => this.visualizeBubbleSort()}>Bubble Sort</button>

                <div className="array-container">
                    {array.map((value, index) => (
                        <div 
                            className="array-bar" 
                            key={index} 
                            style={{
                                height: `${value}px`,
                            }}>
                        </div>
                    ))}
                </div>
            </div>
         );
    }
}
 
export default SortingVisualizer;