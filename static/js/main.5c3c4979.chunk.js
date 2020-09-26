(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),i=(a(13),a(14),a(5)),l=a(1),u=a(2),c=a(4),h=a(3);a(15);function m(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,o){if(a===n)return;var s=Math.floor((a+n)/2);e(r,a,s,t,o),e(r,s+1,n,t,o),function(e,t,a,n,r,o){var s=t,i=t,l=a+1;for(;i<=a&&l<=n;)o.push([i,l]),o.push([i,l]),r[i]<=r[l]?(o.push([s,r[i]]),e[s++]=r[i++]):(o.push([s,r[l]]),e[s++]=r[l++]);for(;i<=a;)o.push([i,i]),o.push([i,i]),o.push([s,r[i]]),e[s++]=r[i++];for(;l<=n;)o.push([l,l]),o.push([l,l]),o.push([s,r[l]]),e[s++]=r[l++]}(t,a,s,n,r,o)}(e,0,e.length-1,a,t),t}function b(e){var t=[];return e.length<=1?e:(function e(t,a,n,r){if(a>=n)return;var o=function(e,t,a,n){var r=e[t],o=t,s=a;n.push({type:"colorPivot",barOne:t});for(;o<s;){for(;e[o]<=r;)o++;for(;e[s]>r;)s--;o<s&&(n.push({type:"foundBars",barOne:o,barTwo:s}),n.push({type:"swapBars",barOne:o,barTwo:s,heightOne:e[o],heightTwo:e[s]}),n.push({type:"revertColor",barOne:o,barTwo:s}),p(e,o,s))}return n.push({type:"foundBars",barOne:t,barTwo:s}),n.push({type:"swapBars",barOne:t,barTwo:s,heightOne:e[t],heightTwo:e[s]}),n.push({type:"revertColor",barOne:t,barTwo:s}),p(e,t,s),s}(t,a,n,r);e(t,a,o-1,r),e(t,o+1,n,r)}(e,0,e.length-1,t),t)}function p(e,t,a){var n=e[t];e[t]=e[a],e[a]=n}function d(e){var t=[];return e.length<=1?e:(function(e,t){for(var a=e.length,n=Math.floor(a/2-1);n>=0;n--)g(e,a,n,t);for(var r=a-1;r>=0;r--)f(e,0,r,t),t.push({type:"colorCutOffBar",barOne:r}),r!==a-1&&t.push({type:"colorSorted",barOne:r+1}),g(e,r,0,t);t.push({type:"colorSorted",barOne:0})}(e,t),t)}function g(e,t,a,n){var r=a,o=2*a+1,s=2*a+2;o<t&&e[o]>e[r]&&(r=o),s<t&&e[s]>e[r]&&(r=s),r!==a&&(f(e,a,r,n),g(e,t,r,n))}function f(e,t,a,n){n.push({type:"swapBars",barOne:t,barTwo:a,heightOne:e[t],heightTwo:e[a]});var r=e[t];e[t]=e[a],e[a]=r}function v(e){var t=[];return e.length<=1?e:(function(e,t){for(var a=e.length,n=1;n<a;n++)for(var r=0;r<a-n;r++)t.push({type:"foundBars",barOne:r,barTwo:r+1}),e[r]>e[r+1]&&y(e,r,r+1,t),t.push({type:"revertColor",barOne:r,barTwo:r+1})}(e,t),t)}function y(e,t,a,n){n.push({type:"swapBars",barOne:t,barTwo:a,heightOne:e[t],heightTwo:e[a]});var r=e[t];e[t]=e[a],e[a]=r}a(16);var w=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Sorting Algorithms "),r.a.createElement("p",null," This application visualizes various sorting algorithms. "),r.a.createElement("p",{className:"app-desc"},"Below are descriptions of each algorithm implemented in this application."),r.a.createElement("h3",null," Divide and Conquer "),r.a.createElement("p",null,'Merge and Quick Sort are both "divide and conquer" algorithms and thus it\'s easier to understand how they work if we first discuss this term.'),r.a.createElement("p",null,"Divide and Conquer essentially means to continuously break down the problem into smaller sub-problems until it is simple enough to solve easily. For sorting, that point would be when the entire group of bars is broken down into many sub-groups of individual bars. When there is only one bar in each group, all groups are technically sorted. These solutions are then combined to answer the original, much larger problem."),r.a.createElement("div",{className:"alg-description-1"},r.a.createElement("h4",null," Merge Sort "),r.a.createElement("p",{className:"alg-des-italic"}," divide and conquer, stable "),r.a.createElement("p",{className:"alg-des"},"Merge Sort will divide the group of bars into many sub-groups containing one bar each. Again, since there is only one bar in each group, each group is technically sorted. Merge sort then merges the sorted sub-groups back together which eventually leads to one large group of bars that is now sorted!")),r.a.createElement("div",{className:"alg-description-1"},r.a.createElement("h4",null," Quick Sort "),r.a.createElement("p",{className:"alg-des-italic"}," divide and conquer, not stable "),r.a.createElement("p",{className:"alg-des"},"Quick sort is similar to merge sort in that it is also a divide and conquor algorithm however quick sort actually sorts the bars while it's dividing (breaking down into sub-groups). The algorithm selects a pivot bar and essentially creates two sub-groups, one with bars smaller than the pivot and the other with bars larger than the pivot. It then does the same thing with the two sub-lists and so on until all bars are sorted.")),r.a.createElement("div",{className:"alg-description-1"},r.a.createElement("h4",null," Heap Sort "),r.a.createElement("p",{className:"alg-des-italic"}," not stable "),r.a.createElement("p",{className:"alg-des"},'Heap Sort utilizes max heaps to find the largest bar in the group and then moves it to the end or the "sorted section". It continuous to do this until all bars are sorted.')),r.a.createElement("div",{className:"alg-description-1"},r.a.createElement("h4",null," Bubble Sort "),r.a.createElement("p",{className:"alg-des-italic"}," stable "),r.a.createElement("p",{className:"alg-des"},"Bubble Sort continuously compares adjacent bars and swaps them if they are not in sorted order. This leads to the largest bars being pushed to the end and eventually all bars will be sorted. As you will see with the visualizer, bubble sort is very slow compared to the other algorithms.")),r.a.createElement("h3",null," Stable vs. Not Stable "),r.a.createElement("p",null,"Stability is concerned with how an algorithm handles equal elements (in this case, bars of the same size). To be stable means the algorithm will preserve the order in which the equivalent bars were in orginally."))}}]),a}(n.Component),k=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={array:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.newArray()}},{key:"newArray",value:function(){for(var e=[],t=0;t<80;t++)e.push(Math.floor(10+491*Math.random()));this.setState({array:e})}},{key:"lockButtons",value:function(){document.querySelectorAll("button").forEach((function(e){e.disabled=!0}))}},{key:"unlockSortButtons",value:function(){document.querySelectorAll(".sortBtn").forEach((function(e){e.disabled=!1}))}},{key:"unlockResetButtons",value:function(){document.querySelectorAll(".resetBtn").forEach((function(e){e.disabled=!1}))}},{key:"reset",value:function(){this.newArray(),this.unlockSortButtons()}},{key:"visualizeMergeSort",value:function(){var e=this;this.lockButtons();for(var t=m(this.state.array),a=function(e){var a=document.getElementsByClassName("array-bar");if(e%3!==2){var n=Object(i.a)(t[e],2),r=n[0],o=n[1],s=a[r].style,l=a[o].style,u="rgb(".concat(e%3===0?"236, 77, 77":"30, 199, 221",")");setTimeout((function(){s.backgroundColor=u,l.backgroundColor=u}),10*e)}else setTimeout((function(){var n=Object(i.a)(t[e],2),r=n[0],o=n[1];a[r].style.height="".concat(o,"px")}),10*e)},n=0;n<t.length;n++)a(n);setTimeout((function(){e.unlockResetButtons()}),10*t.length)}},{key:"visualizeQuickSort",value:function(){var e=this;this.lockButtons();for(var t=b(this.state.array),a=0;a<t.length;a++){var n=document.getElementsByClassName("array-bar"),r=t[a].type;"colorPivot"===r?function(){var e=t[a].barOne,r=n[e].style;setTimeout((function(){r.backgroundColor="rgb(".concat("255, 145, 55",")")}),100*a)}():"swapBars"===r?function(){var e=t[a].barOne,r=t[a].barTwo,o=t[a].heightOne,s=t[a].heightTwo,i=n[e].style,l=n[r].style;setTimeout((function(){i.height="".concat(s,"px"),l.height="".concat(o,"px")}),100*a)}():function(){var e="rgb(".concat("foundBars"===r?"236, 77, 77":"30, 199, 221",")"),o=t[a].barOne,s=t[a].barTwo,i=n[o].style,l=n[s].style;setTimeout((function(){i.backgroundColor=e,l.backgroundColor=e}),100*a)}()}setTimeout((function(){e.unlockResetButtons()}),100*t.length)}},{key:"visualizeHeapSort",value:function(){var e=this;this.lockButtons();for(var t=d(this.state.array),a=0;a<t.length;a++){var n=document.getElementsByClassName("array-bar"),r=t[a].type;"swapBars"===r?function(){var e=t[a].barOne,r=t[a].barTwo,o=t[a].heightOne,s=t[a].heightTwo,i=n[e].style,l=n[r].style;setTimeout((function(){i.height="".concat(s,"px"),l.height="".concat(o,"px")}),10*a)}():function(){var e="rgb(".concat("colorCutOffBar"===r?"236, 77, 77":"30, 199, 221",")"),o=t[a].barOne,s=n[o].style;setTimeout((function(){s.backgroundColor=e}),10*a)}()}setTimeout((function(){e.unlockResetButtons()}),10*t.length)}},{key:"visualizeBubbleSort",value:function(){var e=this;this.lockButtons();for(var t=v(this.state.array),a=0;a<t.length;a++){var n=document.getElementsByClassName("array-bar"),r=t[a].type;"swapBars"===r?function(){var e=t[a].barOne,r=t[a].barTwo,o=t[a].heightOne,s=t[a].heightTwo,i=n[e].style,l=n[r].style;setTimeout((function(){i.height="".concat(s,"px"),l.height="".concat(o,"px")}),10*a)}():function(){var e="rgb(".concat("foundBars"===r?"236, 77, 77":"30, 199, 221",")"),o=t[a].barOne,s=t[a].barTwo,i=n[o].style,l=n[s].style;setTimeout((function(){i.backgroundColor=e,l.backgroundColor=e}),10*a)}()}setTimeout((function(){e.unlockResetButtons()}),10*t.length)}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",null,r.a.createElement("h1",null," Sorting Visualizer "),r.a.createElement("button",{className:"sortBtn",onClick:function(){return e.visualizeMergeSort()}},"Merge Sort"),r.a.createElement("button",{className:"sortBtn",onClick:function(){return e.visualizeQuickSort()}},"Quick Sort"),r.a.createElement("button",{className:"sortBtn",onClick:function(){return e.visualizeHeapSort()}},"Heap Sort"),r.a.createElement("button",{className:"sortBtn",onClick:function(){return e.visualizeBubbleSort()}},"Bubble Sort"),r.a.createElement("div",{className:"array-container"},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{height:"".concat(e,"px")}})}))),r.a.createElement("button",{className:"resetBtn",onClick:function(){return e.reset()}},"Reset"),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement(w,null)))}}]),a}(n.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5c3c4979.chunk.js.map