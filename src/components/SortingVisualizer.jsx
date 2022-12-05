import React, { Component } from "react";
import "../styles/SortingVisualizer.css";
import { getMergeSortAnimations } from "../algorithms/MergeSort";
import { getQuickSortAnimations } from "../algorithms/QuickSort";
import { getHeapSortAnimations } from "../algorithms/HeapSort";
import { getBubbleSortAnimations } from "../algorithms/BubbleSort";
import Info from "./Info";

class SortingVisualizer extends Component {
    state = {
        array: [],
    };

    componentDidMount() {
        this.newArray();
    }

    newArray() {
        const array = [];
        const min = 10;
        const max = 500;
        for (let i = 0; i < 80; i++) {
            array.push(Math.floor(min + Math.random() * (max - min + 1)));
        }
        this.setState({
            array: array,
        });
    }

    lockButtons() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }

    unlockSortButtons() {
        const buttons = document.querySelectorAll(".sortBtn");
        buttons.forEach((button) => {
            button.disabled = false;
        });
    }

    unlockResetButtons() {
        const buttons = document.querySelectorAll(".resetBtn");
        buttons.forEach((button) => {
            button.disabled = false;
        });
    }

    reset() {
        this.newArray();
        this.unlockSortButtons();
    }

    visualizeMergeSort() {
        this.lockButtons();
        const { array } = this.state;

        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
        setTimeout(() => {
            this.unlockResetButtons();
        }, 10 * animations.length);
    }

    visualizeQuickSort() {
        this.lockButtons();
        const { array } = this.state;

        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
            } else {
                //founds bars or revert colors
                const color =
                    type === "foundBars" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
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
        setTimeout(() => {
            this.unlockResetButtons();
        }, 10 * animations.length);
    }

    visualizeHeapSort() {
        this.lockButtons();
        const { array } = this.state;

        const animations = getHeapSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
            } else {
                // "colorCutOffBar or colorSorted"
                const color =
                    type === "colorCutOffBar" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
                const barOneIdx = animations[i].barOne;
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                }, i * 10);
            }
        }
        setTimeout(() => {
            this.unlockResetButtons();
        }, 10 * animations.length);
    }

    visualizeBubbleSort() {
        this.lockButtons();
        const { array } = this.state;

        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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
            } else {
                //founds bars or revert colors
                const color =
                    type === "foundBars" ? `rgb(${"236, 77, 77"})` : `rgb(${"30, 199, 221"})`;
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
        setTimeout(() => {
            this.unlockResetButtons();
        }, 10 * animations.length);
    }

    render() {
        const { array } = this.state;

        return (
            <div>
                <h1> Sorting Visualizer </h1>
                <button className="sortBtn" onClick={() => this.visualizeMergeSort()}>
                    Merge Sort
                </button>
                <button className="sortBtn" onClick={() => this.visualizeQuickSort()}>
                    Quick Sort
                </button>
                <button className="sortBtn" onClick={() => this.visualizeHeapSort()}>
                    Heap Sort
                </button>
                <button className="sortBtn" onClick={() => this.visualizeBubbleSort()}>
                    Bubble Sort
                </button>

                <div className="array-container">
                    {array.map((value, index) => (
                        <div
                            className="array-bar"
                            key={index}
                            style={{
                                height: `${value}px`,
                            }}
                        ></div>
                    ))}
                </div>

                <button className="resetBtn" onClick={() => this.reset()}>
                    Reset
                </button>

                <div className="info-wrapper">
                    <Info />
                </div>
            </div>
        );
    }
}

export default SortingVisualizer;
