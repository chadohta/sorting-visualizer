import React, { Component } from 'react';
import '../styles/Info.css';

class Info extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2> Sorting Algorithms </h2>
                <p> This application visualizes various sorting algorithms. </p> 
                <p className="app-desc">
                    Below are descriptions of each algorithm implemented in this
                    application.
                </p>

                <h3> Divide and Conquer </h3>
                <p>
                    Merge and Quick Sort are both "divide and conquer" algorithms and thus
                    it's easier to understand how they work if we first discuss this term. 
                </p>
                <p>
                    Divide and Conquer essentially means to continuously break down the problem
                    into smaller sub-problems until it is simple enough to solve easily. For
                    sorting, that point would be when the entire group of bars is broken down into
                    many sub-groups of individual bars. When there is only one bar in each group, 
                    all groups are technically sorted. These solutions are then combined to 
                    answer the original, much larger problem.
                </p>

                <div className="alg-description-1">
                    <h4> Merge Sort </h4>
                    <p className="alg-des-italic"> divide and conquer, stable </p>
                    <p className="alg-des">                        
                        Merge Sort will divide the group of bars into many sub-groups 
                        containing one bar each. Again, since there is only one bar in each
                        group, each group is technically sorted. Merge sort then
                        merges the sorted sub-groups back together which eventually leads to one 
                        large group of bars that is now sorted!
                    </p>
                </div>
                <div className="alg-description-1">
                    <h4> Quick Sort </h4>
                    <p className="alg-des-italic"> divide and conquer, not stable </p>
                    <p className="alg-des">
                        Quick sort is similar to merge sort in that it is also a divide and 
                        conquor algorithm however quick sort actually sorts the bars
                        while it's dividing (breaking down into sub-groups). 
                        
                        The algorithm selects a pivot bar and essentially creates two sub-groups, 
                        one with bars smaller than the pivot and the other with bars larger than 
                        the pivot. It then does the same thing with the two sub-lists and so on 
                        until all bars are sorted.
                    </p>
                </div>
                <div className="alg-description-1">
                    <h4> Heap Sort </h4>
                    <p className="alg-des-italic"> not stable </p>
                    <p className="alg-des">
                        Heap Sort utilizes max heaps to find the largest bar in the group and
                        then moves it to the end or the "sorted section". It continuous to do this
                        until all bars are sorted.
                    </p>
                </div>
                <div className="alg-description-1">
                    <h4> Bubble Sort </h4>
                    <p className="alg-des-italic"> stable </p>
                    <p className="alg-des">
                        Bubble Sort continuously compares adjacent bars and swaps them if 
                        they are not in sorted order. This leads to the largest bars being pushed to the
                        end and eventually all bars will be sorted. As you will see with 
                        the visualizer, bubble sort is very slow compared to the other algorithms.
                    </p>
                </div>

                <h3> Stable vs. Not Stable </h3>
                <p>
                    Stability is concerned with how an algorithm handles equal elements 
                    (in this case, bars of the same size). To be stable means the algorithm
                    will preserve the order in which the equivalent bars were in orginally.
                </p>
            </div>
        );
    }
}

export default Info;